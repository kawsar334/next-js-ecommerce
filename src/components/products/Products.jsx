
import Link from 'next/link';
import React from 'react'
import styles from "../../styles/products.module.css"
import Loader from '../loader/Loader';




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

const Products = async () => {
    const data = await getData();
    return (
        <div className={styles.products} >
          {!data ? <Loader/>:  <div className={styles.productsWrapper}>
                {
                    data?.map((item) => (
                        <Link href={`/blog/${item._id}`} key={item.id} className={styles.product}>
                            <img src={item.images[0]} alt="loading..." className={styles.productImg} />
                            <h1 className={styles.productTitle}>
                                {item.title.slice(0, 15)}...
                            </h1>
                        </Link>
                    ))
                }
            </div>}
        </div>
    )
}

export default Products