import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UseContext } from '../Context/Context';

const LogIn = () => {
    const [error,seterror] = useState('')
    const {signUser, signGoogle, } = useContext(UseContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const logInBtn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signUser(email,password)
        .then(result=>{
            const user = result.user;          
            seterror('')
            console.log(user);
            form.reset()
            navigate(from, {replace: true})
        })       
        .catch(err=>{
            seterror(err.message)
            console.log(err);
        })
    }

    const logInpGoogle =()=>{
        signGoogle()
        .then(result=>{
            const user = result.user           
            seterror('')
            navigate(from, {replace: true})
        })
        .catch(err=>{
            seterror(err.message)
        })
    } 



    return (
        <div className='lg:w-96 md:w-96 w-80 mx-auto py-8 signup'>
        <h3 className='text-2xl font-bold text-center py-2 text-gray-600 '>SIGN UP</h3>
        <form onSubmit={logInBtn} className=''>
     <div className="form-control w-full max-w-xs">
        <label className="label">
         <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs" /> 
    </div>
     <div className="form-control w-full max-w-xs">
        <label className="label">
         <span className="label-text">Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs" /> 
     </div>
    <p className='text-red-600 py-1'>{error}</p>
    <button className='btn lg:w-5/6 mt-4 w-80 text-white '>Log In</button>
    </form>
    <button onClick={logInpGoogle} className='btn btn-success lg:w-5/6 mt-4 w-80 text-white google'>Signup Google</button>
    <p className='py-3 mx-3 last-text error'>Are you new the site please <Link to='/signup' className='text-orange-500 font-bold'>Sign Up</Link></p>
        </div>
    );
};

export default LogIn;