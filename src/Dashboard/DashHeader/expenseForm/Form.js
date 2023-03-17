import React, { useContext, useRef, useState } from 'react';
import { UseContext } from '../../../Context/Context';
import './Form.css'
import ItemList from './ItemList';
//import {useForm} from 'react-hook-form'
import List from './List';


const Form = () => {
    const {user} = useContext(UseContext)
    const [itemList,setitem] = useState([])

    const desc = useRef()
    const price = useRef()
    const date = useRef()
    const type = useRef()
 
   const submitForm=(e)=>{
    e.preventDefault()

    const item ={
        names : desc.current.value,
        price : price.current.value,
        date : date.current.value,
        type : type.current.value,
        user: user?.email
    }
    setitem(item)
       // console.log(item);
   }
console.log(itemList);

    return (
        <div className='form-history mb-6'>
           <form onSubmit={submitForm} className='form-section'>
                <input className='w-80' type="text" ref={desc} placeholder='Expense Description' /> <br />
                <select className='w-80 p-2 m-2' ref={type} >
                    <option value="investment" defaultValue>Investment</option>
                    <option value="saving">Savings</option>
                    <option value="expense">Expense</option>
                </select> <br />
                <input className='w-80' type="number" ref={price} placeholder='Price' /> <br />
                <input className='w-80' type="date" ref={date}  /> <br />
                <button className='btn btn-sm mt-2 rounded-none btn-warning w-80 m-2'>Add</button>
            </form>
            <div className="history-section">
                <ItemList 
            item={itemList}
            setitem={setitem}
            />
            </div>
            
          
        </div>
    );
};

export default Form;