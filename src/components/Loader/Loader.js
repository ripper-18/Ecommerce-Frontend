import React from 'react'
import gif from '../../assets/loader/DU (1).gif'
import './Loader.css'

function Loader() {
    return (
        <div style={{height:"80vh",justifyContent:"center",display:"flex"}}>
           
            <img className="loader-gif" src={gif} alt={"Loader"}/>
        </div>
    )
}

export default Loader
