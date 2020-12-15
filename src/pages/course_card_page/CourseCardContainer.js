import React, { useEffect } from 'react'
import styles from '../disclaimer_page/disclaimer.module.css'




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
                    Prior to consuming any products from My Muscle Meal ltd it is important to note that we make a variety of dishes in our kitchen. We cannot guarantee any products sold on our website are completely free from any allergen such as eggs, fish, milk, peanuts, sesame, crustaceans, soy, nuts, tree nuts, gluten, lupin and sulphites.
                </p>
                <br />
                <p>
                    If you have a serious allergy it is advisable you do not purchase meals from My Muscle Meal as we cannot guarantee the complete absence of these ingredients from our products.
                </p>
                <br />
                <p>
                    Although we purchase all our chicken, meat and fish boneless, our supplier cannot guarantee the 100% removal of all bones. So, we do advise caution when consuming the meals as they MAY contain bones.
                </p>
                <br />
                <p>
                    Our meals are made fresh daily in our own kitchen. We always aim for precision, but please allow for a +/- 5% discrepancy in the actual weight of the meals, and reasonable variance in ingredient and nutrient quantities.
                </p>


            </div>

        </div>
    )
}

export default Disclaimer
// import React, { Component } from 'react';
// import styles from './CourseContainer.module.css';
// import CourseCard from './Course_card';

// const CourseContainer = (props) => {
//     return(
//         <div styles={{color:"black"}}>Hello</div>
//     )

// }



// export default CourseContainer;