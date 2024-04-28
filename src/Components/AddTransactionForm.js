import React,{useState} from 'react';

function AddTransactionForm({onAddTransaction}){
    const [formData,setFormData]=useState({
        date:'',
        description:'',
        category:'',
        amount:0
    });
    function handleChange(evt){
        const name=evt.target.name;
        const value=evt.target.value;
        setFormData({
           ...formData,
            [name]:value
        });
    }
    function handleFormSubmit(evt){
        evt.preventDefault();
        const transactionData={
            date:formData.date,
            description:formData.description,
            category:formData.category,
            amount:formData.amount
        };
        const fetchPOSToptions={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(transactionData),
        };
        fetch('http://localhost:3001/transactions',fetchPOSToptions)
        .then((res)=>res.json())
        .then((newTransaction)=>onAddTransaction(newTransaction))
        .catch(error=> console.error("Error deleting transaction",error));

        setFormData({
            date:'',
            description:'',
            category:'',
            amount:0
        });
        function App(){
            const [transaction,setTransaction]=useState([]);

            const handleAddTransaction=(newTransaction) => {
                setTransaction([...transaction,newTransaction]);
            };
            return(
                <div>
                    <AddTransactionForm onAddTransaction={handleAddTransaction} />
                    <button onClick={()=>{}}>
                        Add Transaction
                    </button>
                    <div>
                        <h2>Transaction</h2>
                        <ul>
                            {transaction.map((transaction,index)=>(
                                <li key={index}>
                                    Date:{transaction.date},Description:{transaction.description},Category:{transaction.category},Amount:  {transaction.amount}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }
    return(
        <div className='ui segment'>
            <form className='ui form' onSubmit={handleFormSubmit}>
                <div className='inline fields'>
                    <label id='date' className='large-input'>
                        Date:
                        <input
                        type='date'
                        name='date'
                        aria-labelledby='date'
                        value={formData.date}
                        onChange={handleChange}
                        />
                    </label>
                    <input
                    type='text'
                    name='description'
                    value={formData.description}
                    placeholder='Description'
                    onChange={handleChange}
                    />
                    <input
                    type='text'
                    name='category'
                    value={formData.category}
                    placeholder='Category'
                    onChange={handleChange}
                    />
                    <input
                    type='number'
                    name='amount'
                    value={formData.amount}
                    placeholder='Amount'
                    onChange={handleChange}
                    />
                </div>
                <button className='ui button green-button' type='submit'>
                    Add Transaction
                </button>
                 </form>
        </div>
    );
}
export default AddTransactionForm;