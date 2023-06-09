import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from '../../Context/Context';
import './Navbar.css'

const Navbar = () => {
  const {user, logOut} = useContext(UseContext);

    const userlogOut=()=>{
        logOut()
        .then(result=>{ })
        .catch(err=>{
            //console.error(err);
        })
      }

    const items = 
        <>
        <Link to='/'>Home</Link>
        {
          user?.email ? 
           <button onClick={userlogOut} className='btn btn-xs'>Log Out</button>
           : 
           <>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
           </>
        } 
        </>
    
    return (
        <div>
            <div className="navbar bg-zinc-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {items}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">BUDGET~TRACKER</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {items}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar">
  <div className="w-6 h-6 rounded-full mx-6">
    <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;