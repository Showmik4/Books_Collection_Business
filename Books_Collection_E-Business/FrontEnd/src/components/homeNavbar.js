import React,{useState} from 'react';
import {Route,Switch,withRouter,Link} from 'react-router-dom';
import Classes from './components.css';



const NavBarHome=()=> {
  return (
    <div className={Classes.NavBar}>
       <div>
         <Link className={Classes.Link} to={{pathname: '/Login'}}>Login</Link>
         <Link className={Classes.Link} to={{pathname: '/BookList'}}>Books List</Link>
         <Link className={Classes.Link} to={{pathname: '/ContactUs'}}>Contact Us</Link>
       </div>
    </div>
  );
}

export default NavBarHome;
