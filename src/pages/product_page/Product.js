import React,{Component} from 'react'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap';
import './Product.css';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getBookbyId} from '../../actions/book_actions'
import {addToCart,removeFromCart} from '../../actions/cart_actions'


class Product extends Component {
    state={
        id:"",
        selectedImage:""
    }

    changeImage = (image) => {
        this.setState({
            ...this.state,
            selectedImage:image
        })
        console.log(this.state.selectedImage)
      }; 
     

      componentDidMount(){
          console.log(this.props)
      }

    render(){
    return (
        <Row>
        <Col md={6}>
          <Image src={this.state.selectedImage?this.state.selectedImage:this.props.book.image[0]} alt={this.props.book.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{this.props.book.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
            <ul className="images">
                    {[ ...this.props.book.image].map((x) => (
                      <li key={x}>
                        <button
                          type="button"
                          className="light"
                          onClick={() => this.changeImage(x)}
                        >
                          <Image src={x} alt="product" className="small" fluid/>
                        </button>
                      </li>
                    ))}
                  </ul>
            </ListGroup.Item>
           
            <ListGroup.Item>Price: ${this.props.book.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {this.props.book.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs.{this.props.book.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {this.props.book.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {this.props.book.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                    
                    {this.props.cart.bookCart.filter(
                                    (item) => item._id === this.props.book._id
                                ).length <= 0 ? (
                                        <button
                                        style={{ color: "red" }}
                                        onClick={()=>this.props.addToCart(this.props.book)}
                                    >
                                        {"Add To Cart"}
                                    </button>

                                        
                                    ) : (
                                        <div>
                                         <button
                                            style={{ color: "red" }}
                                            onClick={()=>this.props.removeFromCart(this.props.book)}
                                        >
                                            {"-"}
                                        </button> 

                                        <button button style={{ color: "red" }}>
                                        {
                                            this.props.cart.bookCart.filter(
                                                (item) =>
                                                    item._id ===
                                                    this.props.book._id
                                            ).length
                                        }
                                        </button>

                        { this.props.cart.bookCart.filter(
                            (item) =>
                                item._id ===
                                this.props.book._id
                        ).length < this.props.book.countInStock ? (
                                                <button
                                                    style={{ color: "red" }}
                                                    onClick={()=>this.props.addToCart(this.props.book)}
                                                >
                                                    {"+"}
                                                </button>
                                            ) : (
                                                <span />
                                            )}
                                            </div>
                                    )}
                                           

                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  
                  className='btn-block'
                  type='button'
                  disabled={this.props.book.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    )}
}

const mapStateToProps = (state) => ({
    book: state.book.currentBook,
    cart: state.cart,
    auth:state.auth
});

export default connect(mapStateToProps, {
    
    addToCart,
    removeFromCart,
    getBookbyId
})(withRouter(Product));

