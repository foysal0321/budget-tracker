import React, { useRef } from 'react';
import './Form.css'
//import {useForm} from 'react-hook-form'
import List from './List';

  //const {register, handleSubmit, resetField} = useForm()
const Form = () => {
    const desc = useRef()
    const price = useRef()
    const date = useRef()
    const type = useRef()
 

   const submitForm=(e)=>{
    e.preventDefault()

    const item ={
        namesa : desc.current.value,
        price : price.current.value,
        date : date.current.value,
        type : date.current.value
    }
console.log(item);
   }


    return (
        <div>
           <form onSubmit={submitForm}  className='form'>
                <input type="text" ref={desc} placeholder='Expense Description' />
                <select ref={type} >
                    <option value="investment" defaultValue>Investment</option>
                    <option value="saving">Savings</option>
                    <option value="expense">Expense</option>
                </select>
                <input type="text" ref={price} placeholder='Price' />
                <input type="date" ref={date}  />
                <button className='btn btn-sm mt-2 rounded-none btn-warning'>Add</button>
            </form>
          
        </div>
    );
};

export default Form;