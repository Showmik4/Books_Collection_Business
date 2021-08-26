
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header';
import swal from 'sweetalert';
export default class B_Book_List extends Component {

    state={
        BBook:[],
        loading:true,
    }
    async componentDidMount(){
      const res = await axios.get('http://127.0.0.1:8000/api/bbooks'); 
       //console.log(res);
      if(res.data.status===200){
       // console.log(res.data.message);
        this.setState({
          BBook:res.data.BBook,
          loading:false,
        });
    }
    }

    deleteBook=async(e,BooK_Id)=>{
        const thidClickedFunda=e.currentTarget;
        thidClickedFunda.innerText="deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-bbook/${BooK_Id}`); 
        if(res.data.status===200){
            thidClickedFunda.closest("tr").remove();
             //console.log(res.data.message);
             swal({
                title: "Deleted!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              }); 
            
         }
    }
    
    handleOnChange=(e)=>{
       this.setState({
          BBook:e.target.value
       },()=>{
           console.log(this.state.BBook);
       })
    }
    


    render() {
       var Owner_HTMLTable = "";

      if(this.state.loading){
          Owner_HTMLTable = <tr><td colSpan="6"><h2>loading..</h2></td></tr>
      }
      else{
        Owner_HTMLTable=
        this.state.BBook.map((item)=>{
            return(
              <tr key={item.BooK_Id}>
               <td >{item.BooK_Id}</td>
               <td >{item.Name}</td>
              <td >{item.Price}</td>
              
              <td >{item.Language}</td>
             
              <td ><img src={`https://images-na.ssl-images-amazon.com/images/I/51UvPYjG+gS._SX258_BO1,204,203,200_.jpg`} width="50px" alt="Image"/></td>
             
             
              <td>
                  <button type="button" onClick={(e)=>this.deleteBook(e,item.BooK_Id)}  className="btn btn-danger btn-sm ">Delete</button>
              </td>
              </tr>
        );
        });
      }
        return (
            <>
          <Header/>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                      
                         <h1>
                             BestSelling Books

                             <Link to={'add-bbook'} className="btn btn-primary btn-sm float-end">Add </Link>
                             <Link to={'/books'} className="btn btn-primary btn-sm float-end">Back</Link>
                            
                         </h1>
                       
                        </div>
                         
                        <div className="card-body">
                           <table className="table table-bordered table-striped">
                               <thead>
                                   <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Price</th>
                                   
                                      <th>Language</th>
                                    
                                      <th>SampleImage</th>
                                      <th>Delete</th>
                                    
                                      
                                   </tr>
                               </thead>
                               <tbody>
                              { Owner_HTMLTable}
                               </tbody>
                           </table>
                        </div>
                    </div>

                </div>
                </div>
                
            </div>
         </>
        )
    }
}