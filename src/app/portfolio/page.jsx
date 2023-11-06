"use client"

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { designPortfolio, frontend, fullstack, mobilePortfolio } from '@/utils/data'
import React, { useState } from 'react'

import styles from "../../styles/portfolio.module.css"
import Link from 'next/link'


const type = [
    { name: "frontend", id: 1 },
    { name: "fullstack", id: 3 },

]

const PortFolio = () => {
    const [selectedItem, setSelectedItem] = useState("frontend")
    const [data, setData] = useState(frontend)
    const [active, setActive] = useState("frontend")

    // handling onclick event 
    const handleItems = (operation) => {
        if (operation == "frontend") {
            setData(frontend)
            setActive(frontend)

        }
        else if (operation == "fullstack") {
            setData(fullstack)
            setActive("fullstack")

        }

    }


    return (
        <div className={styles.portfolio}>
            <div className={styles.top} >
                <ul className={styles.top_ul}>
                    {type.map((item) => (
                        <li onClick={() => handleItems(item.name)}  key={item.id} className={active== item.name ?styles.active : styles.top_Li} >{item.name} </li>
                    ))}

                </ul>
            </div>
            <div className={styles.bottom}>
                <div className={styles.items}>
                    {
                        data.map((i) => (
                            <Link href={i?.github} className={styles.item}>
                                <h1 className={styles.title}>{i.title}</h1>
                                <img src={i.img} alt="Loading..." className={styles.img} />
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default PortFolio

