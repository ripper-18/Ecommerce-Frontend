import React,{useEffect,Component} from 'react'
import MainCarousel from './MainCarousel'
import Filters from './Filters'
import Products from './Products'
import {Row, Col} from 'react-bootstrap';
import './MainPage.css'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/auth_actions'

class MainPage extends Component {
    state = {
        filters: {
           year:[],
           course:[],
           subject:[]        },
        sortValue: 0,
        

    };

    setFilters = (key, value, insert) => {
        if (insert) {
            console.log(value)
            this.setState({
                ...this.state,
                filters: {
                    ...this.state.filters,
                    [key]: [...this.state.filters[key], value],
                },
            });
        } else {
            this.setState({
                ...this.state,
                filters: {
                    ...this.state.filters,
                    [key]: this.state.filters[key].filter((el) => el !== value),
                },
            });
        }
    };

    setSortValue = (value) => {
        this.setState({
            ...this.state,
            sortValue: value,
        });
    };

    render(){
    return (
        <div>

            <MainCarousel></MainCarousel>
            <Row>
                <Col xs="3">
                   <Filters
                   setSortValue={this.setSortValue}
                   setFilters={this.setFilters}/>
                </Col>
                <Col xs="9">
                <h1 style={{textAlign : 'center'}}> Best Place to Buy Books </h1>
                <div  className="main">
                        <Products
                        filters={this.state.filters}
                        sortValue={this.state.sortValue}
                        ></Products>
                </div>
                </Col>

            </Row>

        </div>

        
    )}
}

export default MainPage
