import React from "react";

function TransactionItems({ transaction,onDeleteTransaction}){
    let {date,description,category,amount}=transaction;
    function handleTransactionDelete(){
        fetch('db.json',{
            method:'DELETE'
        })
        .then((res)=>res.json())
        .then(()=>onDeleteTransaction(transaction))
        .catch(error=>console.error("Error deleting transaction:",error));
    }
    return(
        <tbody>
            <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
                <td>
                    <button style={{color:"red"}} onClick={handleTransactionDelete}>
                        DELETE
                    </button>
                </td>
            </tr>
        </tbody>
    );
}
export default TransactionItems;