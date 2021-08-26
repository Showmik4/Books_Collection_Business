import React,{useState,useEffect} from 'react';
import axios from '../hoc/auxx';
import  Classes from './components.css';

const AccessDenied=()=> {



return (
   <div className={Classes.App}>

      <h1 style={{color:'red'}}>Access Denied!</h1>
      
   </div>
);
}

export default AccessDenied;
