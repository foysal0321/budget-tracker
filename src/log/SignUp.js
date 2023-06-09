import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UseContext } from '../Context/Context';

const SignUp = () => {
    const [error,seterror] = useState('')
    const {createUser, updateUser,signGoogle, user} = useContext(UseContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    //create signup 
    const signup=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result=>{
            const user = result.user;  
            console.log(user);     
            const profile={
                displayName: name
            }
            seterror('')
            updateUser(profile)
            .then(()=>{               
                seterror('')
                navigate(from, {replace: true}) 
            })
            .catch(err=>{
                seterror(err.message)
                console.log(err);
            }) 
           form.reset()          
        })       
        .catch(err=> {
            seterror(err.message)
            console.error(err)
        })        
    }

    //signup google
    const signUpGoogle =()=>{
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
        <div>
             <div className='lg:w-96 md:w-96 w-80 mx-auto py-8 signup'>
        <h3 className='text-2xl font-bold text-center py-2 text-gray-600 '>SIGN UP</h3>
        <form onSubmit={signup}  className=''>
     <div className="form-control w-full max-w-xs">
        <label className="label">
         <span className="label-text">Name</span>
        </label>
        <input type="text" name='name' placeholder="name" className="input input-bordered w-full max-w-xs" /> 
    </div>
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
    <p className='text-red-600 py-1 error'>{error}</p>
    <button className='btn lg:w-5/6 mt-4 w-80 text-white '>Sign Up</button>
    </form>
    <button onClick={signUpGoogle} className='btn btn-success lg:w-5/6 mt-4 w-80 text-white google'>Signup Google</button>
    <p className='py-3 mx-3 last-text'>Already you visit please <Link to='/login' className='text-orange-500 font-bold'>Login</Link></p>
        </div>
        </div>
    );
};

export default SignUp;