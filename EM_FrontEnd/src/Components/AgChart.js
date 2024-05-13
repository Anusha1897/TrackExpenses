import react, { useEffect }  from "react";
import { AgChartsReact } from "ag-charts-react";

// react.useEffect(()=>{
    
// },[props.tableData])
function AgChart(props){
    
    useEffect(() => {
        console.log(props.tableData)
        getData();
      }, [props.tableData]);

    function getData(){
        return props.tableData
    }
    const [chartOptions,setChartOptions] = react.useState({
        height: 500,
        title:{
            text:"Amount Spent on each Category"
        },
        legend:{
            position:"bottom"
        },
        data:getData(),
        series:[
            {
                type:"bar",
                xKey: "expenseCategory",
                yKey: "amountSpent",
                yName:"Amount Spent"
            }
        ]
    });
    return(
        <>
   
     <AgChartsReact options={chartOptions}/>

       
        </>
    )

}

export default AgChart