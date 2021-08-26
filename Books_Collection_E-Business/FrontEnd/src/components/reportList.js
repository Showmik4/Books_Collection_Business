import React,{useState,useEffect} from 'react';
import {Route,useHistory,withRouter,Redirect} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';

const ReportList=()=> {

   const [data,setData]=useState([]);
   const [search,setSearch]=useState('');
   const [msg,setMsg]=useState('');
   const history = useHistory();
   useEffect(() => {
      loadData();

   }, []);


   const loadData=()=>{
      axios.get('/reportList')
         .then(r=>{
            console.log(r.data);
            setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }


  return (
    <div className={Classes.App}>
      <h3>Reports List</h3>


      <table>
         <tr>
            <th>Reporter</th>
            <th>Got Reported</th>
            <th>Text</th>
            <th>Action</th>
         </tr>
         {data.map(d=>{

            return(
               <tr>
                  <td>{d.reporter}</td>
                  <td>{d.gotReported}</td>
                  <td>{d.text}</td>
                  <td><div className={Classes.actionColmun}  onClick={()=>history.push('/UserInfo/'+d.gotReported)}>Details</div></td>
               </tr>
            )
         
         })}
      </table>
     
      
    </div>
  );
}

export default ReportList;
