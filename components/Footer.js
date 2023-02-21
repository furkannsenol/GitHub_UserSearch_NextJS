import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
            <footer className={` ${styles.footer_main} `} >
                <div className={"text-center p-3 bg-dark text-light"}>
                    © 2023 Created by
                    <em className={'text-light text-italic'}> Furkan Şenol</em>
                </div>
            </footer>
    )
}

export default Footer