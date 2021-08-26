
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header';
import swal from 'sweetalert';
export default class Book_List extends Component {

    state={
        Book:[],
        loading:true,
    }
    async componentDidMount(){
      const res = await axios.get('http://127.0.0.1:8000/api/books'); 
       //console.log(res);
      if(res.data.status===200){
       // console.log(res.data.message);
        this.setState({
          Book:res.data.Book,
          loading:false,
        });
    }
    }

    deleteBook=async(e,Id)=>{
        const thidClickedFunda=e.currentTarget;
        thidClickedFunda.innerText="deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-book/${Id}`); 
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
           Book:e.target.value
       },()=>{
           console.log(this.state.Book);
       })
    }
    


    render() {
       var Owner_HTMLTable = "";

      if(this.state.loading){
          Owner_HTMLTable = <tr><td colSpan="15"><h2>loading..</h2></td></tr>
      }
      else{
        Owner_HTMLTable=
        this.state.Book.map((item)=>{
            return(
              <tr key={item.Id}>
               <td >{item.Id}</td>
               <td >{item.Name}</td>
              <td >{item.CategoryId}</td>
              <td >{item.WriterId}</td>
              <td >{item.Publisher}</td>
              <td >{item.Quantity}</td>
              <td >{item.SellerId}</td>
              <td >{item.Price}</td>
              <td >{item.BookCondition}</td>
              <td >{item.Language}</td>
              <td >{item.Rating}</td>
              <td ><img src={`https://images-na.ssl-images-amazon.com/images/I/51UvPYjG+gS._SX258_BO1,204,203,200_.jpg`} width="50px" alt="Image"/></td>
              <td>
              <Link to={`edit-book/${item.Id}`} className="btn btn-success btn-sm ">Edit</Link>
             
              </td>
             
             
              <td>
                  <button type="button" onClick={(e)=>this.deleteBook(e,item.Id)}  className="btn btn-danger btn-sm ">Delete</button>
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
                             Book List

                             <Link to={'addbook'} className="btn btn-primary btn-sm float-end">Add </Link>
                             <Link to={'books'} className="btn btn-primary btn-sm float-end">Back</Link>
                            
                         </h1>
                       
                        </div>
                         
                        <div className="card-body">
                           <table className="table table-bordered table-striped">
                               <thead>
                                   <tr>
                                      <th>ID</th>
                                      <th>BookName</th>
                                      <th>CategoryId</th>
                                      <th>WriterId</th>
                                      <th>Publisher</th>
                                      <th>Quantity</th>
                                      <th>SellerId</th>
                                      <th>Price</th>
                                      <th>BookCondition</th>
                                      <th>Language</th>
                                      <th>Rating</th>
                                      <th>SampleImage</th>
                                      <th>Edit</th>
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