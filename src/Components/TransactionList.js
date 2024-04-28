import React,{useState,useEffect} from "react";
import TransactionItems from "./TransactionItems";
import SearchTransaction from "./SearchTransaction";
import AddTransactionForm from "./AddTransactionForm";

function TransactionList(){
    const [transaction,setTransactions] = useState([]);
    const [searchParams,setSearchParams]=useState('');

    useEffect(()=>{
        fetch('db.json')
        .then(res=>{
            if(!res.ok){
                throw new Error('Failed to fetch transactions');
            }
            return res.json();
        })
        .then(transactions=>{
            if(!Array.isArray(transactions)){
                throw new Error('Transaction is not an array');
            }
            setTransactions(transactions);
        })
        .catch(error=>console.error("Error fetching transactions:",error));
    })
    function handleAddTransaction(newTransaction){
        setTransactions([...transaction,newTransaction]);
    }
    const transactionList= transaction.filter((transaction)=>{
         return transaction.description.toLowerCase().includes(searchParams.toLowerCase());
    });
    function handleTransactionDelete(deletedTransaction){
        const updatedTransaction = transaction.filter(
            (transaction)=>transaction.id!==deletedTransaction.id
        );
        setTransactions(updatedTransaction);
    }
    return (
        <div>
            <SearchTransaction
            searchParams={searchParams}
            onTransactionSearch={setSearchParams}
            />
            <AddTransactionForm onAddTransaction={handleAddTransaction}/>
        </div>
    );
}
export default TransactionList;