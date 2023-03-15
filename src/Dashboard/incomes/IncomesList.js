import React, { useEffect, useState } from 'react';

const IncomesList = ({data, deleteItem}) => {
      
  //delete list    
  const deleteItemBtn=(id)=>{
   deleteItem(id)            
  }

    return (
      <tr className='mx-12 text-center pt-8'>
        <td>{data.names}</td>
        <td>$ {data.price}</td>
        <td>{data.date}</td>
        <td>
          <button className='btn btn-xs' onClick={()=> deleteItemBtn(data)}>x</button>
        </td>
      </tr>
    );
};

export default IncomesList;