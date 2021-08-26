import React, { useEffect, useState } from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom';

function AddWish(props) {

    const [errorMsg, setErrorMsg] = useState("")
    const [errorCode, setErrorCode] = useState(0)
    const history = useHistory()

    // useEffect(async () => {
    //     if (props.match.params.id) {
    //         let data = await fetch('http://localhost:8000/api/add/wishlist/' + props.match.params.id + "?userid=1");
    //         data = await data.json()
    //         console.log("response details: " + data)
    //     }
    // }, [])

    const handleSaveWish = async (e) => {

        let data = await fetch('http://localhost:8000/api/add/wishlist/' + props.match.params.id + "?userid=1");
        data = await data.json()
        console.log("response details: " + data)
        setErrorCode(parseInt(data));
        if (parseInt(data) == -3) {
            setErrorMsg("Already in Wish List");
        } else if (parseInt(data) == -2) {
            setErrorMsg("Wish List Filled Up. Add")
        } else if (parseInt(data) == 1) {
            history.push("/user/wish/list")
        }
    }

    const handleForceSaveWish = async (e) => {
        console.log("force btn clicked")
        let data = await fetch('http://localhost:8000/api/add/wishlist/force/' + props.match.params.id + "?userid=1");
        data = await data.json()
        setErrorCode(parseInt(data));
        if (parseInt(data) == 1) {
            history.push("/user/wish/list")
        }
        console.log("response details: " + data)
    }
    return (
        <div>
            <button className="btn btn-dark" onClick={handleSaveWish}>Save in Wish List</button>
            <Link className="btn btn-danger" to="/home/books/list">Cancel</Link>

            {errorCode == -3 ? <h2 className="text-danger">{errorMsg}</h2> : ""}
            {
                errorCode == -2 ? <h2 className="text-danger">
                    {errorMsg} <button className="btn-sm btn btn-dark btn-rounded" onClick={handleForceSaveWish}>Forcely</button>
                </h2> : ""
            }
        </div>
    )
}
export default withRouter(AddWish)
