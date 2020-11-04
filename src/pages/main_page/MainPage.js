import React,{useEffect} from 'react'
import MainCarousel from './MainCarousel'
import Filters from './Filters'
import Products from './Products'
import {Row, Col} from 'react-bootstrap';
import './MainPage.css'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/auth_actions'

function MainPage() {

    useEffect(()=>{
       // console.log("main")
      
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
                        <Products></Products>
                </div>
                </Col>

            </Row>

        </div>

        
    )
}

export default MainPage
