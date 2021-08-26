import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

export default function ChangePassword() {

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState()

    const history = useHistory()

    useEffect(async () => {

    }, [])


    const formValidate = () => {
        if (currentPassword.trim() === "" || newPassword.trim() === "" || confirmNewPassword.trim() === "") {
            setErrorMsg("All Field is Required")
            return false
        }
        else if (currentPassword.trim().length < 5 || newPassword.trim().length < 5 || confirmNewPassword.trim().length < 5) {
            setErrorMsg("Minimum Lenght is 5")
            return false
        } else if (newPassword !== confirmNewPassword) {
            setErrorMsg("Confrim Password does not match")
            return false
        }
        return true
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.clear()

        if (formValidate()) {

            let result = await fetch("http://localhost:8000/api/user/changepassword", {
                method: 'POST',
                body: JSON.stringify({
                    userid: 1,
                    Current_Password: currentPassword,
                    New_Password: newPassword
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then(response => response.json())
            console.log(result)
            if (result == -2) {
                setErrorMsg("Validation Failed of Length")

            } else if (result == -1) {
                setErrorMsg("Current Password does not match")
            } else if (result > 0) {
                history.push("/user/my/profile")
            }
        }
        //console.log(newPassword);
    }
    return (
        <div class="pl-md-5 pl-lg-9 space-bottom-2 space-bottom-lg-3">
            <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">Password Change</div>


            <form action="/user/changepassword" method="post" onSubmit={handleSubmit}>

                <div class="row">
                    <div class="col-md-12 mb-4">
                        <div class="js-form-message">
                            <label htmlFor="exampleFormControlInput5">Current Password</label>
                            <input type="passwords" onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} class="form-control rounded-0" name="Current_Password" id="exampleFormControlInput5" aria-label="Jack Wayley" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                        </div>
                    </div>
                    <div class="col-md-12 mb-4">
                        <div class="js-form-message">
                            <label htmlFor="exampleFormControlInput6">New Password</label>
                            <input type="passwords" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} class="form-control rounded-0" name="New_Password" id="exampleFormControlInput6" aria-label="Jack Wayley" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                        </div>
                    </div>
                    <div class="col-md-12 mb-5">
                        <div class="js-form-message">
                            <label htmlFor="exampleFormControlInput7">Confirm new password</label>
                            <input type="passwords" onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} class="form-control rounded-0" name="New_Password_confirmation" id="exampleFormControlInput7" aria-label="Jack Wayley" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                        </div>
                    </div>
                    <div class="ml-3">
                        <button onClick={handleSubmit} type="submit" class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390">Save
                            Changes</button>
                    </div>
                    <div class="ml-3">
                        <Link to="/user/my/profile" className="btn btn-wide btn-danger text-white rounded-0 transition-3d-hover height-60 width-390">Cancel</Link>
                    </div>
                </div>
            </form>
            <h3 className="text-danger">{errorMsg}</h3>
        </div>
    )
}
