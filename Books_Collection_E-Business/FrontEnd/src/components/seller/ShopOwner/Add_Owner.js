import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Header from '../Home/Header';
export default class Add_Owner extends Component {

    state={
       Shop_Name:'',
       Shopper_Name:'',
      
       Shop_Address:'',
       Shop_Licence:'',
       Phone_No:'',
       error_list:[],
    }

    handleinput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
       
    }

    SaveOwner= async(e)=>{
      e.preventDefault();
    const res=await axios.post('http://127.0.0.1:8000/api/add-owner',this.state);
    if(res.data.status===200){
       // console.log(res.data.message);
       swal({
        title: "Good job!",
        text: res.data.message,
        icon: "success",
        button: "Aww yiss!",
      });
        this.setState({
            Shop_Name:'',
            Shopper_Name:'',
           
            Shop_Address:'',
            Shop_Licence:'',
            Phone_No:''
        });
    }

    else{
        this.setState({
            error_list:res.data.validator_err,
    })
    }
    }
    render() {
        return (
            <>
            <Header/>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                         <h1>
                             Add Product
                             <Link to={'/owner'} className="btn btn-primary btn-sm float-end">Back</Link>
                         </h1>
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.SaveOwner}>
                             <div className="form-grp mb-3">
                              <label>ShopName </label>
                              <input type="text" name="Shop_Name" onChange={this.handleinput} value={this.state.Shop_Name} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Shop_Name}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>ShopperName</label>
                              <input type="text" name="Shopper_Name" onChange={this.handleinput} value={this.state.Shopper_Name} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Shopper_Name}</span>
                             </div>

                            

                             <div className="form-grp mb-3">
                              <label>ShopAddress</label>
                              <input type="text" name="Shop_Address" onChange={this.handleinput} value={this.state.Shop_Address} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Shop_Address}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>ShopLicence</label>
                              <input type="text" name="Shop_Licence" onChange={this.handleinput} value={this.state.Shop_Licence} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Shop_Licence}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>PhoneNumber</label>
                              <input type="text" name="Phone_No" onChange={this.handleinput} value={this.state.Phone_No} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Phone_No}</span>
                             </div>

                             <div className="form-grp mb-3">
                             <button type="submit" className="btn btn-primary">Save</button>
                             </div>
                           </form>
                        </div>
                    </div>

                </div>
                </div>
                
            </div>
            </>
        );
    }
}