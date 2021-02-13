import React, { useState, useEffect } from 'react'
import styles from './faq.module.css'
import arrow from '../../assets/faq_page/collapse-open.svg'



const Faq = () => {

    const [isCollapseOpen, setisCollapseOpen] = useState([false, false, false, false, false, false, false, false, false, false, false, false,])

    // COLLAPSE FUNCTIONS

    const toggleCollapse = (index) => {
        var array = isCollapseOpen.slice(0)
        array[index] = !array[index]
        setisCollapseOpen(array)
        console.log(index)

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <h1>We Are Here To Help you!</h1>
                <p>Browse through the most frequently asked questions.</p>
            </div>
            <div className={styles.heroMobile}>
                <h1>We Are Here To Help you!</h1>
                <p>Browse through the most frequently asked questions.</p>
            </div>

            <div className={styles.container}>


                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(0)} className={styles.itemHeader}>
                        <h1>Where is DUbookX based?</h1>
                    </div>
                    <p className={isCollapseOpen[0] ? styles.itemBodyOpen : styles.itemBodyClose}>
                    DUbookX is an online platform whose aim is to sell educational books through www.dubookx.com and its social media pages.
                    <br/>
                    <a href="https://instagram.com/dubookx?igshid=11gqp0ki8oor2" target="_blank">Instagram</a>


                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(1)} className={styles.itemHeader}>
                        <h1>Where all can DUbookX deliver its products to?</h1>
                    </div>
                    <p className={isCollapseOpen[1] ? styles.itemBodyOpen : styles.itemBodyClose}>
                    DUbookX ships both firsthand and secondhand books all over India for the cheapest of prices. It's our goal to provide our customers with the best service irrespective of their location.  </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(2)} className={styles.itemHeader}>
                        <h1> How long does it usually take to deliver the books?	</h1>
                    </div>
                    <p className={isCollapseOpen[2] ? styles.itemBodyOpen : styles.itemBodyClose}>
                    DUbookX has a list of reliable shipping partners who ensure that the customers receive their books safely and within 2-7 days.             </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(3)} className={styles.itemHeader}>
                        <h1>What payment methods are accepted?</h1>
                    </div>
                    <p className={isCollapseOpen[3] ? styles.itemBodyOpen : styles.itemBodyClose}>
                    Currently, we are only accepting orders through e-payments (Credit/Debit card, Paytm, GooglePay, PhonePe, UPI and Net Banking). We also accept Cash on Delivery but to use that mode of payment additional charges will be applicable</p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(4)} className={styles.itemHeader}>
                        <h1>What is DUbookX’s return policy?	</h1>
                    </div>
                    <p className={isCollapseOpen[4] ? styles.itemBodyOpen : styles.itemBodyClose}>
                    The books sold through DUbookX are thoroughly scrutinised and we try our best to ensure that our customers receive books of the highest quality. Thus, books can not be returned. However, if the wrong book is delivered or the books are not in a readable condition, books may be returned within 3 days of delivery upon the discretion of DUbookX.</p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(5)} className={styles.itemHeader}>
                        <h1>How can a seller list his/her book(s)?	</h1>
                    </div>
                    <p className={isCollapseOpen[5] ? styles.itemBodyOpen : styles.itemBodyClose}>
                    To sell a book, the seller can fill up the ‘Seller Form’ given on the top right corner of the website and add the details of the book(s) he/she is willing to sell. The seller will then be contacted when DUbookX finds an appropriate buyer for his/her books</p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(6)} className={styles.itemHeader}>
                        <h1>When will the sellers receive their money, if their books are sold?	</h1>
                    </div>
                    <p className={isCollapseOpen[6] ? styles.itemBodyOpen : styles.itemBodyClose}>
                    Once the book has been purchased, it will be delivered to the buyer within 2-7 business days. Once the buyer verifies the receipt of the book, the amount will be remitted through the preferred mode of payment to the seller. If the seller fails to receive their money they can contact us at dubookx@gmail.com.   </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(7)} className={styles.itemHeader}>
                        <h1>How do I cancel my subscription?	</h1>
                    </div>
                    <p className={isCollapseOpen[7] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        Please contact us on 7683005200 or email info@mymm.in for further details.
                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(8)} className={styles.itemHeader}>
                        <h1>As a seller, how much money will I get in return for selling my second hand books?	</h1>
                    </div>
                    <p className={isCollapseOpen[8] ? styles.itemBodyOpen : styles.itemBodyClose}>
                    There is no fixed value and the price can be changed upon the discretion of the seller but after conducting thorough market research, DUbookX strongly recommends you to list your books for 50% of the original MRP of the book. Taking into consideration the depreciation, needs of the buyers and change in edition we have come to this value. So if sellers want to sell their books at the quickest, they should list their books at 50% of the MRP or lower. DUbookX charges a 15% commission on the MRP of the book for its services and thus the seller will receive the list price of the book less 15% of the MRP.
                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(9)} className={styles.itemHeader}>
                        <h1>How to pack the book(s) from my house?	</h1>
                    </div>
                    <p className={isCollapseOpen[9] ? styles.itemBodyOpen : styles.itemBodyClose}>

                    Sellers should have access to a plain tamper proof courier bag or any cardboard box sealed by tape in which the product can be transported safely.
Sellers will have to print and paste the product label on the packaging, which will be sent to their email id by DUbookX, when the selling process is initiated.


                    </p>
                </div>



            </div>

        </div>
    )
}

export default Faq
