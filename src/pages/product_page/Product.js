import React,{Component} from 'react'
import {Row, Col, Image, ListGroup, Card} from 'react-bootstrap';
import './Product.css';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getBookbyId} from '../../actions/book_actions'
import {addToCart,removeFromCart} from '../../actions/cart_actions'
import {showDialog} from '../../actions/dialog_actions'

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
      }; 
     
     componentDidMount(){

      if(this.props.cart.bookCart.filter((item)=>item._id===this.props.book._id).length===this.props.book.countInStock){
        this.props.showDialog('Maximum no of items in stock reached!')
       }
     }
       

    render(){
      let disabled=false
      let quantity=this.props.cart.bookCart.filter((item)=>item._id===this.props.book._id).length
      if(quantity===this.props.book.countInStock){
        disabled=true
      }
      
    return (
        <Row className="product-container" style={{overflowX:"hidden"}}>
        <Col md={6} xs={12} style={{display:"flex",justifyContent:"center"}}>
          <Image src={this.state.selectedImage?this.state.selectedImage:this.props.book.image[0]} alt={this.props.book.name} className="big-image" />
        </Col>
        <Col md={3} xs={6}>
          <Card style={{margin:"20px"}}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3 style={{fontWeight:"800"}}>{this.props.book.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item variant='flush'>
            <div className="images">
                    {this.props.book.image.map((x) => (
                      <div key={x} onClick={() => this.changeImage(x)} className="image-container">
                          <img src={x} alt="product" className="image" />
                      </div>
                    ))}
                  </div>
            </ListGroup.Item>
           
            <ListGroup.Item><span className="product-heading">Price:</span> Rs.{this.props.book.price}</ListGroup.Item>
            <ListGroup.Item>
            <span className="product-heading"> Description:</span> {this.props.book.description}
            </ListGroup.Item>
            <ListGroup.Item>
            <span className="product-heading"> Author:</span> {this.props.book.author}
            </ListGroup.Item>
            <ListGroup.Item>
            <span className="product-heading"> Publisher:</span> {this.props.book.publisher}
            </ListGroup.Item>
            <ListGroup.Item style={{display:"flex",justifyContent:"space-between" }}>
            <span className="product-heading"> Edition:  {this.props.book.edition} </span>  <span className="product-heading"> Weight:  {this.props.book.weight}gms</span> 
            </ListGroup.Item>
            <ListGroup.Item style={{display:"flex",justifyContent:"space-between" }}>
                    <span className="product-heading">Subject: {(this.props.book.subject).charAt(0).toUpperCase()+(this.props.book.subject).substring(1)}</span>  <span className="product-heading">Course: {this.props.book.course}</span> <span className="product-heading">Year: {this.props.book.year}</span>
            </ListGroup.Item>
          </ListGroup>
          </Card>
        </Col>
        <Col md={3} xs={6} >
          <Card style={{margin:"20px"}}>
            <ListGroup variant='flush'>
            <ListGroup.Item>
            <span className="product-heading">Total Price: </span> Rs. {this.props.book.price*quantity}
            </ListGroup.Item>

              <ListGroup.Item>
              <span className="product-heading"> Status: </span>   {this.props.book.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
              </ListGroup.Item>

              {this.props.book.countInStock > 0 && (
                <ListGroup.Item>
                   <span className="product-heading"> Qty: {quantity} </span> 
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                { quantity===0?(<button
                  
                  onClick={()=>this.props.addToCart(this.props.book)}
                  className="ac-btn"
                  disabled={this.props.book.countInStock === 0}
                  
                >
                  Add To Cart
                </button>):(
                  <div style={{display:"flex",justifyContent:"space-evenly"}}>
                    <button
                  onClick={()=>this.props.addToCart(this.props.book)}
                  disabled={disabled}
                  className="cc-btn"
                >
                  +
                </button>
               
                    <button
                  
                  onClick={()=>this.props.removeFromCart(this.props.book)}
                  className="cc-btn"
                >
                  -
                </button>
                  </div>
                 
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{margin:"20px"}}>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <h3 style={{fontWeight:"800"}}>SELLER INFORMATION: </h3>
              </ListGroup.Item>
              <ListGroup.Item>
              <span className="product-heading"> Name:  </span>{this.props.book.seller.name} 
              </ListGroup.Item>
              <ListGroup.Item>
              <span className="product-heading"> Contact Info:  </span>{this.props.book.seller.email}, +91-{this.props.book.seller.phone}
              </ListGroup.Item>
              <ListGroup.Item>
              <span className="product-heading"> Address:  </span>{this.props.book.seller.address} 
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
    getBookbyId,
    showDialog
})(withRouter(Product));

