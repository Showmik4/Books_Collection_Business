import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import EditProfile from './EditProfile'
import MyProfile from './MyProfile'
import ChangePassword from './ChangePassword'

export default function Profile() {
    return (
        <div>

            <Route exact path="/user/profile/update" children={<EditProfile />}></Route>
            <Route exact path="/user/my/profile" children={<MyProfile />}></Route>
            <Route exact path="/user/password/change" component={ChangePassword} ></Route>

        </div >
    )
}
