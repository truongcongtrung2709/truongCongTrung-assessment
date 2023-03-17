import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const UserProtected = ({children}) => {
    const {user} = useSelector(state => state.auth)
    const location = useLocation();
    if(!user){
        const redirectUrl = `/signin?redirectUrl=${location.pathname}`
        return <Navigate to={redirectUrl} replace/>
    }
  return children
}

export default UserProtected