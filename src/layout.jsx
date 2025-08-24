import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout
