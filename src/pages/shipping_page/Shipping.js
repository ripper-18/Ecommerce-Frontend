import React, { useEffect } from 'react'
import styles from './shipping.module.css'




const Disclaimer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <h1>Shipping Policy</h1>
            </div>
            <div className={styles.heroMobile}>
                <h1>Shipping Policy</h1>

            </div>

            <div className={styles.container}>

                <p>
                We deliver our books through our shipping partners.

                </p>
                <br />
                <p>
                    The standard delivery will take 2-7 business days depending on the region of delivery. 
                </p>
                <br />
                <p>
                The customer will have to pay the additional charges of shipping, which will vary from region to region. The delivery might take longer due to some unforeseen circumstances not under the control of DUbookX.

                </p>
            </div>

        </div>
    )
}

export default Disclaimer
