import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* main content */}
      <main>
        <Outlet />
      </main>
      {/* <p>lorem400</p> */}
      {/* footer */}
      <Footer />
    </div>
  )
}

export default UserLayout
