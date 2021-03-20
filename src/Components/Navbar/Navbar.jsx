import React, { useEffect } from 'react'
import styles from './Navbar.module.css'
import { AiFillGithub } from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Navbar = ({ heading }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className={styles.header} data-aos="fade-down">
            <h1>{heading} <span><AiFillGithub /></span></h1>
        </div>
    )
}
