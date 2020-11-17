import React from 'react'
import gif from '../../assets/loader/Loadergif.gif'
import './Loader.css'

function Loader() {
    return (
        <div style={{height:"80vh",justifyContent:"center",display:"flex",flexDirection:"column"}}>
           <div className="head">LOADING </div>
            <img className="loader-gif" src={gif} alt={"Loader"}/>
        </div>
    )
}

export default Loader
