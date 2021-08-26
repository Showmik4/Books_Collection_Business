import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header';
import swal from 'sweetalert';


export default class Add_Catagory extends Component {
    state={
        CategoryName:'',
        error_list:[],
      
     }
 
     handleinput=(e)=>{
         this.setState({
             [e.target.name]: e.target.value
         });
        
     }

     SaveCatagory= async(e)=>{
        e.preventDefault();
      const res=await axios.post('http://127.0.0.1:8000/api/add-catagory',this.state);
      if(res.data.status===200){
        //  console.log(res.data.message);
        swal({
            title: "Good job!",
            text: res.data.message,
            icon: "success",
            button: "Aww yiss!",
          });
          this.setState({
              CategoryName:'',
              
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
                         Add Category
                         <Link to={'/catagory'} className="btn btn-primary btn-sm float-end">Back</Link>
                     </h1>
                    </div>
                    <div className="card-body">
                       <form onSubmit={this.SaveCatagory}>
                         <div className="form-grp mb-3">
                          <label> Name</label>
                          <input type="text" name="CategoryName" onChange={this.handleinput} value={this.state.CategoryName} className="form-control" />
                          <span className="text-danger">{this.state.error_list.CategoryName}</span>
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
        )
    }
}
