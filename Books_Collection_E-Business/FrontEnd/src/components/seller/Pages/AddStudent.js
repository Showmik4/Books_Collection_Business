import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header';
import swal from 'sweetalert';
export default class AddStudent extends Component {

    state={
       name:'',
       course:'',
      
       phone:'',
       book_name:'',
       total_book:'',
       error_list:[],
    }

    handleinput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
       
    }

    SaveStudent= async(e)=>{
      e.preventDefault();
    const res=await axios.post('http://127.0.0.1:8000/api/add-student',this.state);
    if(res.data.status===200){
       // console.log(res.data.message);
       swal({
        title: "Added!",
        text: res.data.message,
        icon: "success",
        button: "OK!",
      }); 
         
        this.setState({
            name:'',
            course:'',
           
            phone:'',
            book_name:'',
            total_book:'',
          
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
                             <Link to={'/students'} className="btn btn-primary btn-sm float-end">Back</Link>
                         </h1>
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.SaveStudent}>
                             <div className="form-grp mb-3">
                              <label>Customer Name</label>
                              <input type="text" name="name" onChange={this.handleinput} value={this.state.name} className="form-control" />
                              <span className="text-danger">{this.state.error_list.name}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>Customer Address</label>
                              <input type="text" name="course" onChange={this.handleinput} value={this.state.course} className="form-control" />
                              <span className="text-danger">{this.state.error_list.course}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>Phone</label>
                              <input type="text" name="phone" onChange={this.handleinput} value={this.state.phone} className="form-control" />
                              <span className="text-danger">{this.state.error_list.phone}</span>
                             </div>


                             <div className="form-grp mb-3">
                              <label>Book Name</label>
                              <input type="text" name="book_name" onChange={this.handleinput} value={this.state.book_name} className="form-control" />
                              <span className="text-danger">{this.state.error_list.book_name}</span>
                             </div>

                             <div className="form-grp mb-3">
                              <label>Total Book</label>
                              <input type="text" name="total_book" onChange={this.handleinput} value={this.state.total_book} className="form-control" />
                              <span className="text-danger">{this.state.error_list.total_book}</span>
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