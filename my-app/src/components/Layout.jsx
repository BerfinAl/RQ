import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <div className="content">
    <Outlet />
    </div>
    </>
  )
}

export default Layout