import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react';

export const metadata = {
  title: 'Contact page',
  description: 'Contact PAGE ..',
}

const Contact = () => {  
  return (
    <div>
      <a href="#footer"> Go to footer</a>
      <div className="contact">
        <i className="fa-solid fa-house"></i>
        <h1>contact page </h1>
        <img src="./1.png" alt="loading..." />
      </div>
    </div>
  )
}

export default Contact