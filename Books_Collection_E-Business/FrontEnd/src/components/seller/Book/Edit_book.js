import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header';
import swal from 'sweetalert';
export default class Edit_Book extends Component {

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
       Rating:''
       
    }
    handleinput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
       
    }
    async componentDidMount(){
        const std_id=this.props.match.params.Id;
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-book/${std_id}`); 
        if(res.data.status===200){
           // console.log(res.data.message);
            this.setState({
            
                Name:res.data.Book.Name,
                CategoryId:res.data.Book.CategoryId,
                WriterId:res.data.Book.WriterId,
                Publisher:res.data.Book.Publisher,
                Quantity:res.data.Book.Quantity,
                SellerId:res.data.Book.SellerId,
                Price:res.data.Book.Price,
                BookCondition:res.data.Book.BookCondition,
                Language:res.data.Book.Language,
                Rating:res.data.Book.Rating
            });
        }
    }
   

    UpdateOwner= async(e)=>{
      e.preventDefault();
      document.getAnimations('updatebtn').innerText="updating";
      const std_id=this.props.match.params.Id;
    const res=await axios.put(`http://127.0.0.1:8000/api/update-book/${std_id}`,this.state);
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
                             <Link to={'/books'} className="btn btn-primary btn-sm float-end">Back</Link>
                         </h1>
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.UpdateOwner}>
                             <div className="form-grp mb-3">
                              <label>BookName</label>
                              <input type="text" name="Name" onChange={this.handleinput} value={this.state.Name} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Category-Id</label>
                              <input type="text" name="CategoryId" onChange={this.handleinput} value={this.state.CategoryId} className="form-control" />
                             </div>

                            

                             <div className="form-grp mb-3">
                              <label>WriterId</label>
                              <input type="text" name="WriterId" onChange={this.handleinput} value={this.state.WriterId} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Publisher</label>
                              <input type="text" name="Publisher" onChange={this.handleinput} value={this.state.Publisher} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Quantity</label>
                              <input type="text" name="Quantity" onChange={this.handleinput} value={this.state.Quantity} className="form-control" />
                             </div>
                             
                             <div className="form-grp mb-3">
                              <label>SellerId</label>
                              <input type="text" name="SellerId" onChange={this.handleinput} value={this.state.SellerId} className="form-control" />
                             </div>
                             <div className="form-grp mb-3">
                              <label>Price</label>
                              <input type="text" name="Price" onChange={this.handleinput} value={this.state.Price} className="form-control" />
                             </div>
                             <div className="form-grp mb-3">
                              <label>BookCondition</label>
                              <input type="text" name="BookCondition" onChange={this.handleinput} value={this.state.BookCondition} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Language</label>
                              <input type="text" name="Language" onChange={this.handleinput} value={this.state.Language} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>Rating</label>
                              <input type="text" name="Rating" onChange={this.handleinput} value={this.state.Rating} className="form-control" />
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