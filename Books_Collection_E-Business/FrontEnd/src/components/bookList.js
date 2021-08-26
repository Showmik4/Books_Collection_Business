import React,{useState,useEffect} from 'react';
import {Route,useHistory,withRouter,Redirect} from 'react-router-dom';
import axios from '../hoc/auxx';
import  Classes from './components.css';

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
      axios.post('/bookSearch',{search})
         .then(r=>{
            console.log(r.data)
            setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }


  return (
      <div className={Classes.App}>
         <h3>Find Out You Boooook!</h3>

         <div>
            <input onChange={e=>setSearch(e.target.value)} placeholder="Book Name"/>
            <br/>
            <button onClick={()=>loadData()}>SEARCH</button>
         </div>
         <div className={Classes.box} class="card">
            {data.map(d=>{
               return(
                  <div className={Classes.DataBox} onClick={()=>history.push('/BookInfo/'+d.ID)} key={d.ID}>
                     <table className={''} style={{width:'450px',borderRadius:'15px'}}>
                        <tr>
                           <th></th>
                           <td><img src={d.BookSampleImage1} width="80" height="120"/></td>
                        </tr>
                        <tr>
                           <td>Name</td>
                           <td>{d.Name}</td>
                        </tr>
                        <tr>
                           <td>Price</td>
                           <td>{d.Price}</td>
                        </tr>
                        <tr>
                           <td>Rating</td>
                           <td>{d.Rating}</td>
                        </tr>
                     </table>
                  </div>
               )
            })}
        
         </div>
         
      </div>
  );
}

export default BookList;
