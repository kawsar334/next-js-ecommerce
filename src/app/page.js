"use client"

import AddItemCart from '@/components/addItemCard/AddItemCart'
import Features from '@/components/features/Features'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import NavTwo from '@/components/navbar/NavTwo'
import Navbar from '@/components/navbar/Navbar'
import Products from '@/components/products/Products'
import Image from 'next/image'

const getData = async () => {
  try {

    const res = await fetch("https://fakestoreapi.com/products", { cache: "no-cache" })
    const data = await res.json();
    return data

  } catch (err) {
    console.log(err)
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <div >
      <Navbar />
      <NavTwo />
      <Hero />
      <Features  data={data}/>
      <Products  data={data}/>
      <AddItemCart/>
      <Footer />
    </div>
  )
}
