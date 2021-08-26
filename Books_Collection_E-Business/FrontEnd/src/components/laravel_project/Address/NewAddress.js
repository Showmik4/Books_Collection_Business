import React, { Component } from 'react'
import {
    Link,
    withRouter, useHistory
} from "react-router-dom";

// export const Component = withRouter(({ history, location }) => {

// })

class NewAddress extends Component {

    constructor(props) {
        super(props)
        if (!localStorage.getItem("userid")) {
            this.props.history.push("/user/login")
            return
        }
        
        this.state = {
            userid: localStorage.getItem("userid"),
            House_No: '',
            Road_No: '',
            Postal_Code: '',
            Area: '',
            Country: '',
            City: '',
            Mobile_Number: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            Country: e.target.value
        })

    }

    handleOnSubmit = async (e) => {
        e.preventDefault()
        const { userid, House_No, Road_No, Postal_Code, Area, City, Mobile_Number, Country } = this.state

        let result = await fetch("http://localhost:8000/api/user/add/address", {
            method: 'POST',
            body: JSON.stringify({ userid, House_No, Road_No, Postal_Code, Area, City, Mobile_Number, Country }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        result = await result.json
        console.log(JSON.stringify({ userid, House_No, Road_No, Postal_Code, Area, City, Mobile_Number, Country }));

        this.props.history.push("/user/address/list")
    }



    render() {
        return (
            <div>
                <div class="border-bottom mb-6 pb-6 mb-lg-8 pb-lg-9">
                    <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9">
                        <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">Address Details
                        </h6>
                        <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">Add Another Shipping Address</div>
                        <form action="" method="post" onSubmit={this.handleOnSubmit}>
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label for="exampleFormControlInput1">Country *</label>
                                        <input type="text" value={this.state.Country} onChange={this.handleChange} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput1" name="Country" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>

                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label for="exampleFormControlInput1">City *</label>
                                        <input type="text" value={this.state.City} onChange={(e) => { this.setState({ City: e.target.value }) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput1" name="City" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label for="exampleFormControlInput2">Area*</label>
                                        <input type="text" value={this.state.Area} onChange={(e) => { this.setState({ Area: e.target.value }) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="Area" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label for="exampleFormControlInput2">Post Code*</label>
                                        <input type="text" value={this.state.Postal_Code} onChange={(e) => { this.setState({ Postal_Code: e.target.value }) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="Postal_Code" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label for="exampleFormControlInput2">Road No *</label>
                                        <input type="text" value={this.state.Road_No} onChange={(e) => { this.setState({ Road_No: e.target.value }) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="Road_No" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label for="exampleFormControlInput2">House No *</label>
                                        <input type="text" value={this.state.House_No} onChange={(e) => { this.setState({ House_No: e.target.value }) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="House_No" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label for="exampleFormControlInput2">Mobile Number *</label>
                                        <input type="text" value={this.state.Mobile_Number} onChange={(e) => { this.setState({ Mobile_Number: e.target.value }) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="Mobile_Number" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>

                                <br />
                                <br />
                                <br />
                                <br />
                                <div class="ml-3">
                                    <button type="submit" class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390">Save</button>
                                </div>
                                <div class="ml-3">
                                    <Link to="/user/address/list" class="btn btn-wide btn-danger text-white rounded-0 transition-3d-hover height-60 width-390">Back</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(NewAddress);