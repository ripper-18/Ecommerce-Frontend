import { CheckBox } from '@material-ui/icons';
import React from 'react';
import styles from './error404.module.css'
import cx from 'classnames'

const error_func = () => {
    function randomNum() {
        "use strict";
        return Math.floor(Math.random() * 9) + 1;
    }
    var loop1, loop2, loop3, time = 30, i = 0, number, selector3 = document.querySelector('.thirdDigit'), selector2 = document.querySelector('.secondDigit'),
        selector1 = document.querySelector('.firstDigit');

    var sel1 = 4;
    var sel2 = 0;
    var sel3 = 4;
    loop3 = setInterval(function () {
        "use strict";
        if (i > 40) {
            clearInterval(loop3);
            sel3 = 4;
            // selector3.textContent = 4;
        } else {
            sel3 = randomNum();
            i++;
        }
    }, time);
    loop2 = setInterval(function () {
        "use strict";
        if (i > 80) {
            clearInterval(loop2);
            sel2 = 0;
        } else {
            sel2 = randomNum();
            i++;
        }
    }, time);
    loop1 = setInterval(function () {
        "use strict";
        if (i > 100) {
            clearInterval(loop1);
            sel1 = 4;
        } else {
            sel1 = randomNum();
            i++;
        }
    }, time);
    return(

        <div class={styles.error_404}>
            <div class="container-floud_404">"  "
                <div className={cx('col-xs-12','ground-color','text-center')}>
                    <div className={styles.containerError404}>
                        <div class={styles.clip}><div class={styles.shadow}><span className={styles.digit}>{sel1}</span></div></div>
                        <div class={styles.clip}><div class={styles.shadow}><span className={styles.digit}>{sel2}</span></div></div>
                        <div class={styles.clip}><div class={styles.shadow}><span className={styles.digit}>{sel3}</span></div></div>
                        <div class={styles.msg}>OH!<span class={styles.triangle}></span></div>
                    </div>
                    <h2 class="h1">Coudnt find the page you were looking for</h2>
                    <h2 class="h1">But this should not stop you in your quest for finding cheap and good quality books</h2>
                    <h2 class="h1">Head to the home page to find books of your course at the most affordable price</h2>
                </div>
            </div>
        </div>



    );
}

export default error_func;