import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';

const SubscriptionUserList=()=> {

   const [data,setData]=useState([]);
   const [search,setSearch]=useState('');
   const [msg,setMsg]=useState('');
   const history = useHistory();

   useEffect(() => {
      loadData('all');

   }, []);


   const loadData=(value)=>{
      axios.get('/user/subscription/list/'+value)
         .then(r=>{
            console.log(r.data)
            setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }

   const checkDetails=(value)=>{
      
   }

  return (
    <div className={Classes.App}>
      <h2>Subscription Users List</h2>
      <br/>
      <div>
         <button onClick={()=>loadData('all')}>ALL</button>
         <button onClick={()=>loadData('premium')}>PREMIUM</button>
         <button onClick={()=>loadData('standard')} style={{width:'120px'}}>STANDARD</button>
      </div>
      <table>
         <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>DOB</th>
            <th>BanStatus</th>
            <th>Account Type</th>
            <th>Action</th>
         </tr>
         {data.map(d=>{

            return(
               <tr>
                  <td>{d.ID}</td>
                  <td>{d.Name}</td>
                  <td>{d.Address}</td>
                  <td>{d.DOB}</td>
                  <td>{d.BanStatus}</td>
                  <td>
                     {d.Premium=='true'?'Premium':'Standard'}
                  </td>
                  <td><div className={Classes.actionColmun} onClick={()=>history.push('/UserInfo/'+d.ID)}>Details</div></td>
               </tr>
            )
         
         })}
      </table>
     
      
    </div>
  );
}

export default SubscriptionUserList;
