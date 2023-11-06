"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer';
import useSWR from 'swr'
import { useSession } from 'next-auth/react';
import Products from '@/components/products/Products';

export default function Home() {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://dummyjson.com/products', fetcher);
  const session = useSession();
  console.log( session)
  return (
    <main className={styles.main}>
        <Products/>
    </main> 
  )
}
