import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Edit_Owner extends Component {

    state={
        Shop_Name:'',
        Shopper_Name:'',
       
        Shop_Address:'',
        Shop_Licence:'',
        Phone_No:''
    }
    handleinput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
       
    }
    async componentDidMount(){
        const std_id=this.props.match.params.Shop_Id;
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-owner/${std_id}`); 
        if(res.data.status===200){
           // console.log(res.data.message);
            this.setState({
                Shop_Name: res.data.Owner.Shop_Name,
                Shopper_Name: res.data.Owner.Shopper_Name,
                Shop_Address: res.data.Owner.Shop_Address,
                Shop_Licence: res.data.Owner.Shop_Licence,
               
                Phone_No:res.data.Owner.Phone_No,
            });
        }
    }
   

    UpdateOwner= async(e)=>{
      e.preventDefault();
      document.getAnimations('updatebtn').innerText="updating";
      const std_id=this.props.match.params.Shop_Id;
    const res=await axios.put(`http://127.0.0.1:8000/api/update-owner/${std_id}`,this.state);
    if(res.data.status===200){
        console.log(res.data.message);
        /*this.setState({
            name:'',
            course:'',
           
            phone:''
        });*/
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
                             Edit Product
                             <Link to={'/owner'} className="btn btn-primary btn-sm float-end">Back</Link>
                         </h1>
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.UpdateOwner}>
                             <div className="form-grp mb-3">
                              <label>ShopName</label>
                              <input type="text" name="Shop_Name" onChange={this.handleinput} value={this.state.Shop_Name} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>ShopperName</label>
                              <input type="text" name="Shopper_Name" onChange={this.handleinput} value={this.state.Shopper_Name} className="form-control" />
                             </div>

                            

                             <div className="form-grp mb-3">
                              <label>ShopAddress</label>
                              <input type="text" name="Shop_Address" onChange={this.handleinput} value={this.state.Shop_Address} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>ShopLicence</label>
                              <input type="text" name="Shop_Licence" onChange={this.handleinput} value={this.state.Shop_Licence} className="form-control" />
                             </div>

                             <div className="form-grp mb-3">
                              <label>PhoneNo</label>
                              <input type="text" name="Phone_No" onChange={this.handleinput} value={this.state.Phone_No} className="form-control" />
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
        );
    }
}