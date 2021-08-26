import React,{useState,useEffect,} from 'react';
import {Route,useHistory,withRouter,Redirect} from 'react-router-dom';

import Classes from './components.css';

import axios  from '../hoc/auxx';

const EmployeeAdd=()=> {

   const [errMsg,setErrMsg]=useState('');

   const history= useHistory();

   const submitHandler=(event)=>{
         axios.post('/contactus',{
            Email:event.target.elements.email.value,
            Msg:event.target.elements.msg.value,
            Name:event.target.elements.name.value,
         })
            .then(r=>{
               console.log(r.data);
               setErrMsg('Your message Send to us!')
            })

      event.preventDefault();
   }

return (
   <div className={Classes.App}>

      <h2>Contact Us</h2>
      <form onSubmit={e=>submitHandler(e)}>
         <div style={{color:'green'}}>{errMsg}</div>
         <br/>
         <table>
            <tr>
               <td>Name</td>
               <td><input type='name' name='name' required/></td>
            </tr>
            <tr>
               <td>Email</td>
               <td><input type='email' name='email' required/></td>
            </tr>
            <tr>
               <td>Rank</td>
               <td>
                  <textarea name='msg' required>

                  </textarea>
               </td>
            </tr>
         </table>
         <input type='submit' value="Submit"/>
      </form>
      

   </div>
   );
}

export default EmployeeAdd;
