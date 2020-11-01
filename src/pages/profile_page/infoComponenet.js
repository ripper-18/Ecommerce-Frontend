import React from 'react';
import styles from "./info.css";
import CreateIcon from '@material-ui/icons/Create';

function Information(props) {
    let k = props.password.length;
    let str = "*";
    str = str.repeat(k);
    console.log(k);
    return (
        <div className='info_container'>
            <h2><b>Email: </b> {props.email}</h2>
            <h2><b>Phone: </b> {props.phone}</h2>
            <h2><b>Password: </b> {str} <a href="#"><CreateIcon /></a></h2>
            <h2><b>Gender: </b> {props.gender}</h2>
        </div>
    );

}

export default Information;