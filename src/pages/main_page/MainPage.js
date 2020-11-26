import React,{useEffect,Component} from 'react'
import MainCarousel from './MainCarousel'
import Filters from './Filters'
import Products from './Products'
import {Row, Col,Container} from 'react-bootstrap';
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/auth_actions'
import cross from '../../assets/cross.svg'
import cx from "classnames"
import styles from './MainPage.module.css'

class MainPage extends Component {
    state = {
        isSideFilterOpen: false,
        filters: {
           year:[],
           course:[],
           subject:[]      
          },
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
    handleSideFilterOpen = () => {
        document.body.style.overflow = "hidden";
        this.setState({
            isSideFilterOpen: true,
        });
    };
    handleSideFilterClose = () => {
        document.body.style.overflow = "initial";
        this.setState({
            isSideFilterOpen: false,
        });
    };

    render(){
    return (
        <div>

            <div className="main-carousel">
                <MainCarousel></MainCarousel>
            </div>
            <div className={styles.containerWrap}>
            
            <Row >
                <Col 
                  sm={12}
                  md={3}
                  className="d-none d-md-block px-4 pl-md-2"
                >
                   <Filters
                   setSortValue={this.setSortValue}
                   setFilters={this.setFilters}/>
                </Col>
                <Col 
                className="bg-white" sm={12} md={9}>
                <h1 style={{textAlign : 'center'}} className="welcome-heading"> Best Place to Buy Books </h1>
                <div  className="main">
                        <Products
                        filters={this.state.filters}
                        sortValue={this.state.sortValue}
                        handleSideFilterOpen={
                            this.handleSideFilterOpen
                        }
                        ></Products>
                </div>
                </Col>
            </Row>
            
            <div
                        className={cx(styles.sideFilter, {
                            [styles.sideFilterOpen]: this.state
                                .isSideFilterOpen,
                        })}
                    >
                        <div
                            className="col-12"
                            style={{ position: "relative",top:"100px" }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                }}
                            >
                                <button
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                    }}
                                    onClick={this.handleSideFilterClose}
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${cross})`,
                                            height: "32px",
                                            width: "32px",
                                        }}
                                    />
                                </button>
                            </div>
                            <Filters
                                setSortValue={this.setSortValue}
                                setFilters={this.setFilters}
                            />
                        </div>
                    </div>
            </div>
            
        </div>

        
    )}
}

export default MainPage
