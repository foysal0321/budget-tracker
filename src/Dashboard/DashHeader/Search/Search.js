import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../../../redux/actions/Actions';
import Myexpense from '../../myExpense/Myexpense';
import ChartCom from '../chart/ChartCom';
import Form from '../expenseForm/Form';
import List from '../expenseForm/List';
import './Search.css'

const Search = () => {
    const state = useSelector(state=> state.expenseReducer.expense )
    console.log(state);

    const dispath = useDispatch()
     const [total, settotal] = useState(0)

    return (
        <div>
       
            <ChartCom total={total} />     
        </div>
    );
};

export default Search;