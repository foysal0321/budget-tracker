import React from 'react';

const Saving = () => {

    const addSaving=(e)=>{

    }
    return (
        <div>
            <h2 className='text-center py-6 text-2xl'>Total Saving  $<span className='text-green-500 font-medium'>0</span></h2>
           <div className="list">
            <form onSubmit={addSaving} className='form'>
                <input type="text" name='names' placeholder='Expense Description' />
                <input type="text" name='price' placeholder='Price' />
                <input type="date" name='date'  />
                <button className='btn btn-sm mt-2 rounded-none btn-warning'>Add</button>
            </form>
       
            </div>
        </div>
    );
};

export default Saving;