import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header';
import swal from 'sweetalert';
export default class category_list extends Component {

    state={
        catagory:[],
        loading:true,
    }
    async componentDidMount(){
      const res = await axios.get('http://127.0.0.1:8000/api/catagory'); 
       //console.log(res);
      if(res.data.status===200){
       // console.log(res.data.message);
        this.setState({
          catagory:res.data.catagory,
          loading:false,
        });
    }
    }

    deleteCatagory=async(e,CategoryId)=>{
        const thidClickedFunda=e.currentTarget;
        thidClickedFunda.innerText="deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-catagory/${CategoryId}`); 
        if(res.data.status===200){
            thidClickedFunda.closest("tr").remove();
           //  console.log(res.data.message);
             
           swal({
            title: "Deleted!",
            text: res.data.message,
            icon: "success",
            button: "Ok!",
          });
         }
    }
    
    
    handleOnChange=(e)=>{
       this.setState({
           catagory:e.target.value
       },()=>{
           console.log(this.state.catagory);
       })
    }
    render() {

        var Catagories_HTMLTable = "";

      if(this.state.loading){
          Catagories_HTMLTable = <tr><td colSpan="3"><h2>loading..</h2></td></tr>
      }
      else{
        Catagories_HTMLTable=
        this.state.catagory.map((item)=>{
            return(
              <tr key={item.CategoryId}>
              <td >{item.CategoryId}</td>
              <td >{item.CategoryName}</td>
            
             
             
              <td>
                  <button type="button" onClick={(e)=>this.deleteCatagory(e,item.CategoryId)} className="btn btn-danger btn-sm ">Delete</button>
              </td>
              </tr>
        );
        });
      }
        return (
            <>
               <Header />
            <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                 
                     <h1>
                         Category Data

                         <Link to={'add-catagory'} className="btn btn-primary btn-sm float-end">Add </Link>
                         <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                        
                     </h1>
                     <div className="card-body">
                           <table className="table table-bordered table-striped">
                               <thead>
                                   <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                     
                                      <th>Delete</th>
                                      
                                   </tr>
                               </thead>
                               <tbody>
                              { Catagories_HTMLTable}
                               </tbody>
                           </table>
                        </div>
                   </div>
                   </div>
                    </div>
                    </div>
                
                    </div>
                </>    
                  
        )
    }
}
