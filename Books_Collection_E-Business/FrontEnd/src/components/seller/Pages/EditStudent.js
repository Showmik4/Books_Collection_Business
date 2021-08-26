import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Header from '../Home/Header';
export default class EditStudent extends Component {

    state={
       name:'',
       course:'',
      
       phone:'',

       book_name:'',
       total_book:''
    }
    handleinput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
       
    }
    async componentDidMount(){
        const std_id=this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-student/${std_id}`); 
        if(res.data.status===200){
           // console.log(res.data.message);
            this.setState({
                name: res.data.student.name,
                course: res.data.student.course,
             
               
                phone:res.data.student.phone,
                book_name: res.data.student.course,
                total_book: res.data.student.course,
            });
        }
    }
   

    UpdateStudent= async(e)=>{
      e.preventDefault();
      document.getAnimations('updatebtn').innerText="updating";
      const std_id=this.props.match.params.id;
    const res=await axios.put(`http://127.0.0.1:8000/api/update-student/${std_id}`,this.state);
    if(res.data.status===200){
       // console.log(res.data.message);
       swal({
        title: "Updated!",
        text: res.data.message,
        icon: "success",
        button: "OK!",
      }); 

        /*this.setState({
            name:'',
            course:'',
           
            phone:''
        });*/
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
                             Edit Product
                             <Link to={'/students'} className="btn btn-primary btn-sm float-end">Back</Link>
                         </h1>
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.UpdateStudent}>
                             <div className="form-grp mb-3">
                              <label> Customer Name</label>
                              <input type="text" name="name" onChange={this.handleinput} value={this.state.name} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Customer Address</label>
                              <input type="text" name="course" onChange={this.handleinput} value={this.state.course} className="form-control" />
                             </div>

                            

                             <div className="form-grp mb-3">
                              <label>Book Name</label>
                              <input type="text" name="book_name" onChange={this.handleinput} value={this.state.book_name} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Total Book</label>
                              <input type="text" name="total_book" onChange={this.handleinput} value={this.state.total_book} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Phone</label>
                              <input type="text" name="phone" onChange={this.handleinput} value={this.state.phone} className="form-control" />
                             </div>


                             <div className="form-grp mb-3">
                             <button type="submit" id="updatebtn" className="btn btn-primary">Update</button>
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