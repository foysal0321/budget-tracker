import { addExpense } from "../actions/Actions"
import { ADD_EXPENSE } from "../actionType/actionType"

const initialState ={
    expense : []

}
const expenseReducer=(state = initialState, action)=>{
    switch(action.type){
        case ADD_EXPENSE :
            return{
                ...state,
                expense: [...state.expense, action.payload]
                
            }
            
        default:
            return state
    }
}

export default expenseReducer