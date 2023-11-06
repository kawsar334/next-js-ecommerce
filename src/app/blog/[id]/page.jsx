
"use client"
import styles from "../../../styles/products.module.css"
import { notFound, useParams, } from 'next/navigation'
import React from 'react'

const getPost = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: "no-store" });

        if (!res.ok) {
            return notFound()
        }
        return res.json()

    } catch (err) {
        if (err) {

            console.log(err)
        }

    }
}




const page = async () => {

    const id = useParams().id;
    const data = await getPost(id);

    return (
        <div className={styles.details}>
            <div key={data.id} className={styles.detailswrapper}>
                <img src={data?.images[0]} alt="loading..." className={styles.detailsImg} />
                <h1 className={styles.title}>{data?.title}</h1>
                <p className={styles.desc}>{data?.description}</p>
               
            </div>

        </div>
    )
}

export default page;