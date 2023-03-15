import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../../redux/actions/Actions';
import { ADD_EXPENSE } from '../../redux/actionType/actionType';
import ExpenseList from './ExpenseList';
import './Style.css'

const Myexpense = () => {
    const [expense,setexpense] = useState([]);
    const data = useSelector(state=> state.expenseReducer.expense)  
    const dispath = useDispatch()

    useEffect(()=>{
        fetch(`https://tracker-server-lake.vercel.app/expenses`)
        .then(res=>res.json())
        .then(d=> setexpense(d))
    },[])

    const addExpense=(e)=>{
       
       // console.log(item);
    }


    // const addExpense =(e)=>{
    //     e.preventDefault()
    //     const form = e.target;
    //     const names = form.names.value;
    //     const price = form.price.value
    //     const date = form.date.value;
    //     const item={
    //         names:names,
    //         price:price,
    //         date:date
    //     }


    //     // fetch(`https://tracker-server-lake.vercel.app/expenses`,{
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'content-type': 'application/json'               
    //     //     },
    //     //     body: JSON.stringify(item)
    //     // })
    //     // .then(res=>res.json())
    //     // .then(data=>{         
    //     //     if(data.acknowledged){
    //     //         alert('success')
    //     //         form.reset()                
    //     //     }
    //     //     else{
    //     //         console.log(data.message);
    //     //     }          
    //     // })
    
    // }
      
    return (
        <div className='my-expense'>
                      <h2 className='text-center py-6 text-2xl'>Total Expenses  $<span className='text-green-500 font-medium'>{0}</span></h2>
           <div className="list">
            <form  className='form'>
                <input type="text" name='names' placeholder='Expense Description' />
                <input type="text" name='price' placeholder='Price' />
                <input type="date" name='date'  />
                <button className='btn btn-sm mt-2 rounded-none btn-warning'>Add</button>
            </form>
            <div className="overflow-x-auto mt-6">
      <table className="table w-full ">
       
         <tbody className=''>
            
         </tbody>
      </table>
    </div>
         
           
            </div>
            
           
        </div>
    );
};

export default Myexpense;