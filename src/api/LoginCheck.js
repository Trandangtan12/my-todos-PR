import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticated } from './userApi'

const LoginCheck = ({ children }) => {
    return (
        <Route render={() => {
            return isAuthenticated() ? children : <Redirect to={{ pathname: "/login" }} />
        }} />
    )
}

export default LoginCheck
