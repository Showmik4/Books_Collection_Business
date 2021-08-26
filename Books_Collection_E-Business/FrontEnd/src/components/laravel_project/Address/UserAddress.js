import React, { Component } from 'react'
import { Link } from "react-router-dom";
import NavBar from '../Common_Compo/NavBar';



export default class UserAddress extends Component {

    constructor(props) {
        super(props)
        if (!localStorage.getItem("userid")) {
            this.props.history.push("/user/login")
            return
        }
        this.state = {
            allAddress2: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/user/myaccount/address?userid=' + localStorage.getItem("userid"))
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    allAddress2: data,
                    isLoaded: true
                })
            })
    }

    render() {
        const { allAddress2, isLoaded } = this.state
        if (!isLoaded) {
            return <div>
                <NavBar />
                data is loading...

            </div>
        } else {
            return (
                <div>
                    <NavBar />
                    <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-2 mb-lg-4">
                        <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-5 mb-lg-8 pb-xl-1">Addresses</h6>
                        <p><Link to="/CreateAddress" class="btn btn-primary width-160 rounded-0 btn-wide font-weight-medium">Create New</Link></p>
                        <div class="row row-cols-1 row-cols-md-2">

                            {/* @foreach ($allAddress as $address) */}
                            {allAddress2.map((address) => (
                                <div class="col">
                                    <div class="mb-6 mb-md-0">
                                        <h6 class="font-weight-medium font-size-22 mb-3">Shipping Address
                                        </h6>
                                        <address class="d-flex flex-column mb-4">
                                            <span class="text-gray-600 font-size-2">House No: {address.House_No}</span>
                                            <span class="text-gray-600 font-size-2">Road No: {address.Road_No}</span>
                                            <span class="text-gray-600 font-size-2">Area: {address.Area}</span>
                                            <span class="text-gray-600 font-size-2">{address.City}, {address.Postal_Code}</span>
                                            <span class="text-gray-600 font-size-2">{address.Country}</span>
                                            <span class="text-gray-600 font-size-2">Mobile Number: {address.Mobile_Number}</span>
                                        </address>
                                        <div class="d-flex">
                                            {/* prev {{ url('/user/edit/address') }}/{{ $address-> address_id}} */}
                                            <Link to={{
                                                pathname: `/user/address/update/${address.address_id}`
                                            }}
                                                class="btn btn-dark width-150 rounded-0 btn-wide font-weight-medium">Edit</Link>
                                            <Link to={`/user/address/delete/${address.address_id}`} class="btn btn-danger width-150 rounded-0 btn-wide font-weight-medium">Remove</Link>
                                        </div>
                                        <div class="d-flex">

                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            )
        }
    }
}
