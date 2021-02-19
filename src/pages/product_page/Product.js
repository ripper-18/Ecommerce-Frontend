import React, { Component } from 'react'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import styles from './Product.module.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getBookbyId, getBooksByKeyword2 } from '../../actions/book_actions'
import { addToCart, removeFromCart } from '../../actions/cart_actions'
import { showDialog } from '../../actions/dialog_actions'
import Lazyload from 'react-lazyload'
import ProductItem from '../../pages/main_page/ProductItem'

class Product extends Component {
  state = {
    id: "",
    selectedImage: "",
    open: false,

  }

  changeImage = (image) => {
    this.setState({
      ...this.state,
      selectedImage: image
    })
  };
  handleRemove = (elem) => {
    this.props.removeFromCart(elem)
  }
  handleAdd = (elem) => {
    let x = this.props.cart.bookCart.filter((item) => item._id === elem._id).length
    if (x === elem.countInStock - 1) {
      this.props.showDialog('Sorry! Maximum Count In Stock Reached')
      return
    }
    this.props.addToCart(elem)
  }
  componentDidMount() {

    if (this.props.cart.bookCart.filter((item) => item._id === this.props.book._id).length === this.props.book.countInStock) {
      this.props.showDialog('Maximum no of items in stock reached!')
    }

    console.log(this.props.suggest.length)

  }


  render() {
    console.log(this.props.book)
    let disabled = false
    let quantity = this.props.cart.bookCart.filter((item) => item._id === this.props.book._id).length
    if (quantity === this.props.book.countInStock) {
      disabled = true
    }

    return (
      <>
        <Row className={styles['product-container']} style={{ overflowX: "hidden" }}>
          <Col md={6} xs={12} style={{ display: "flex", flexDirection: "column" }}>
            <Lazyload offset={200} height={200} className={styles.Main_Image} style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
              <img src={this.state.selectedImage ? this.state.selectedImage : this.props.book.image[0]} alt={this.props.book.name} className={styles["big-image"]} />
            </Lazyload>


            <div className={styles["images"]}>
              {this.props.book.image.map((x) => (
                <Lazyload offset={200} height={200}>
                  <div key={x} onClick={() => this.changeImage(x)} className={styles["image-container"]}>
                    <img src={x} alt="product" className={styles["image"]} />
                  </div>
                </Lazyload>
              ))}
            </div>
          </Col>
          <Col md={6} xs={12}>



            <h1 style={{ fontWeight: "800", fontSize: "50px" }}>{this.props.book.name}</h1>
            <h3 className={styles.Product_description}> {this.props.book.description}</h3>



            <h1 className={styles.Product_Price}>Rs.  {this.props.book.price}</h1>
            <p style={{ color: "#273c75", fontWeight: "700" }}>(Inclusive of all taxes)</p>
            <h3 className={styles.Product_Author}> Author: {this.props.book.author}</h3>

            <div className={styles.Small_info}>
              <span className={styles.Small_info_indi}> Edition:  {this.props.book.edition} </span>
              <span className={styles.Small_info_indi}>Subject: {(this.props.book.subject).charAt(0).toUpperCase() + (this.props.book.subject).substring(1)}</span>
              <span className={styles.Small_info_indi}>Course: {this.props.book.course}</span>
              <span className={styles.Small_info_indi}>Year: {this.props.book.year}</span>
              <span className={styles.Small_info_indi}>Condition: {this.props.book.hand == 1 ? "New" : "Second Hand"}</span>
            </div>



            <div className={styles.Quantity_Container}>
              <h3 className={styles["product-heading"]}> Qty: {quantity} </h3>
            </div>

            <div className={styles.Buttons_Container}>
              {quantity === 0 ? (<button

                onClick={() => this.props.addToCart(this.props.book)}
                className={styles["ac-btn"]}
                disabled={this.props.book.countInStock === 0}

              >
                Add To Cart
              </button>) : (
                  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <button
                      onClick={() => this.handleAdd(this.props.book)}
                      disabled={disabled}
                      className={styles["cc-btn"]}
                    >
                      +
                </button>

                    <button

                      onClick={() => this.handleRemove(this.props.book)}
                      disabled={quantity === 0 ? true : false}
                      className={styles["cc-btn"]}
                    >
                      -
                </button>
                  </div>

                )}
            </div>

            <span > Weight:  {this.props.book.weight}kgs</span>
            <h4> Publisher: {this.props.book.publisher}</h4>


<br/>
<br/>
<br/>
              
            <div className={styles.Buttons_Container}>
            <a href="https://linktr.ee/DUbookX">
              <button
                className={styles["ac-btn"]}
              >
                Want a second hand option for this book?
              </button>
              </a>
            </div>


          </Col>

        </Row>
        <Row style={{ display: this.state.open ? 'initial' : 'none' }} className={styles.products_page}>


          <div className={styles.all_products} style={{ justifyContent: "center" }}>
            {
              this.props.suggest.filter((b) => (b.isLive === true) && (b._id !== this.props.book._id)).map((book, index) => (
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

        </Row>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  book: state.book.currentBook,
  cart: state.cart,
  auth: state.auth,
  suggest: state.book.suggestBooks
});

export default connect(mapStateToProps, {

  addToCart,
  removeFromCart,
  getBookbyId,
  getBooksByKeyword2,
  showDialog
})(withRouter(Product));

