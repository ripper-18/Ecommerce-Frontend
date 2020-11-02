import React,{useEffect} from 'react'
import MainCarousel from './MainCarousel'
import Filters from './Filters'
import Products from './Products'
import {Row, Col} from 'react-bootstrap';
import './MainPage.css'
import {connect} from 'react-redux'

function MainPage() {

    useEffect(()=>{
        console.log("main")
    })

    return (
        <div>

            <MainCarousel></MainCarousel>
            <Row>
                <Col xs="3">
                   <Filters/>
                </Col>
                <Col xs="9">
                <h1 style={{textAlign : 'center'}}> Best Place to Buy Books </h1>
                <div  className="main">
                    <div className="main-row">
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>
     
                    </div>
                </div>
                <div  className="main">
                    <div className="main-row">
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>


                    </div>
                </div>
                </Col>

            </Row>

        </div>

        
    )
}

export default MainPage
