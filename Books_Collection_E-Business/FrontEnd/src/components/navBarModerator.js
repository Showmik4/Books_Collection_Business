import React,{useState} from 'react';
import {Route,Switch,withRouter,Link} from 'react-router-dom';
import Classes from './components.css';



const NavBar=()=> {

  const LogOut=()=>{
    localStorage.removeItem('Email');
    localStorage.removeItem('Rank');
    localStorage.removeItem('ID');
    localStorage.removeItem('AccountvaVlidity');

    window.location.reload();
  }
  return (
    <div className={Classes.NavBar}>
      <div>
        <Link className={Classes.Link} to={{pathname: '/EchoStatics'}}>Economic</Link>
        <Link className={Classes.Link} to={{pathname: '/SubscriptionUserList'}}>Subscription UserList</Link>
        <Link className={Classes.Link} to={{pathname: '/ReportList'}}>Reports List</Link>
        <Link className={Classes.Link} to={{pathname: '/PieChart'}}>Pie Chart</Link>
        <Link className={Classes.Link} to={{pathname: '/ShopList'}}>Shop List</Link>
        <Link className={Classes.Link} to={{pathname: '/BookList'}}>Books List</Link>
        <Link className={Classes.Link} to={{pathname: '/ContactUsList'}}>ContactUs List</Link>
        <Link className={Classes.Link} to={{pathname: '/ChattingPage'}}>Chatting</Link>
        <Link className={Classes.Link} to={{pathname: '/LoginHistory'}}>Login History</Link>


        <Link className={Classes.Link} style={{color:'red'}} onClick={()=>LogOut()}>LogOut</Link>
      </div>

      
    </div>
  );
}

export default NavBar;
