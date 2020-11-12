import React, { useState, useEffect } from 'react'
import styles from './privacy.module.css'




const Container = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <h1>Privacy Policy</h1>
            </div>
            <div className={styles.heroMobile}>
                <h1>Privacy Policy</h1>

            </div>

            <div className={styles.container}>

                <div>
                    <h2>1.	We respect your privacy</h2>
                    <p>DelhiBookX respects your right to privacy and this policy sets out how we collect and manage your personal information, including personal information collected via dubookx.com (“our website”).</p>
                </div>

                <div>
                    <h2>2.	What personal information we collect</h2>
                    <p>We may collect and hold the following types of personal information from you:</p>
                    <ul>
                        <li>name</li>
                        <li>address</li>
                        <li>phone number</li>
                        <li>IP address of the computer you are using</li>
                        <li>information about the good or services you have ordered</li>
                        <li>Information from enquiries you have made</li>
                        <li>communication between us</li>
                        <li>age</li>
                    </ul>
                </div>

                <div>
                    <h2>3.	How we collect your personal information</h2>
                    <p>We collect personal information from you in a variety of ways, including when you interact with us electronically or in person; when you access our website; and when we provide our services to you. We may receive personal information from third parties. If we do, we will protect it as set out in this Privacy Policy.</p>
                </div>
                <div>
                    <h2>4.	Use of your personal information</h2>
                    <p>
                        We need your personal information to provide you with our products and/or services, which includes informing you (such as via direct marketing) about our products and/or services, creating and updating our databases, ensuring compliance with our contractual and other legal obligations to you, conducting trade promotions, and administering our relationship with you by responding to your enquiries (“Main Purposes”).
                    </p>
                    <p>
                        If you do not provide us with your personal information we may not be able to carry out or fulfil some or all of the Main Purposes.

                    </p>
                    <br />
                    <p >
                        How we use your personal information:
                    </p>
                    <ul>
                        <li>We may use your personal information to provide you with information, updates and our services. We also use it to improve our service and to notify you of opportunities that we think you might be interested in. We may use your personal information to improve our products and services and better understand your needs.</li>
                        <li>We may also use your personal information:
                            <ul>
                                <li>for any purpose disclosed to you in an information collection statement at the point where we collect your personal information; or</li>
                                <li>for a purpose related to one of the Main Purposes.</li>
                            </ul>
                        </li>
                        <li>We do not provide your information to third parties, except that we may provide your information to our business partners who assist us in the provision of our services to you.</li>
                        <li>We may contact you by a variety of measures including, but not limited to telephone, email, sms or mail.</li>
                    </ul>
                </div>

                <div>
                    <h2>5.	Disclosure of your personal information overseas</h2>
                    <p>We may disclose your personal information, and by providing personal information to us you consent to us disclosing that information, as follows:</p>
                    <ul>
                        <li>We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this Policy. Personal information is only supplied to a third party when it is required for the delivery of our services.</li>
                        <ul>
                            <li>We may from time to time need to disclose personal information to comply with a legal requirement, such as a law, regulation, court order, subpoena, warrant, in the course of a legal proceeding or in response to a law enforcement agency request.</li>
                            <li>We may also use your personal information to protect the copyright, trademarks, legal rights, property or safety of DuBookX, www.dubookx.com, its customers or third parties.</li>
                            <li>Information that we collect may from time to time be stored, processed in or transferred between parties located in countries outside of India. We use Razorpay, Paypal and other reputed companies as needed, to process your credit card information. You can view their privacy policy at their respective sites. We store your Personal Information in locations outside the direct control of DUBookX for instance, on servers or databases co-located with hosting providers.</li>
                            <li>If there is a change of control in our business or a sale or transfer of business assets, we reserve the right to transfer to the extent permissible at law our user databases, together with any personal information and non-personal information contained in those databases. This information may be disclosed to a potential purchaser under an agreement to maintain confidentiality. We would seek to only disclose information in good faith and where required by any of the above circumstances.</li>
                            <li>By providing us with personal information, you consent to the terms of this Privacy Policy and the types of disclosure covered by this Policy. Where we disclose your personal information to third parties, we will request that the third party follow this Policy regarding handling your personal information.</li>
                        </ul>
                    </ul>
                </div>
                <div>
                    <h2>6.	Security of your personal information</h2>
                    <p>We are committed to ensuring that the information you provide to us is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.</p>
                    <p>The transmission and exchange of information is carried out at your own risk. We cannot guarantee the security of any information that you transmit to us, or receive from us. Although we take measures to safeguard against unauthorised disclosures of information, we cannot assure you that personal information that we collect will not be disclosed in a manner that is inconsistent with this Privacy Policy. We are not liable for any unauthorised access to this information.</p>
                </div>
                <div>
                    <h2>7.	Access to your personal information</h2>
                    <ul>
                        <li>You are solely responsible for ensuring that your personal information is accurate, current, and complete.</li>
                        <li>You may request details of personal information that we hold about you in accordance with the provisions of the Privacy Act. A small administrative fee may be payable for the provision of information. If you would like a copy of the information which we hold about you or believe that any information we hold on you is inaccurate, out of date, incomplete, irrelevant or misleading, please email us at  info@dubookx.com . For your protection, we may require you to confirm your identity before access to your personal information is granted.</li>
                        <li>You may opt out of any future contact from us at any time. You may also ask us to change, correct, destroy, or return any of your personal information that we hold.</li>
                        <li>We reserve the right to refuse to provide you with information that we hold about you, in certain circumstances set out in the Privacy Act.</li>
                    </ul>
                </div>
                <div>
                    <h2>8.	Anonymity</h2>
                    <p>You have the right to request to remain anonymous in any dealings or communications you may have with us, but we may not be able to provide you with goods or services on that basis.</p>
                </div>
                <div>
                    <h2>9.	Complaints and Queries</h2>
                    <p>If you have any complaints or queries about our privacy practices, please feel free to send in details of your complaints to Email:  <a href="mailto:info@dubookx.com ">info@dubookx.com </a> .</p>
                    <p>We take complaints very seriously and will typically respond to any complaints or queries within 3 business days after receiving written notice of your complaint. We may ask you to provide more information to assist us in responding to your complaint or query.</p>
                </div>
                <div>
                    <h2>10.	Changes</h2>
                    <p>Please be aware that we may change this Privacy Policy in the future. We may modify this Policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on our website. We will use reasonable efforts to notify you of any significant changes, but it is your responsibility to check back from time to time to review our Privacy Policy.</p>
                </div>
                <div>
                    <h2>11.	Other Information</h2>
                    <p>When you visit our website we may automatically collect certain technical information such as browser type, operating system, website visited immediately before coming to our site, etc. This information is used in an aggregated manner to analyse how people use our site, such that we can improve our service.</p>
                    <p>We may from time to time use cookies on our website, including to analyse website traffic and help us provide a better website visitor experience. Cookies are very small files which a website uses to identify you when you come back to the site and to store details about your use of the site. Cookies are not malicious programs that access or damage your computer. Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. However, this may prevent you from taking full advantage of our website. In addition, cookies may be used to serve relevant ads to website visitors through third party services such as Google Adwords and Facebook. These ads may appear on this website or other websites you visit.</p>
                    <p>Our site may from time to time have links to other websites not owned or controlled by us. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. We are not responsible for the privacy practises of other such websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personal identifiable information.</p>
                </div>

            </div>

        </div>
    )
}

export default Container
