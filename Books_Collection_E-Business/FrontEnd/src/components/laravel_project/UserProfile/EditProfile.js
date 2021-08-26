import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function EditProfile() {

    const [name, setName] = useState("")
    const [gender, setGender] = useState()
    const [errorMsg, setErrorMsg] = useState()

    const history = useHistory()

    useEffect(async () => {


        let data = await fetch('http://localhost:8000/api/user/myaccount/?userid=' + localStorage.getItem("userid"));
        data = await data.json()
        console.log(data)
        setName(data.name)
        setGender(data.gender)
    }, [])


    const formValidate = () => {
        if (name.trim() === "") {
            setErrorMsg("Name is Empty")
            return false
        }
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formValidate()) {

            let result = await fetch("http://localhost:8000/api/user/profile/update", {
                method: 'POST',
                body: JSON.stringify({
                    userid: localStorage.getItem("userid"),
                    gender,
                    name
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

            if (result) {
                history.push("/user/my/profile")
            }
        }
    }

    return (
        <div>
            <h3>Update Your Profile</h3>
            <div class="border-bottom mb-6 pb-6 mb-lg-8 pb-lg-9">
                <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9">
                    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">Account Details
                    </h6>
                    <div class="col-md-6 mb-4">
                        <div class="js-form-message">



                        </div>
                    </div>
                    <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">Edit Account</div>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div class="row">

                            <div class="col-md-6 mb-4">
                                <div class="js-form-message">
                                    <label for="exampleFormControlInput2">Full name *</label>
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} class="form-control rounded-0 pl-3 placeholder-color-3" id="exampleFormControlInput2" name="name" aria-label="Jack Wayley" placeholder="Your Full Name" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                </div>
                            </div>



                            <div class="col-md-12 mb-4">
                                <div class="js-form-message">
                                    <label for="exampleFormControlInput3">Select Gender</label> <br />

                                    <input checked={gender == "Male" ? true : false} type="radio" value="Male" onChange={(e) => { setGender(e.target.value) }} class="rounded-0" name="gender" aria-label="Jack Wayley" id="exampleFormControlInput3" required="" data-error-class="u-has-error" data-msg="Please select your gender." data-success-class="u-has-success" /> Male
                                    <input checked={gender == "Female" ? true : false} type="radio" value="Female" onChange={(e) => { setGender(e.target.value) }} class="rounded-0" name="gender" aria-label="Jack Wayley" id="exampleFormControlInput3" required="" data-error-class="u-has-error" data-msg="Please select your gender." data-success-class="u-has-success" /> Female

                                </div>

                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div class="ml-3">
                                <button type="submit" class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390">Save
                                    Changes</button>
                            </div>
                            <div class="ml-3">
                                <Link to="/user/my/profile" className="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390">Cancel</Link>
                            </div>
                        </div>
                    </form>
                    <h4 className="text-danger">{errorMsg}</h4>
                </div>
            </div>
        </div>
    )
}
