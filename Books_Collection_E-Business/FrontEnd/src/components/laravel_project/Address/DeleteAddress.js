import React from 'react'
import { useHistory, Link } from 'react-router-dom'

export default function DeleteAddress(props) {

    const history = useHistory();

    const confirmDelete = async () => {
        let result = await fetch("http://localhost:8000/api/user/address/confDelete/" + props.match.params.id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        history.push("/user/address/list")
    }

    return (
        <div>
            <button onClick={confirmDelete} className="btn btn-wide btn-danger text-white rounded-0 transition-3d-hover height-60 width-390">Confirm Delete</button>
            <Link to="/user/address/list" className="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390">Cancel</Link>
        </div>
    )
}
