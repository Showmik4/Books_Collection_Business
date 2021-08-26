/*import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Login extends Component {

    state={
       email:'',
       password:'',
      
      
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
        console.log(res.data.message);
        this.setState({
            email:'',
            password:'',
           
           
        });
    }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                         <h1>
                             Add Student
                             <Link to={'/students'} className="btn btn-primary btn-sm float-end">Back</Link>
                         </h1>
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.SaveStudent}>
                             <div className="form-grp mb-3">
                              <label>Email ID</label>
                              <input type="email" name="email" onChange={this.handleinput} value={this.state.email} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Student Course</label>
                              <input type="password" name="password" onChange={this.handleinput} value={this.state.password} className="form-control" />
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
        );
    }
}*/