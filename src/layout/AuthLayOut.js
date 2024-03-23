import React from 'react'
import { Outlet } from 'react-router-dom'
import "../style/Main.css"
const AuthLayOut = () => {
  return (
    <div>
        <div className='backgroundauth'><Outlet/></div>
    </div>
  )
}

export default AuthLayOut;