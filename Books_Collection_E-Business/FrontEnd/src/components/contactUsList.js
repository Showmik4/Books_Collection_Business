import React,{useState,useEffect} from 'react';
import axios from '../hoc/auxx';
import  Classes from './components.css';

const EmployeeList=()=> {

   const [data,setData]=useState([]);




   useEffect(() => {
      loadData();

   }, []);


   const loadData=()=>{
      axios.get('/contactus')
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
      <h3>Contact Us List</h3>

      <table>
         <tr>
            <th>#ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Msg</th>
         </tr>
         {data.map(d=>{
            return(
               <tr>
                  <td><a>{d.ID}</a></td>
                  <td><a href={"mailto:"+d.Email} target='_blank'>{d.Email}</a></td>
                  <td>{d.Name}</td>
                  <td>{d.Msg}</td>
               </tr>
            )
         
         })}
      </table>
      
   </div>
);
}

export default EmployeeList;
