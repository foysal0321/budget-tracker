import React, { useContext, useEffect, useState } from 'react';
import { UseContext } from '../../Context/Context';
import './Income.css'
import IncomesList from './IncomesList';

const Incomes = () => {
    const {user} = useContext(UseContext)
    const [income, setincome] = useState([])
    const [balance, setbalance] = useState(0)
  
    //fetch-data
    useEffect(()=>{
        fetch(`https://tracker-server-lake.vercel.app/incomes?email=${user?.email}`)
        .then(res=>res.json())
        .then(d=> setincome(d))   
    },[])

    //add-sum
    useEffect(()=>{
        let val = income.map(v=> v.price)
        setbalance(val)
        let temp =0;
        for(let i = 0; i < val.length; i++){  
        temp += parseInt(val[i])
        }
     setbalance(temp)         
    },[income])
  
  
      const addIncome =(e)=>{
          e.preventDefault()
          const form = e.target;
          const names = form.names.value;
          const price = form.price.value
          const date = form.date.value;
          const item={
              names:names,
              price:price,
              date:date,
              email: user?.email
          }
          fetch(`https://tracker-server-lake.vercel.app/incomes`,{
              method: 'POST',
              headers: {
                  'content-type': 'application/json'               
              },
              body: JSON.stringify(item)
          })
          .then(res=>res.json())
          .then(data=>{         
              if(data.acknowledged){
                  alert('success')                 
                  form.reset()                
              }
              else{
                  console.log(data.message);
              }          
          })     
      }

      //delete
      const deleteItem=(id)=>{
        const confirmDelete = window.confirm(`Are you sure ${id.names}`)  
        if(confirmDelete){
          fetch(`https://tracker-server-lake.vercel.app/incomes/${id._id}`,{
              method: 'DELETE',           
          })
          .then(res=>res.json())
          .then(d=>{
              if(d.deletedCount > 0){         
                  const remain = income.filter(v=> v._id !== id._id)
                  setincome(remain)             
              }          
          })
        }              
      }
    return (
        <div>
            <h2 className='text-center py-6 text-2xl'>Total Income  $<span className='text-green-500 font-medium'>{balance}</span></h2>
           <div className="list">
            <form onSubmit={addIncome} className='form'>
                <input type="text" name='names' placeholder='Incomes Description' required />
                <input type="text" name='price' placeholder='Price' required />
                <input type="date" name='date' required />
                <button className='btn btn-sm mt-2 rounded-none btn-warning'>Add</button>
            </form>
            <div className="overflow-x-auto mt-6">
      <table className="table w-full ">
       
         <tbody className=''>
            {
            income.map(item=>  <IncomesList 
            data={item}
            key={item._id}
            deleteItem={deleteItem}
            
            />)
         }
         </tbody>
      </table>
    </div>
         
           
            </div>
        </div>
    );
};

export default Incomes;