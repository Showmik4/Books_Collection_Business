import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Header from '../Home/Header';

export default class Book_Add extends Component {

    state={
       Name:'',
       CategoryId:'',
      
       WriterId:'',
       Publisher:'',
       Quantity:'',
       SellerId:'',
       Price:'',
       BookCondition:'',
       Language:'',
       Rating:'',
       BookSampleImage1:'',
       error_list:[]
    }

    handleinput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
       
    }

    SaveOwner= async(e)=>{
      e.preventDefault();
    const res=await axios.post('http://127.0.0.1:8000/api/addbook',this.state);
    if(res.data.status===200){
       // console.log(res.data.message);
       swal({
        title: "Good job!",
        text: res.data.message,
        icon: "success",
        button: "Aww yiss!",
      });
        this.setState({
            Name:'',
            CategoryId:'',
           
            WriterId:'',
            Publisher:'',
            Quantity:'',
            SellerId:'',
            Price:'',
            BookCondition:'',
            Language:'',
            Rating:'',
            BookSampleImage1:''
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
                             <Link to={'/books'} className="btn btn-primary btn-sm float-end">Back</Link>
                         </h1>
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.SaveOwner}>
                             <div className="form-grp mb-3">
                              <label>Name </label>
                              <input type="text" name="Name" onChange={this.handleinput} value={this.state.Name} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Name}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>CategoryId</label>
                              <input type="text" name="CategoryId" onChange={this.handleinput} value={this.state.CategoryId} className="form-control" />
                              <span className="text-danger">{this.state.error_list.CategoryId}</span>
                             </div>

                            

                             <div className="form-grp mb-3">
                              <label>WriterId</label>
                              <input type="text" name="WriterId" onChange={this.handleinput} value={this.state.WriterId} className="form-control" />
                              <span className="text-danger">{this.state.error_list.WriterId}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>Publisher</label>
                              <input type="text" name="Publisher" onChange={this.handleinput} value={this.state.Publisher} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Publisher}</span>
                             </div>


                             <div className="form-grp mb-3">
                              <label>Quantity</label>
                              <input type="text" name="Quantity" onChange={this.handleinput} value={this.state.Quantity} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Quantity}</span>
                             </div>

                              
                             <div className="form-grp mb-3">
                              <label>SellerId</label>
                              <input type="text" name="SellerId" onChange={this.handleinput} value={this.state.SellerId} className="form-control" />
                              <span className="text-danger">{this.state.error_list.SellerId}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>Price</label>
                              <input type="text" name="Price" onChange={this.handleinput} value={this.state.Price} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Price}</span>
                             </div>

                            
                             

                             <div className="form-grp mb-3">
                              <label>BookCondition</label>
                              <input type="text" name="BookCondition" onChange={this.handleinput} value={this.state.BookCondition} className="form-control" />
                              <span className="text-danger">{this.state.error_list.BookCondition}</span>
                             </div>


                             <div className="form-grp mb-3">
                              <label>Language</label>
                              <input type="text" name="Language" onChange={this.handleinput} value={this.state.Language} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Language}</span>
                             </div>


                             <div className="form-grp mb-3">
                              <label>Rating</label>
                              <input type="text" name="Rating" onChange={this.handleinput} value={this.state.Rating} className="form-control" />
                              <span className="text-danger">{this.state.error_list.Rating}</span>
                             </div>


                             <div className="form-grp mb-3">
                              <label>Image</label>
                              <input type="file" name="BookSampleImage1" onChange={this.handleinput} value={this.state.BookSampleImage1} className="form-control" />
                             
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