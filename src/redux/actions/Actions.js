import { ADD_EXPENSE, DELETE_EXPENSE } from "../actionType/actionType"

export const addExpense = (data)=>{
    //console.log(data);
    return{
        type: ADD_EXPENSE,
        payload: data
    }
}

export const deleteExpense = (data)=>{
    return{
        type: DELETE_EXPENSE,
        data
    }
}