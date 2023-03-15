import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Myexpense from '../../myExpense/Myexpense';
import ChartCom from '../chart/ChartCom';
import Form from '../expenseForm/Form';
import List from '../expenseForm/List';
import './Search.css'

const Search = () => {
    const [income, setincome] = useState([])
    const [total, settotal] = useState(0)
    
    useEffect(()=>{
        let temp =0;
        for(let i = 0; i < income.length; i++){
            temp+= parseInt(income[i].price)
        }
        settotal(temp)
    },[income])

// console.log(total);
    return (
        <div>
          
            <ChartCom total={total} />
            {/* <Form income={income} setincome={setincome} /> */}
              {/* { (income.length > 0) ? income[0].desc : ''} */}
             
            {/* <List income={income} setincome={setincome} /> */}
          
            {/* <div className="total">
                <div className="total1">
                   <h2> Total Income</h2>
                   <span>$ {1000}</span>
                </div>
                <div className="total1 two">
                   <h2> Total Expenses</h2>
                   <span>$ {600}</span>
                </div>
                <div className="total1 three">
                   <h2> Total Balance</h2>
                   <span>$ {400}</span>
                </div>
            </div> */}
           
            
        </div>
    );
};

export default Search;