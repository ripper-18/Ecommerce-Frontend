import React,{Component} from 'react'
import {Row, Col, Image, ListGroup, Card} from 'react-bootstrap';
import styles from './Product.module.css';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getBookbyId} from '../../actions/book_actions'
import {addToCart,removeFromCart} from '../../actions/cart_actions'
import {showDialog} from '../../actions/dialog_actions'
import Lazyload from 'react-lazyload'

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
        <Row className={styles['product-container']} style={{overflowX:"hidden"}}>
        <Col md={6} xs={12} style={{display:"flex",justifyContent:"center", flexDirection :"column"}}>
          <Lazyload offset={400} className={styles.Main_Image} style={{display:"flex",justifyContent:"center"}}>
          <img src={this.state.selectedImage?this.state.selectedImage:this.props.book.image[0]} alt={this.props.book.name} className={styles["big-image"]} />
          </Lazyload>
         
          <ListGroup.Item variant='flush'>
            <div className={styles["images"]}>
                    {this.props.book.image.map((x) => (
                      <Lazyload offset={400}>
                      <div key={x} onClick={() => this.changeImage(x)} className={styles["image-container"]}>
                        <img src={x} alt="product" className={styles["image"]} />
                      </div>
                      </Lazyload>
                    ))}
                  </div>
          </ListGroup.Item>
        </Col>
        <Col md={6} xs={12}>
          
          
            
            <h1 style={{fontWeight:"800", fontSize: "50px"}}>{this.props.book.name}</h1>
            <h3 className={styles.Product_description}> {this.props.book.description}</h3>
            
           
             
            <h1 className={styles.Product_Price}>Rs.  {this.props.book.price}</h1>
            <p style={{color: "#273c75", fontWeight: "700"}}>(Inclusive of all taxes)</p>
            <h3 className={styles.Product_Author}> Author: {this.props.book.author}</h3>
                  
            <div className={styles.Small_info}>
              <span className={styles.Small_info_indi}> Edition:  {this.props.book.edition} </span>  
              <span className={styles.Small_info_indi}>Subject: {(this.props.book.subject).charAt(0).toUpperCase() + (this.props.book.subject).substring(1)}</span>  
              <span className={styles.Small_info_indi}>Course: {this.props.book.course}</span> 
              <span className={styles.Small_info_indi}>Year: {this.props.book.year}</span>
            </div>

           
                    
            <div className={styles.Quantity_Container}>
            <h3 className={styles["product-heading"]}> Qty: {quantity} </h3> 
            </div>
            
            <div className={styles.Buttons_Container}>
            { quantity===0?(<button
                  
                  onClick={()=>this.props.addToCart(this.props.book)}
                  className={styles["ac-btn"]}
                  disabled={this.props.book.countInStock === 0}
                  
                >
                  Add To Cart
                </button>):(
                  <div style={{display:"flex",justifyContent:"space-evenly"}}>
                    <button
                  onClick={()=>this.props.addToCart(this.props.book)}
                  disabled={disabled}
                  className={styles["cc-btn"]}
                >
                  +
                </button>
               
                    <button
                  
                  onClick={()=>this.props.removeFromCart(this.props.book)}
                  className={styles["cc-btn"]}
                >
                  -
                </button>
                  </div>
                 
                )}
              </div>

            <span > Weight:  {this.props.book.weight}gms</span> 
            <h4> Publisher: {this.props.book.publisher}</h4>

            {/* <span className={styles["product-heading"]}>Total Price: </span> Rs. {this.props.book.price*quantity} */}
            
            <div className = {styles.Seller_Info}>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <h3 style={{fontWeight:"600"}}>Seller Information: </h3>
              </ListGroup.Item>
              <ListGroup.Item>
              <span className={styles["product-heading"]}> Name:  </span>{this.props.book.seller.name} 
              </ListGroup.Item>
              <ListGroup.Item>
              <span className={styles["product-heading"]}> Contact Info:  </span>{this.props.book.seller.email}, +91-{this.props.book.seller.phone}
              </ListGroup.Item>
              <ListGroup.Item>
              <span className={styles["product-heading"]}> Address:  </span>{this.props.book.seller.address} 
              </ListGroup.Item>
            </ListGroup>
            </div>
            

            <div className={styles.OS_Buttons_Container}>

            <button className = {styles.Other_Sellers_Button}>Find Other Sellers </button>
            
            </div>


        </Col>
        {/* <Col md={3} xs={6} >
          <Card style={{margin:"20px"}}>
            <ListGroup variant='flush'>
            <ListGroup.Item>
            <span className={styles["product-heading"]}>Total Price: </span> Rs. {this.props.book.price*quantity}
            </ListGroup.Item>

              <ListGroup.Item>
              <span className={styles["product-heading"]}> Status: </span>   {this.props.book.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
              </ListGroup.Item>

              {this.props.book.countInStock > 0 && (
                <ListGroup.Item>
                   <span className={styles["product-heading"]}> Qty: {quantity} </span> 
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                { quantity===0?(<button
                  
                  onClick={()=>this.props.addToCart(this.props.book)}
                  className={styles["ac-btn"]}
                  disabled={this.props.book.countInStock === 0}
                  
                >
                  Add To Cart
                </button>):(
                  <div style={{display:"flex",justifyContent:"space-evenly"}}>
                    <button
                  onClick={()=>this.props.addToCart(this.props.book)}
                  disabled={disabled}
                  className={styles["cc-btn"]}
                >
                  +
                </button>
               
                    <button
                  
                  onClick={()=>this.props.removeFromCart(this.props.book)}
                  className={styles["cc-btn"]}
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
              <span className={styles["product-heading"]}> Name:  </span>{this.props.book.seller.name} 
              </ListGroup.Item>
              <ListGroup.Item>
              <span className={styles["product-heading"]}> Contact Info:  </span>{this.props.book.seller.email}, +91-{this.props.book.seller.phone}
              </ListGroup.Item>
              <ListGroup.Item>
              <span className={styles["product-heading"]}> Address:  </span>{this.props.book.seller.address} 
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col> */}
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

