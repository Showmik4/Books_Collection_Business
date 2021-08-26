import React,{useState,useEffect} from 'react';
import {Route,useHistory,withRouter,Redirect, useParams} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';

const ShopInfo=()=> {

   const [d,setData]=useState([]);
   const [validData,setValidData]=useState([]);
   const [search,setSearch]=useState('');
   const [msg,setMsg]=useState('');
   const history = useHistory();
   const {shopID} = useParams();

   useEffect(() => {
      loadData();

   }, []);


   const loadData=()=>{
      axios.get('/shop/details/'+shopID)
         .then(r=>{
            console.log(r.data);
            setData(r.data.shopInfo);
            setValidData(r.data.shopInfoLicence[0]);
            setMsg(r.data.msg);
         })
         .catch(e=>{
            console.log(e);
         })
   }

   const chngeVerifyStatus=(status)=>{
      axios.post('/shop/details/'+shopID+'/'+status)
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
      <h2>Shop Info</h2>


      <table>
         <tr>
            <th>#ID</th>
            <th>Shop Name</th>
            <th>Address</th>
            <th>Licence</th>
            <th>Phone</th>
            <th>Verified Status</th>
         </tr>

         <tr key={d.Shop_id}>
            <td>{d.Shop_id}</td>
            <td>{d.Shop_Name}</td>
            <td>{d.Shop_Address}</td>
            <td style={{color:'blue',fontWeight:'bold'}}>{d.Shop_Licence}</td>
            <td>{d.Phone_No}</td>
            <td>{d.Verified_Status}</td>
         </tr>
         
      </table>
      <br/>
      
      
      

      {validData!=null?
         <div>
               {d.Verified_Status=='true'? <button className={Classes.buttonRed} onClick={()=>chngeVerifyStatus(true)}>Not Valid</button>
                  : <button className={Classes.buttonGreen} onClick={()=>chngeVerifyStatus(false)}>VALID</button>}
         </div>          
      :null}
      <hr/>
      <br/>
         <h2>Data From Govt.Licence</h2>
      <br/>
     

      {validData==null?<h3 style={{color:'red'}}>{msg}</h3>
      :
         <table>
            <tr>
               <th>Shop_Name</th>
               <th>Shop_Licence</th>
               <th>Shop_Address</th>
               <th>Shopper_Name</th>
               <th>Phone</th>
            </tr>
            <tr>
               <td>{validData.Shop_Name}</td>
               <td>{validData.Shop_Licence}</td>
               <td>{validData.Shop_Address}</td>
               <td>{validData.Shopper_Name}</td>
               <td>{validData.Phone}</td>
            </tr>
         </table>}


    </div>
  );
}

export default ShopInfo;
