import React, { useEffect, Component } from 'react'

import Filters from './Filters'
import Filters2 from './Filters2'
import styles2 from '../main_page/Products.module.css'
import ProductItem from '../../pages/main_page/ProductItem'
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/auth_actions'
import cross from '../../assets/cross.svg'
import cx from "classnames"
import styles from './pwc.module.css'
import { withRouter } from 'react-router-dom'
import { getBooksByKeyword } from '../../actions/book_actions'
import { addToCart, removeFromCart } from '../../actions/cart_actions'
import filterIcon from '../../assets/filter_icon.svg'

class MainPage extends Component {
    state = {
        isSideFilterOpen: false,
        size: 2,
        show_all: false,
        filters: {
            year: [],
            course: [],
            hand: []
        },
        sortValue: 0
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


    componentDidMount = async () => {
        console.log('Hello');
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


        await this.setState({
            ...this.state,
            filters: {
                ...this.state.filters,
                course: [...this.state.filters["course"], this.props.match.params.course],
                // year: [...this.state.filters["year"], this.props.match.params.year],
            },
        });

        this.props.getBooksByKeyword(this.state.filters, '')

    }
    componentDidUpdate = async (prevProps, prevState) => {
        if (prevProps.match.params.course !== this.props.match.params.course || prevState.filters !== this.state.filters) {
            // await this.setState({
            //     ...this.state,
            //     filters: {
            //         ...this.state.filters,
            //         course: [...this.state.filters["course"], this.props.match.params.course],
            //         // year: [...this.state.filters["year"], this.props.match.params.year],
            //     },
            // });

            this.props.getBooksByKeyword(this.state.filters, '')


        }
    }

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


    render() {

        let { books } = this.props.book
        let { sortValue } = this.state;
        let display = books;

        if (sortValue === "0") {
            display = books.sort((a, b) => a._id - b._id);
        } else if (sortValue === "1") {
            display = books.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === "2") {
            display = books.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortValue === "3") {
            display = books.sort((a, b) => a.price - b.price);
        }
        else if (sortValue === "4") {
            display = books.sort((a, b) => b.price - a.price);
        }
        display = books.filter((b) => b.isLive === true)
        return (
            <div>


                <div className={styles.containerWrap}>

                    {(this.props.match.params.course === 'BaHPsy' || this.props.match.params.course === 'BaHEco' || this.props.match.params.course === 'BscHMat') ?
                        <div>
                            <img src="" alt="No image available" width="600px" height="400px"></img>

                        </div> : <div />
                    }


                    <Row>

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
                            <br></br>
                            <div className={(styles.dabba)}>


                                <div style={{ flex: "6" }}>
                                    <h1 style={{ textAlign: 'center' }} > Best Place to Buy Books </h1>

                                </div>


                            </div>


                            <div className="main">
                                <div className={cx(styles.filterSideNav, " d-md-none py-1 ")}>
                                    <span style={{ fontSize: "20px", cursor: "pointer" }} onClick={this.handleSideFilterOpen}>FILTERS</span>
                                    <button
                                        className={styles.filterSideNavBtn}
                                        onClick={this.handleSideFilterOpen}
                                    >
                                        <div
                                            className={styles.filterIcon}
                                            style={{
                                                backgroundImage: `url(${filterIcon})`,
                                            }}
                                        />
                                    </button>
                                </div>
                                <Row className={styles2.products_page}>

                                    <div className={styles2.all_products} style={{ justifyContent: "center" }}>
                                        {
                                            display.map((book, index) => (
                                                <Col className={styles2.product_card}
                                                >

                                                    <ProductItem
                                                        isEditable={true}
                                                        data={book}
                                                        addFunction={this.props.addToCart}
                                                        removeFunction={this.props.removeFromCart}
                                                        container={this.props.cart.bookCart}
                                                    />
                                                </Col>
                                            ))
                                        }

                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <div
                        className={cx(styles.sideFilter, {
                            [styles.sideFilterOpen]: this.state.isSideFilterOpen,
                        })}
                    >
                        <div
                            className="col-12"
                            style={{ position: "relative", top: "50px", background: "2mm solid black" }}
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

            </div>


        )
    }
}
const mapStateToProps = (state) => ({
    book: state.book,
    cart: state.cart,

});

export default connect(mapStateToProps, { getBooksByKeyword, addToCart, removeFromCart })(withRouter(MainPage))
