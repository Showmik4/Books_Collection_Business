import React,{useState,useEffect} from 'react';
import {Route,useHistory,withRouter,Redirect} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './chatting.css';
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';

const BookList=()=> {

   const [data,setData]=useState([]);
   const [search,setSearch]=useState('');
   const [Password,setPass]=useState('');
   const [msg,setMsg]=useState('');
   const history = useHistory();

   useEffect(() => {
      loadData();
   }, []);


   const loadData=()=>{
      axios.get('/chatting')
         .then(r=>{
            //console.log(r.data)
            setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }

   useEffect(() => {
      if(localStorage.getItem('ID')!=''){
         const interval = setInterval(() => {
            loadData();
         }, 500);
         return () => clearInterval(interval);
      }
     
    }, []);

   const sendMsg=()=>{
      axios.post('/chatting',{
         UserID:localStorage.getItem('ID'),
         Msg:msg,
      })
      .then(r=>{
            console.log(r.data)
           // setData(r.data);
            loadData();
         })
         .catch(e=>{
            console.log(e);
         })
   }


return (
      <div className={Classes.App}>
         <h2>Chatting Page</h2>
         <div>
         <div className={Classes.Chatting}>

               <ScrollToBottom  className={Classes.allMessages}>
                  {data.map(data=>{
                     return(
                        <div>
                           <br/><br/>
                           <span className={data.UserID==localStorage.getItem('ID')? Classes.messageSender:Classes.messageReciver}>
                              {data.Msg}
                              <hr/>
                              <div style={{fontSize:'12px'}}>-Send by {data.Name}</div>
                           </span>
                           <br/><br/>
                        </div>
                     )
                  })}
               
               </ScrollToBottom>

               
               <div className={''}>
                  <hr/>
                  <div>

                     <textarea 
                        style={{width:'80%',height:'100px'}}
                        placeholder="Type Your Message!" 
                        onChange={e=>{setMsg(e.target.value)}}
                        value={msg}
                        />
                        <br/>
                     <button onClick={()=>sendMsg()} disabled={msg==''?true:false}>SEND</button>
                  </div>
               </div>
            
         </div>
         </div>
      </div>
  );
}

export default BookList;
