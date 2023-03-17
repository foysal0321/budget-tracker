import React, { useContext } from 'react';
import { UseContext } from '../Context/Context';

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(UseContext)

    if(loading){
        return <p className='text-center py-6'>Loading..</p>
    }
    if(user){
        return children
    }
};

export default PrivetRout;