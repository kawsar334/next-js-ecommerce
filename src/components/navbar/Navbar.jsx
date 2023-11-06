import Link from 'next/link'
import React from 'react'
import styles from "../../styles/navbar.module.css"

const Navbar = () => {

    const data = [
        {
            id: 1,
            title: "HOme",
            link: "/",
            icon: "fa-solid fa-house"
        },
        {
            id: 2,
            title: "portfolio",
            link: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            link: "/blog",
        },
        {
            id: 4,
            title: "Register",
            link: "/register",
        },
        {
            id: 5,
            title: "Login",
            link: "/login",
        }, {
            id: 6,
            title: "contact",
            link: "/contact",
        },
    ]
    return (
        <div className={styles.navbar} >
            <div className={styles.navwrapper}>
                <ul className={styles.navlinks}>
                {data?.map((item) => (
                    <li className={styles.navlink} > <Link href={item.link} key={item.id}> {item.title}</Link></li>
                    ))}
                    </ul>
            </div>
        </div>
    )
}

export default Navbar