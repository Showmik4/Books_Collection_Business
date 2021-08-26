import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default function Protected(props) {

    const history = useHistory();
    let Cmp = props.cmp
    useEffect(() => {
        if (!localStorage.getItem('userid')) {
            history.push("/user/login")
        }
    }, [])
    return (
        <>
            <Cmp />
        </>
    )
}
