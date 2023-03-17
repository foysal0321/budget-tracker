import React from 'react';

const ItemList = ({item, setitem}) => {

    
    return (
        <div>
             <h2 className='text-center text-xl font-semibold pb-2'>History</h2>
            <div className="itemList">
            <div className="overflow-x-auto">
     <table className="table w-full">
       <tbody>
      <tr>
        <td>Web Design</td>
        <td>Saving</td>
        <td>$ 500</td>
        <td>15-3-2023</td>
        <td>
            <button className='btn btn-xs'>x</button>
        </td>
      </tr>
      <tr>
        <td>Cemera</td>
        <td>Expense</td>
        <td>$ 300</td>
        <td>16-3-2023</td>
        <td>
            <button className='btn btn-xs'>x</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ItemList;