import React, { Component } from 'react'
import styles from "./AdminInfo.module.css"

class AdminInfo extends Component {
    render() {
        return (
            <div className={styles.main}>
            <div className={styles.hero}>
                <h1>Congrats!</h1>
            </div>
            <div className={styles.heroMobile}>
                <h1>Congrats!</h1>

            </div>

            <div className={styles.container}>

               <h1>
               You are now successfully a Seller with DUBookX!
               </h1>
               <br/>

               <h2>
               Head over to your seller portal <a href= "https://du-book-admin-panel.herokuapp.com/" target="_blank">here !</a>
               </h2>
               <br/>

               <h2>
               All you have to do is login with your credentials on the seller portal and you're done! You will get updated whenever your books get sold.
               </h2>
               <br/>

               <h2>
               You can get in contact with us with the contact options in footer in case of any queries. 
               </h2>
               <br/>



            </div>

        </div>

        );
    }
}

export default AdminInfo;