
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header';
import swal from 'sweetalert';
export default class Owner_List extends Component {

    state={
        Owner:[],
        loading:true,
    }
    async componentDidMount(){
      const res = await axios.get('http://127.0.0.1:8000/api/owner'); 
       //console.log(res);
      if(res.data.status===200){
       // console.log(res.data.message);
        this.setState({
          Owner:res.data.Owner,
          loading:false,
        });
    }
    }

    deleteOwner=async(e,Shop_Id)=>{
        const thidClickedFunda=e.currentTarget;
        thidClickedFunda.innerText="deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-owner/${Shop_Id}`); 
        if(res.data.status===200){
            thidClickedFunda.closest("tr").remove();
            // console.log(res.data.message);
            swal({
                title: "Deleted!",
                text: res.data.message,
                icon: "success",
                button: "Aww yiss!",
              });
            
         }
    }
    
    handleOnChange=(e)=>{
       this.setState({
           Owner:e.target.value
       },()=>{
           console.log(this.state.Owner);
       })
    }
    


    render() {
       var Owner_HTMLTable = "";

      if(this.state.loading){
          Owner_HTMLTable = <tr><td colSpan="8"><h2>loading..</h2></td></tr>
      }
      else{
        Owner_HTMLTable=
        this.state.Owner.map((item)=>{
            return(
              <tr key={item.Shop_Id}>
               <td >{item.Shop_Id}</td>
              <td >{item.Shop_Name}</td>
              <td >{item.Shopper_Name}</td>
              <td >{item.Shop_Address}</td>
              <td >{item.Shop_Licence}</td>
              <td >{item.Phone_No}</td>
              <td>
              <Link to={`edit-owner/${item.Shop_Id}`} className="btn btn-success btn-sm ">Edit</Link>
             
              </td>
             
             
              <td>
                  <button type="button" onClick={(e)=>this.deleteOwner(e,item.Shop_Id)}  className="btn btn-danger btn-sm ">Delete</button>
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
                             Shop List

                             <Link to={'add-owner'} className="btn btn-primary btn-sm float-end">Add </Link>
                             <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            
                         </h1>
                       
                        </div>
                         
                        <div className="card-body">
                           <table className="table table-bordered table-striped">
                               <thead>
                                   <tr>
                                      <th>ShopID</th>
                                      <th>ShopName</th>
                                      <th>ShopperName</th>
                                      <th>ShopAddress</th>
                                      <th>ShopLicence</th>
                                      <th>PhoneNo</th>
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