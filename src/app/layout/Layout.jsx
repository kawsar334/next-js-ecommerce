import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div >
      
      <Navbar/>
      {children}
      <Footer/>
      </div>
  )
}

export default Layout