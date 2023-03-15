import React from 'react';
import ItemList from './ItemList';

const List = ({income, setincome}) => {
    const remove=(e)=>{
        let temp = income.filter((v,index)=> index != e)
        setincome(temp)
    }
//console.log(income);
    const sortBydate = (a,b)=>{
        return (a.date - b.date)
    }
    return (
        <div>
            {
                income.sort(sortBydate).map((value,index)=>(
                    <ItemList 
                    income={value}
                    index={index}
                    remove={remove}
                    key={index}
                    />
                ))
            }
        </div>
    );
};

export default List;

