import React from 'react'
import Slidebar from "../component/sidebar"
import { Outlet } from "react-router-dom"
function Layout() {
  return (
    <div className='flex'>
      <div className='w-1/4  sticky top-0 h-full'>
        {<Slidebar />}
      </div>
      <div className="w-3/4 overflow-x-hidden overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
 