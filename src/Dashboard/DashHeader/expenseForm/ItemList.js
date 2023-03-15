import React from 'react';

const ItemList = ({income, index, remove}) => {
    //console.log(income.price);

    let date = new Date(income.date)
    let day = date.getDate()
    let month = date.getMonth() + 1;
    let year = date.getFullYear()

    const removeHandle = (i)=>{
        remove(i)
    }
    return (
        <div>
            <div className="item">
                <button onClick={removeHandle(index)}>x</button>
                <div className="">price{income.desc}</div>
                <div className="">{income.price}</div>
                <div className="">{day + "/" + month + "/" + year}</div>
            </div>
        </div>
    );
};

export default ItemList;