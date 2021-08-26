import React,{useState,useEffect} from 'react';
import {useHistory,Redirect,useParams} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';



const UserInfo=()=> {

   const [userData,setUserData]=useState('');
   const [userReports,setUserReports]=useState([]);

   const [search,setSearch]=useState('');
   const [msg,setMsg]=useState('');
   const {id}= useParams();

   useEffect(() => {
      loadData();

   }, []);


   const loadData=()=>{
      axios.get('/reportList/'+id)
         .then(r=>{
            console.log(r.data.userInfo[0]);
            setUserData(r.data.userInfo[0]);
            setUserReports(r.data.userReports);

         })
         .catch(e=>{
            console.log(e);
         })
   }

   const banUnban=(value)=>{
      axios.get('/banAccount/'+value+'/'+id)
         .then(r=>{
            console.log(r.data);

            setUserData(r.data.userInfo[0]);
            setUserReports(r.data.userReports);

            setMsg('Action Success');
         })
         .catch(e=>{
            console.log(e);
         })
   }



  return (
    <div >


      <h3>User Information</h3>
      <table>
         <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>DOB</th>
            <th>BanStatus</th>
         </tr>
         <tr>
            <td>{userData.ID}</td>
            <td>{userData.Name}</td>
            <td>{userData.Email}</td>
            <td>{userData.Address}</td>
            <td>{userData.DOB}</td>
            <td>{userData.BanStatus}</td>
         </tr>
      </table>

      <br/>
      <div>
         {userData.BanStatus?<button onClick={()=>banUnban(userData.BanStatus)} className={Classes.buttonGreen}>UNBAN</button>
            :<button onClick={()=>banUnban(userData.BanStatus)} className={Classes.buttonRed}>BAN</button>}
      
      <div style={{color:'blue'}}>{msg}</div>
      </div>


      <br/> 
         <h3>All Reports</h3>
      <br/>
      <table>
         <tr>
            <th>Reporter</th>
            <th>Got Reported</th>
            <th>Text</th>
         </tr>
         {userReports.map(d=>{
            return(
               <tr key={d.ID}>
                  <td>{d.reporter}</td>
                  <td>{d.gotReported}</td>
                  <td>{d.text}</td>
               </tr>
            )
         
         })}
      </table>
     
      
    </div>
  );
}

export default UserInfo;
