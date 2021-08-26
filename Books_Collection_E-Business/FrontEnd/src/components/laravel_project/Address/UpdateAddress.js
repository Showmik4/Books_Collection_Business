import React, { useState, useEffect } from 'react'
import { Link, withRouter, useHistory } from "react-router-dom";

function UpdateAddress(props) {

    const [userAddress, setUserAddress] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)


    const [Country, setCountry] = useState();
    const [City, setCity] = useState();
    const [Area, setArea] = useState();
    const [Postal_Code, setPostal_Code] = useState();
    const [Road_No, setRoad_No] = useState();
    const [House_No, setHouse_No] = useState();
    const [Mobile_Number, setMobile_Number] = useState();

    const history = useHistory()

    useEffect(async () => {

        if (!localStorage.getItem("userid")) {
            history.push("/user/login")
            return
        }

        let data = await fetch('http://localhost:8000/api/user/address/' + props.match.params.id + "?userid=" + localStorage.getItem("userid"));
        data = await data.json();
        setUserAddress(data)
        setIsLoaded(true)
        setCountry(data.Country)
        setCountry(data.Country)
        setCity(data.City)
        setArea(data.Area)
        setHouse_No(data.House_No)
        setRoad_No(data.Road_No)
        setPostal_Code(data.Postal_Code)
        setMobile_Number(data.Mobile_Number)
    }, [])


    const changeCountry = (e) => { setCountry(e.target.value) }

    const handleOnSubmit = async (e) => {

        e.preventDefault();
        let result = await fetch("http://localhost:8000/api/user/edit/address/" + props.match.params.id, {
            method: 'POST',
            body: JSON.stringify({
                userid: localStorage.getItem("userid"),
                House_No,
                Road_No,
                Postal_Code,
                Area,
                City,
                Mobile_Number,
                Country
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        console.log(result);

        result = await result.json
        console.log(JSON.stringify({
            userid: 1,
            House_No: userAddress.House_No,
            Road_No: userAddress.Road_No,
            Postal_Code: userAddress.Postal_Code,
            Area: userAddress.Area,
            City: userAddress.City,
            Mobile_Number: userAddress.Mobile_Number,
            Country: Country
        }));

        history.push("/user/address/list")

    }

    if (!isLoaded) {
        return <div>loading...</div>
    }
    else if (true) {
        return (

            <div>

                <div class="border-bottom mb-6 pb-6 mb-lg-8 pb-lg-9">
                    <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9">
                        <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">Address Details
                        </h6>
                        <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">Add Another Shipping Address</div>
                        <form action="" method="post" onSubmit={handleOnSubmit}>
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label htmlFor="exampleFormControlInput1">Country *</label>
                                        <input type="text" defaultValue={userAddress.Country} onChange={changeCountry} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput1" name="Country" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>

                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label htmlFor="exampleFormControlInput1">City *</label>
                                        <input type="text" defaultValue={userAddress.City} onChange={(e) => { setCity(e.target.value) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput1" name="City" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label htmlFor="exampleFormControlInput2">Area*</label>
                                        <input type="text" defaultValue={userAddress.Area} onChange={(e) => { setArea(e.target.value) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="Area" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label htmlFor="exampleFormControlInput2">Post Code*</label>
                                        <input type="text" defaultValue={userAddress.Postal_Code} onChange={(e) => { setPostal_Code(e.target.value) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="Postal_Code" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label htmlFor="exampleFormControlInput2">Road No *</label>
                                        <input type="text" defaultValue={userAddress.Road_No} onChange={(e) => { setRoad_No(e.target.value) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="Road_No" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label htmlFor="exampleFormControlInput2">House No *</label>
                                        <input type="text" defaultValue={userAddress.House_No} onChange={(e) => { setHouse_No(e.target.value) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="House_No" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="js-form-message">
                                        <label htmlFor="exampleFormControlInput2">Mobile Number *</label>
                                        <input type="text" defaultValue={userAddress.Mobile_Number} onChange={(e) => { setMobile_Number(e.target.value) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="Mobile_Number" aria-label="Jack Wayley" placeholder="" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
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
export default withRouter(UpdateAddress)