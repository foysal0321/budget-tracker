import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Header/Navbar';
import { UseContext } from '../Context/Context';
import './Dashbord.css'

const DashMain = () => {
    const {user, logOut} = useContext(UseContext)

    const userlogOut=()=>{
        logOut()
        .then(result=>{ })
        .catch(err=>{
            console.error(err);
        })
      }

    return (      
        <div className="">        
        <Navbar />        
    <div className="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col ">
    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">Open drawer</label> 
    <Outlet />
    </div>  
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-3 w-60 bg-slate-100 text-base-content text-center">
    <div className="card  bg-base-100">
          <div className="card-body text-center bg-slate-100 rounded-xl">
          <div className="avatar mx-12">
            <div className="w-8 h-8 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
            </div>
            </div>
            <h2 className="text-xl">{user?.displayName}</h2>
            <p>{user?.email}</p>
            <div className="card-actions ">
             
            </div>
          </div> <hr />
        </div> 
        {
            user?.email ?
            <>
            <Link to='/dashbord'>Dashboard</Link>        
            <Link to='/dashbord/income'>Incomes</Link>   
            <Link to='/dashbord/myexpense'>Expenses</Link>
            <Link to='/dashbord/saving'>Saving</Link>
            <Link to='/dashbord/invensment'>Invensment</Link>
            <button onClick={userlogOut} className='btn btn-xs lg:mt-20 sm:mt-0'>log out</button>
            </>
            :
            <Link to='/login'>Log In</Link>
        }
    
    </ul>
    </div>
    </div>
  </div>
    );
};

export default DashMain;