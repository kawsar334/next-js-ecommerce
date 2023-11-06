
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Products from '@/components/products/Products';
import Link from 'next/link';
import React from 'react'




const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts/", { cache: "no-store" });
    if (!res.ok) {
      return notFound()
    }
    return res.json()

  } catch (err) {
    console.log(err)
  }
}

export async function generateMetadata({ params }) {
  return {
    title: "Products lists",
  }
}
const Blog = async () => {
  const data = await getData();

  return (
    <>
     <Products/>
    </>
  )
}

export default Blog