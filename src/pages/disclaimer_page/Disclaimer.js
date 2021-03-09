import React, { useEffect } from 'react'
import styles from './disclaimer.module.css'




const Disclaimer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <h1>Disclaimer</h1>
            </div>
            <div className={styles.heroMobile}>
                <h1>Disclaimer</h1>

            </div>

            <div className={styles.container}>

                <p>
                <h1>Seller Disclaimer</h1>

Welcome To DUbookX!<br/>
You might be wondering, why should I trust DUbookX with my product and what benefits could I get by using them as my medium for sale. We understand your concerns
 and have set down specific terms and conditions to protect the interests of our sellers.<br/> Please read these conditions carefully before using the duboox.com
website. By using the duboox.com website, you signify your agreement to be bound by these conditions:<br/><br/>

<h2>Your account:</h2><br/>
If you use the website, you are responsible for maintaining the confidentiality of your account and password and for 
restricting access to your computer to prevent unauthorised access to your account. You agree to accept responsibility
 for all activities that occur under your account or password. You should take all necessary steps to ensure that the 
 password is kept confidential and secure and should inform us immediately if you have any reason to believe that your password 
 has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorised manner. Please ensure 
 that the details you provide us with are correct and complete and inform us immediately of any changes to the information that you
provided when registering. dubookx.com reserves the right to refuse access to the website, terminate accounts, remove or edit content
at any time without notice to you.

<br/>
<br/>
<h2>Privacy:</h2><br/>
The personal information / data provided to us by you during the course of usage of dubookx.com will be treated as strictly 
confidential and in accordance with the applicable laws and regulations. If you object to your information being transferred or used, please do not use the website.

<br/><br/>
<h2>Access to dubookx.com :</h2><br/>
We will do our utmost to ensure that availability of the website will be uninterrupted and that transmissions will be error-free. However, due to the nature of the Internet, this cannot be guaranteed. Also, your access to the website may also be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services at any time without prior notice. We will attempt to limit the frequency and duration of any such suspension or restriction.
<br/>
<br/>
The Process:<br/>
A. If you're interested in selling your books at dubookx.com, you will first have to register yourself on our website. Only basic personal 
information and details about the book(s) will be required to be given.<br/>
B. You will be contacted by DUbookX regarding the price/condition of the book(s).<br/>
C. The book will be put up for sale on the website after all necessary details have been filled and approved. <br/>
D.  If your book is sold, you will be notified and your book shall be picked up from your given location within 48 hours. During this time
 period you will be required to pack the book in a small box/bubble wrap/tamper proof courier bag, which should be sealed properly. Our courier
  partner has the right to deny the acceptance of any order in case of inefficient packaging.<br/>
E. You will also be required to print out 2 documents which will be mailed to you by DUbookX. The first page will be the ‘Product Label’ which 
has to be taped to the package properly before sending out for delivery and the other will be a ‘Manifest’ which has to be signed by the delivery 
man picking it up. This will ensure that the book has been safely dispatched by you.<br/>
F. After the acceptance of the book, the liability of safe delivery will lie in the hands of DUbookX.<br/>
G. The book shall reach the buyer within 7-8 days. Only after the buyer confirms the order, you shall be wired the agreed upon amount by your preferred mode of payment.<br/>
H. If the customer decides to return the book due to some issue in the quality of the book, the seller shall receive their book back and will also have
 to refund DUbookX its money back.<br/>
I. If the book uploaded for sale on the website becomes unavailable, it is the seller’s responsibility to inform DUbookX regarding such unavailability.<br/>


<br/>
<h2>Your Conduct:</h2><br/>
You must not use the website in any way that causes, or is likely to cause, the website or access to it to be interrupted, damaged or impaired in any way. You understand that you, and not dubookx.com, are responsible for all electronic communications and content sent from your computer to us and you must use the website for lawful purposes only. You must not use the website for any of the following:
for fraudulent purposes, or in connection with a criminal offense or other unlawful activity
to send, use or reuse any material that does not belong to you; or is illegal, offensive (including but not limited to material that is sexually explicit content or which promotes racism, bigotry, hatred or physical harm), deceptive, misleading, abusive, indecent, harassing, blasphemous, defamatory, libelous, obscene, pornographic, pedophilic or menacing; ethnically objectionable, disparaging or in breach of copyright, trademark, confidentiality, privacy or any other proprietary information or right; or is otherwise injurious to third parties; or relates to or promotes money laundering or gambling; or is harmful to minors in any way; or impersonates another person; or threatens the unity, integrity, security or sovereignty of India or friendly relations with foreign States; or objectionable or otherwise unlawful in any manner whatsoever; or which consists of or contains software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any "spam to cause annoyance, inconvenience or needless anxiety.”

<br/>
<br/>
                    DUbookX is a one stop solution to your problems!

                    <br/><br/>
                </p>


            </div>

        </div>
    )
}

export default Disclaimer
