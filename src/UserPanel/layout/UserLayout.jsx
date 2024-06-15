import React from 'react'
import UserNavbar from '../components/Navbar/UserNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function UserLayout() {
  return (
    <>
      <UserNavbar/>
      <div className='min-h-[70vh]'>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default UserLayout
