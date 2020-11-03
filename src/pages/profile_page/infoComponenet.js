import React from 'react';
import styles from "./info.css";
import CreateIcon from '@material-ui/icons/Create';

function Information(props) {
  
    return (
        <div className='info_container'>
            <h2><b>Email: </b> {props.email}</h2>
            <h2><b>Phone: </b> {props.phone}</h2>

        </div>
    );

}

export default Information;