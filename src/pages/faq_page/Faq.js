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
                        <h1>Subscription offer - Subscribe & Save</h1>
                    </div>
                    <p className={isCollapseOpen[0] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        The subscribe and save promotion is now live! All new subscribers will receive Rs.300
                        off on their first delivery and all further deliveries until the promotion ends.
                        <br />
                        <br />
                        Our Subscribe & Save program also allows subscribers to access multiple benefits including:
                        <br />
                        <br />
                        - Convenient auto-delivery service
                        <br />
                        - Choose from weekly, fortnightly or monthly subscription models.
                        <br />
                        - Customisation of the menu
                        <br />
                        - Edit and change your order to switch things up for your next delivery.
                        <br />
                        - No lock-in contracts
                        <br />
                        - You can pause or cancel your subscription at any time.
                        <br />
                        - Refer a friend and earn credit
                        <br />
                        - The MYMM Referral Program rewards you for introducing friends to the Meal. Visit your Profile Page to discover your unique referral code and share it with others to get them Rs.300 off their first order and an additional Rs.200 credited to your account.
                        <br />
                        <br />
                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(1)} className={styles.itemHeader}>
                        <h1>How long do the meals last?</h1>
                    </div>
                    <p className={isCollapseOpen[1] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        Fresh meals will last for up to 7-10 days in the fridge from the day of delivery, or up to 12 weeks in the freezer if frozen upon delivery.
                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(2)} className={styles.itemHeader}>
                        <h1>How do I warm up my meals if I don’t have a microwave?	</h1>
                    </div>
                    <p className={isCollapseOpen[2] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        All your meals are tested and tweaked based on how they taste and hold up when heated in the microwave, so this is our recommended heating method.
                        <br />
                        <br />
                        As an alternative, you can transfer your meal from the plastic tray into an oven safe dish and heat in the oven, or heat on the stove in a non-stick frying pan.
                        <br />
                        <br />
                        Please note - our meal containers are microwave safe, but should not be placed in the oven or on the stove.
                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(3)} className={styles.itemHeader}>
                        <h1>Can I change the meals in the plans?</h1>
                    </div>
                    <p className={isCollapseOpen[3] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        Meals in our Fixed Sets cannot be substituted or changed.
                        <br />
                        <br />
                        You are able to swap out the meals in our Weight Loss, Muscle Gain and Performance plans from a range of selected alternatives.
                        <br />
                        <br />
                        If you have specific requirements, we recommend creating your own plan from our Menu Builder page via https://www.mymusclemeal.in/menu
                        <br />
                        <br />
                        Please contact us on 7683005200 or email info@mymm.in if you have allergies or dietary restrictions, and our team can advise you on options available.
                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(4)} className={styles.itemHeader}>
                        <h1>Can I cancel my order?	</h1>
                    </div>
                    <p className={isCollapseOpen[4] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        We use fresh ingredients weekly and cook our meals to order every week. Due to this reason to cancel your order you must notify us within 24 hours of placing the order. Unfortunately, any cancellation requests made after this time cannot be honoured as your meals will already be prepared. Therefore, you will be charged the full amount of the order.
                        <br />
                        <br />
                        Please call us on Please contact us on 7683005200 or email info@mymm.in  if you have any issues.

                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(5)} className={styles.itemHeader}>
                        <h1>What's the deal with vacuum sealing?	</h1>
                    </div>
                    <p className={isCollapseOpen[5] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        Vacuum sealing removes all oxygen from your meals, without introducing anything else into the container.
                        <br /><br />
                        This means no unknown additives are needed, there are no weird tastes from preservatives, and your meals will taste just as good if you eat them the day they’re delivered or if you eat them 7-10 days later!
                        <br /><br />
                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(6)} className={styles.itemHeader}>
                        <h1>Are there any contracts?	</h1>
                    </div>
                    <p className={isCollapseOpen[6] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        We have different options available and you can cancel at any time, please see below;
                        <br /><br />
                        Weekly Subscription: This acts as an automated Direct Debit service. You will receive 1 delivery every week on your allocated day depending on your location.
                        <br /><br />
                        Fortnightly Subscription: This acts as an automated Direct Debit service. You will receive 1 delivery every second week on your allocated day depending on your location.
                        <br /><br />
                        Monthly Subscription: This acts as an automated Direct Debit service. You will receive 1 delivery every fourth week on your allocated day depending on your location.
                        <br /><br />
                        One-Off Order: Order as you please with no subscription

                    </p>
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
                        <h1>How do I pay for my order?	</h1>
                    </div>
                    <p className={isCollapseOpen[8] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        We accept all major Debit Cards/Credit Cards alternatively we take payments via PayPal or paytm
                        <br /><br />
                        To update your payment details, please contact us on 7683005200 or email info@mymm.in for further details.
                        We are available Monday - Saturday between 9am and 6pm.

                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(9)} className={styles.itemHeader}>
                        <h1>Are the containers BPA-free?	</h1>
                    </div>
                    <p className={isCollapseOpen[9] ? styles.itemBodyOpen : styles.itemBodyClose}>

                        Your meal containers and the plastic used for the vacuum seal are BPA-free and microwave safe - no need to worry about nasty chemicals getting into your food!

                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(10)} className={styles.itemHeader}>
                        <h1>Where do you deliver?	</h1>
                    </div>
                    <p className={isCollapseOpen[10] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        Presently, My Muscle Meal has home delivery service areas across Gurgaon. Soon, we will be expanding our operations in more areas.
                    </p>
                </div>
                <div className={styles.item}>
                    <div onClick={() => toggleCollapse(11)} className={styles.itemHeader}>
                        <h1>Do I have to be home for delivery?</h1>
                    </div>
                    <p className={isCollapseOpen[11] ? styles.itemBodyOpen : styles.itemBodyClose}>
                        No - our driver will leave the delivery at the front door if you are not at home.
                        <br /><br />
                        If you have any special delivery instructions please add them to the Additional Info section when placing your order. The food is delivered in a sealed insulated box packed.

                    </p>
                </div>




            </div>

        </div>
    )
}

export default Faq
