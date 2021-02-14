import React, { useEffect, Component } from 'react'

import Filters from './Filters'
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

class MainPage extends Component {
    state = {
        filters: {
            year: [],
            course: [],
            hand: []
        },
        sortValue: 0
    };
    componentDidMount = async () => {
        console.log(this.props)

        await this.setState({
            ...this.state,
            filters: {
                ...this.state.filters,
                course: [...this.state.filters["course"], this.props.match.params.course],
                // year: [...this.state.filters["year"], this.props.match.params.year],
            },
        });
        console.log(this.state.filters)
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
            console.log(this.state.filters)
            this.props.getBooksByKeyword(this.state.filters, '')


        }
    }

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


    render() {

        let { books } = this.props.book
        let { sortValue } = this.state;
        let display = books;
        //console.log(display)
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

                    <Row>

                        <Col
                            sm={12}
                            md={2}
                            className="d-none d-md-block px-4 pl-md-2"
                            style={{ borderRight: "1px solid #edebef" }}
                        >
                            <Filters
                                setSortValue={this.setSortValue}
                                setFilters={this.setFilters} />
                        </Col>

                        <Col
                            className="bg-white" sm={12} md={10}>
                            <br></br>
                            <div className={(styles.dabba)}>


                                <div style={{ flex: "6" }}>
                                    <h1 style={{ textAlign: 'center' }} > Best Place to Buy Books </h1>

                                </div>


                            </div>


                            <div className="main">
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
