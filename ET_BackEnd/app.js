const express = require('express') // caching the modules on the first require call. returns a package
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors');

const app = express(); // creating object for express function
const port = 3000;

//Middleware
app.use(bodyParser.json());
app.use(cors());

//DB : MySql Connection
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'Anu$ha1897',
    database: 'expensemanager'
});

db.connect(err => {
    if(err){
        console.log('Error connection to MySqL : ', err )
        process.exit(1)
    }
    console.log('Connected to DB')
});

//Start the server
app.listen(port,()=>{
    console.log(`Server started running on ${port}`)
})

//Get All Expenses
app.get('/list',(req,res)=>{
    console.log("Hi")
    db.query('SELECT * FROM expenses',(err,results) => {
        
        if(err){
            return res.status(500).send('Error fetching tasks')
        }
        res.send(results)
    })
});

//Add Expense
app.post('/add-expense',(req,res)=>{
    const { expense_category,expense_name,amount_spent,expense_date } = req.body;
    console.log(req.body)
    db.query('INSERT INTO expenses (expense_category,expense_name,amount_spent,expense_date) VALUES (?, ?,?,?)', [expense_category,expense_name,amount_spent,expense_date],
        (err,result)=>{
        //console.log(query)
        if(err){
            return res.status(500).send('Error creating task')
        }
        res.status(201).send({ id: result.id, expense_category,expense_name, amount_spent,expense_date });
    });
})

//Delete 
app.delete('/delete-expense/:id',(req,res)=>{
    const {id} = req.params 
    db.query('DELETE FROM expenses where id = ?' , [id] , (err,result)=>{
        if(err){
            return res.status(500).send('Error deleting the expense')
        }
        if(result.affectedRows === 0){
            return res.status(404).send('Expense not found')
        }
        res.send('Expense deleted')
    })
})

//Edit 
app.patch('/edit-expense',(req,res)=>{ 
    const {id,expense_category,expense_name,amount_spent,expense_date } = req.body;
    const   id1 = req.body.id
    console.log(req.body)
    db.query('UPDATE expenses SET ?  where id = ?',[req.body,id1],(err,result)=>{
        if(err){
            console.log(err)
           return res.status(500).send('Error updating Expense')
        }
        if(result.affectedRows === 0){
           return res.status(404).send('Expense not found')
        }
        res.send('Expense Updated')
    })
});