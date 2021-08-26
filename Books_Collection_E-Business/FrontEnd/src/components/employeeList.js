import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';

const EmployeeList=()=> {

   const [data,setData]=useState([]);
   const [search,setSearch]=useState('');
   const [msg,setMsg]=useState('');

   useEffect(() => {
      loadData();

   }, []);


   const loadData=()=>{
      axios.get('/emplpyee/list')
         .then(r=>{
           
            setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }

   const acountAction=(action,id)=>{
      if (window.confirm('Are You Sure?')) {

       
         if(action=='' || action==null || action==0){
            action='false';
         }

         axios.get('/chnageEmployeeAccess/'+action+'/'+id)
            .then(r=>{
            
               setData(r.data);
            })
      }
   }

   const searchResult=()=>{
      axios.post('/emplpyee/list',{ID:search})
         .then(r=>{
            console.log(r.data, "dd");

            if(r.data!='notFound'){
               setData(r.data);
               setMsg('');
            }
            else{
               setMsg('Not Found!');
            }
         })
         .catch(e=>{
            console.log(e);
         })
   }

  return (
    <div className={Classes.App}>
      <h3>Employee List</h3>
      <div>
         <input placeholder="UserID/Email" onChange={e=>setSearch(e.target.value)}/>
         
         <button onClick={()=>searchResult()}>SEARCH</button>
         <br/>
         <h5 style={{color:"red"}}>{msg}</h5>
         <br/>
      </div>

      <table>
         <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>ProPic</th>
            <th>Rank</th>
            <th>BanStatus</th>
            <th>Action</th>
            <th>Disable/Enable</th>
         </tr>
         {data.map(d=>{
           
            return(
               d.ID!=localStorage.getItem('ID')?
               <tr key={d.ID}>
                  <td>{d.ID}</td>
                  <td>{d.Name}</td>
                  <td>{d.Email}</td>
                  <td><img src={require("../../content/proPic/"+d.ProPic).default} width='100px' height='100px'/></td>
                  <td>{d.Rank}</td>
                  <td>{d.BanStatus}</td>
                  <td style={{color:'blue',cursor:'pointer'}}>
                     <div onClick={()=>acountAction(d.Rank,d.ID)}>{d.Rank=='Admin'?'Demotion':'Promotion'}</div>
                  </td>
                  <td style={{color:'red',cursor:'pointer'}}>
                     <div onClick={()=>acountAction(d.BanStatus,d.ID)}>{d.BanStatus=='true'?'Enable':'Disable'}</div>
                  </td>
               </tr>
               :null
            )
           
         })}
      </table>
     
      
    </div>
  );
}

export default EmployeeList;
