import React, { useState, useEffect } from 'react'
import styles from './returns.module.css'
import { Link } from "react-router-dom";

const Returns = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <h1>Returns & Cancellation</h1>
            </div>
            <div className={styles.heroMobile}>
                <h1>Returns & Cancellation</h1>

            </div>

            <div className={styles.container}>
            <p>
            You have a wide variety of books to choose from so please order carefully. After placing your order please review your order details and contact us immediately at +91 99538 97446 if a mistake has been made or if you want to cancel your order. We do not give refunds if you simply change your mind, but we may be able to correct any errors in the order process prior to shipment.
If the book you receive is different to what you purchased online, is damaged, or is otherwise not as expected, please contact us immediately on our phone number (+91 99538 97446) or email us at: dubookx@gmail.com to discuss further options. See our Terms of use for more information.

               </p>
            </div>

        </div>
    )
}

export default Returns
