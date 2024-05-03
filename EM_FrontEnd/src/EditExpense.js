import React from 'react'
import axios from 'axios';


function EditExpense(props){

    function handleEdit(){
        console.log("Edit Clicked");
        window.alert(
            <div>
            <h4>Edit Expense</h4>
            <form >
                <input type="text" name="expenseCategory" />
                <input type="text" name="expenseName" />
                <input type="text" name="amountSpent" />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
        )
      }

    return(

       
        //window.alert("Update")

        <div>
            <h4>Edit Expense</h4>
            <form >
            <input type="text" name="expenseCategory" />
                <input type="text" name="expenseName" />
                <input type="text" name="amountSpent" />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )

}

export default EditExpense