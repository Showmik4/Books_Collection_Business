import React, { Component } from 'react'
import axios from 'axios';
state={
    name:'',
    email:'',
    phone:'',
    user_type:'',
    gender:'',
    phone_number:''

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
         name:'',
         email:'',
         phone:'',
         user_type:'',
         gender:'',
         phone_number:''
     });
 }
 }
export default class Registration extends Component {
    render() {
        return (
            <>
            <header/>
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
                              <label>Student Name</label>
                              <input type="text" name="name" onChange={this.handleinput} value={this.state.name} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Email</label>
                              <input type="email" name="email" onChange={this.handleinput} value={this.state.course} className="form-control" />
                             </div>

                            

                             <div className="form-grp mb-3">
                              <label>Password</label>
                              <input type="password" name="password" onChange={this.handleinput} value={this.state.password} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>User Type</label>
                              <input type="text" name="user_type" onChange={this.handleinput} value={this.state.password} className="form-control" />
                             </div>
                             
                             <div className="form-grp mb-3">
                              <label>Gender</label>
                              <input type="text" name="gender" onChange={this.handleinput} value={this.state.password} className="form-control" />
                             </div>
                             <div className="form-grp mb-3">
                              <label>Phone Number</label>
                              <input type="text" name="phone_number" onChange={this.handleinput} value={this.state.password} className="form-control" />
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
