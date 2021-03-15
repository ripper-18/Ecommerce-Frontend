import React, { useEffect, Component } from 'react'
import MainCarousel from './MainCarousel'
import Filters from './Filters'
import Filters2 from './Filters2'
import Products from './Products'
import Testimonial from './Testimonial'
import { Row, Col, Container } from 'react-bootstrap';
import cross from '../../assets/cross.svg'
import cx from "classnames"
import styles from './MainPage.module.css'
import CourseCard from './CourseCard'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactGA from 'react-ga';
class MainPage extends Component {
    state = {
        isSideFilterOpen: false,
        filters: {
            year: [],
            course: [],
            hand: []
        },
        sortValue: 0,
        size: 0,
        show_all: false,



    };

    setFilters = (key, value, insert) => {
        if (insert) {

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


    updateDimensions = () => {
        if (window.innerWidth < 1150) {
            this.setState({
                ...this.state,
                size: 3
            })
        }
        else {
            this.setState({
                ...this.state,
                size: 2
            })
        }
    };

    updateProdsSize = (n) => {
        this.setState({
            ...this.state,
            prods_num: n
        })
    }
    componentDidMount() {
        ReactGA.initialize('UA-192149269-1'); // add your tracking id here.
        ReactGA.pageview('/homepage');
        if (window.innerWidth < 1150) {
            this.setState({
                ...this.state,
                size: 3,

            })
        }
        else {
            this.setState({
                ...this.state,
                size: 2,

            })
        }
        window.addEventListener('resize', this.updateDimensions);
    }


    render() {
        return (
            <div>

                <div className={styles.main_carousel}>
                    <MainCarousel></MainCarousel>
                </div>
                <h1 style={{ textAlign: 'center' }} > Find Books By Courses</h1>
                <div className={styles.courses_div} >

                    <CourseCard name='Bms' />
                    <CourseCard name='BcomH' />
                    <CourseCard name='BcomP' />
                    <CourseCard name='BaHEco' />
                    <CourseCard name='BaHEng' />
                    <CourseCard name='BaHPsy' />
                    <CourseCard name='Shivdas' />
                    <CourseCard name='BscHMat' />

                </div>

                <div className={styles.containerWrap}>

                    <Row >
                        <Col
                            sm={12}
                            md={this.state.size}
                            className="d-none d-md-block px-4 pl-md-2"
                            style={{ borderRight: "1px solid #edebef" }}
                        >
                            <Filters
                                setSortValue={this.setSortValue}
                                setFilters={this.setFilters} />
                        </Col>
                        <Col
                            className="bg-white" sm={12} md={this.state.size === 2 ? 10 : 9}>
                            <h1 style={{ textAlign: 'center' }} > Best Place to Buy Books </h1>
                            <div style={{ borderTop: "1px solid #edebef" }}>
                                <Products
                                    filters={this.state.filters}
                                    sortValue={this.state.sortValue}
                                    handleSideFilterOpen={
                                        this.handleSideFilterOpen
                                    }
                                    show_all={this.state.show_all}
                                    updateProdsSize={this.updateProdsSize}
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
                            style={{ position: "relative", top: "50px" }}
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
                            <Filters2
                                setSortValue={this.setSortValue}
                                setFilters={this.setFilters}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.testimonial_div}>
                    <Testimonial></Testimonial>
                </div>

            </div >


        )
    }
}

export default MainPage
