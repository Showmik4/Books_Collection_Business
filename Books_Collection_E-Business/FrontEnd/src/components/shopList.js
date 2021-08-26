import React,{useState,useEffect} from 'react';
import {Route,useHistory,withRouter,Redirect} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';

const ShopList=()=> {

   const [data,setData]=useState([]);
   const [search,setSearch]=useState('');
   const [msg,setMsg]=useState('');
   const history = useHistory();
   useEffect(() => {
      loadData();

   }, []);


   const loadData=()=>{
      axios.get('/shop/list')
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
      <h3>Shop List</h3>


      <table>
         <tr>
            <th>#ID</th>
            <th>Shop Name</th>
            <th>Status</th>
            <th>Action</th>
         </tr>
         {data.map(d=>{
            return(
               <tr key={d.Shop_id}>
                  <td>{d.Shop_id}</td>
                  <td>{d.Shop_Name}</td>
                  <td>{d.Verified_Status}</td>
                  <td><div className={Classes.actionColmun}  onClick={()=>history.push('/ShopInfo/'+d.Shop_id)}>Details</div></td>
               </tr>
            )
         
         })}
      </table>
   
    </div>
  );
}

export default ShopList;
