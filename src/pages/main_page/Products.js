import React, { Component } from 'react'
import styles from './Products.module.css'
import cx from 'classnames'
import ProductItem from './ProductItem'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getBooksByKeyword } from '../../actions/book_actions'
import { addToCart, removeFromCart } from '../../actions/cart_actions'
import { logoutUser } from '../../actions/auth_actions'
import { showloader, hideloader } from '../../actions/isLoading_actions'
import filterIcon from '../../assets/filter_icon.svg'
import Loader from '../../components/Loader/Loader'

class Products extends Component {
    state = {
        filters: {
            year: [],
            hand: [],
            course: []
        },
        show_all: false

    }

    componentDidMount() {
        // this.props.logoutUser(this.props.history)
        
        const query = new URLSearchParams(this.props.location.search);
        let token = query.get('search')
        // console.log(token)//123
        if (token === null) {
            token = ''
        }

        this.props.getBooksByKeyword(this.props.filters, token)
        // console.log(this.props)
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if (prevProps.filters !== this.props.filters) {
            const query = new URLSearchParams(this.props.location.search);
            let token = query.get('search')
            //  console.log(token)//123
            if (token === null) {
                token = ''
            }
            console.log(this.props.filters)
            this.props.getBooksByKeyword(this.props.filters, token);
        }


    }

    updateShowAll = () => {
        this.setState({
            ...this.state,
            show_all: true
        })

    }


    render() {

        let { books } = this.props.book
        let { sortValue } = this.props;
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
            <Row className={styles.product_page}>
                <div className={cx(styles.filterSideNav, " d-md-none py-1 ")}>
                    <span style={{ fontSize: "20px", cursor: "pointer" }} onClick={this.props.handleSideFilterOpen}>FILTERS</span>
                    <button
                        className={styles.filterSideNavBtn}
                        onClick={this.props.handleSideFilterOpen}
                    >
                        <div
                            className={styles.filterIcon}
                            style={{
                                backgroundImage: `url(${filterIcon})`,
                            }}
                        />
                    </button>
                </div>
                <div className={styles.all_products}>
                    {

                        display.slice(0, this.state.show_all ? display.length : 8).map((book, index) => (
                            <Col className={styles.product_card}
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

                <button className={this.state.show_all || display.length <= 8 ? styles.hide_button : styles.show_all_button} onClick={this.updateShowAll}>Show All Books</button>
            </Row>

        )
    }
}
const mapStateToProps = (state) => ({
    book: state.book,
    cart: state.cart,
    auth: state.auth,
    loader: state.load
});

export default connect(mapStateToProps, {
    addToCart,
    removeFromCart,
    getBooksByKeyword,
    logoutUser,
    showloader,
    hideloader
})(withRouter(Products));
