import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';


const EmployeeSalaryList=()=> {

   const [data,setData]=useState([]);
   const [paymentPart,setPaymentPart]=useState(false);
   const [paymentPartData,setPaymentPartData]=useState('');

   const [amount,setAmount]=useState('');
   const [monthName,setMonthName]=useState('January');
   const [year,setYear]=useState('2021');
   const [action,setAction]=useState('ADD');

   useEffect(() => {
      loadData();

   }, []);




   const loadData=()=>{
      axios.get('/emplpyee/salaryList')
         .then(r=>{
            //console.log(r.data)
            setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }

   const updateSalary=(id)=>{
      axios.post('/employee/giveSalary/'+id,{
         userName:paymentPartData.userName,
         userID:paymentPartData.userId,
         year:year,
         month:monthName,
         salaryAmount:amount,
         action:action
      })
      .then(r=>{
            console.log(r.data)
            loadData();
            //setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }

   const loadPaymentPart=(id)=>{
      axios.get('/employee/giveSalary/'+id)
         .then(r=>{
            console.log(r.data)
            setPaymentPartData(r.data[0]);
            setAmount(r.data[0].Amount);
            setPaymentPartData(r.data[0]);
            setPaymentPart(true);

         })
         .catch(e=>{
            console.log(e);
         })
   }


   let giveSalaryPart='';

   if(paymentPart){
      giveSalaryPart=(
         <div style={{backgroundColor:'#FFFFCC'}}>
            <h3>Payment</h3>
            <table>
               <tr>
                  <th >UserID</th>
                  <th>Name</th>
                  <th>salaryAmont</th>
                  <th>MonthName</th>
                  <th>Year</th>
                  <th>Action</th>
                  <th style={{backgroundColor:'#f2f2f2'}}><button onClick={()=>setPaymentPart(false)}>CLOSE</button></th>
               </tr>

               <tr>
                  <td>{paymentPartData.userId}</td>
                  <td>{paymentPartData.userName}</td>
                  <td><input value={amount} onChange={e=>setAmount(e.target.value)}/></td>
                  <td>
                     <select  onChange={e=>setMonthName(e.target.value)}>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                     </select>
                  </td>
                  <td>
                     <select  onChange={e=>setYear(e.target.value)}>
                        <option>2021</option>
                        <option>2022</option>
                     </select>
                  </td>
                  <td>
                     <select  onChange={e=>setAction(e.target.value)}>
                        <option>ADD</option>
                        <option>REMOVE</option>
                     </select>
                  </td>
                  <td>
                     <button onClick={()=>updateSalary(paymentPartData.ID)}>SAVE</button>
                  </td>
               </tr>
            </table>
            <hr/>
         </div>
      )
   }

   else{
      giveSalaryPart='';
   }


return (
   <div className={Classes.App}>

      <h2>Employee Salary Page</h2>
      {giveSalaryPart}
      <br/>
      <h3>Salary List</h3>
      <table>
         <tr>
            <th>UserID</th>
            <th>Name</th>
            <th>January</th>
            <th>February</th>
            <th>March</th>
            <th>April</th>
            <th>May</th>
            <th>June</th>
            <th>July</th>
            <th>August</th>
            <th>September</th>
            <th>October</th>
            <th>Amount</th>
            <th>Year</th>
            <th>Action</th>
         </tr>
         {data.map(r=>{
            return(
               <tr key={r.ID}>
                  <td>{r.userId}</td>
                  <td>{r.userName}</td>
                  <td>{r.January}</td>
                  <td>{r.February}</td>
                  <td>{r.March}</td>
                  <td>{r.April}</td>
                  <td>{r.May}</td>
                  <td>{r.June}</td>
                  <td>{r.July}</td>
                  <td>{r.August}</td>
                  <td>{r.September}</td>
                  <td>{r.October}</td>
                  <td>{r.Amount}</td>
                  <td>{r.Year}</td>
                  <td className={Classes.actionColmun} ><div onClick={()=>loadPaymentPart(r.ID)}>click</div></td>
               </tr>
            )
         })}
      </table>
    </div>
  );
}

export default EmployeeSalaryList;
