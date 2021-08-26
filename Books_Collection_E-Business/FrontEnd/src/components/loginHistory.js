import React,{useState,useEffect} from 'react';
import {Route,useHistory,withRouter,Redirect} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';

const LoginHistory=()=> {

   const [data,setData]=useState([]);
   const [search,setSearch]=useState('');
   const [msg,setMsg]=useState('');
   const history = useHistory();
   useEffect(() => {
      loadData();

   }, []);


   const loadData=()=>{
      axios.get('/login_history/'+localStorage.getItem('ID'))
         .then(r=>{
          //  console.log(r.data);
            setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }

   const removeData=(id)=>{
      axios.delete('/login_history/'+id)
         .then(r=>{
            console.log(r.data);
            loadData();
         })
         .catch(e=>{
            console.log(e);
         })
   }


  return (
    <div className={Classes.App}>
      <h3>Login History</h3>


      <table>
         <tr>
            <th>IP</th>
            <th>Location</th>
            <th>Time</th>
            <th>Action</th>
         </tr>
         {data.map(d=>{

            return(
               <tr>
                  <td>{d.IP}</td>
                  <td>{d.Location}</td>
                  <td>{d.Time}</td>
                  <td><button onClick={()=>{removeData(d.ID)}}>It's Me!</button></td>
               </tr>
            )
         
         })}
      </table>
     
      
    </div>
  );
}

export default LoginHistory;
