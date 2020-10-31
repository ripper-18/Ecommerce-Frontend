import React from 'react'
import MainCarousel from './MainCarousel'
import Filters from './Filters'
import {Row, Col} from 'react-bootstrap';
function MainPage() {
    return (
        <div>

            <MainCarousel></MainCarousel>
            <Row>
                <Col xs="3">
                   <Filters/>
                </Col>
                <Col xs="9">
                    to add products
                </Col>

            </Row>

        </div>

        
    )
}

export default MainPage
