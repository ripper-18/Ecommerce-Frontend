import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';
import './ProductCarousel.css'

class MainCarousel extends Component {

    componentDidMount(){
        console.log(this.props.image[0])
    }
    render(){
    return (
      <Carousel showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      
      stopOnHover={false}
      >
      {this.props.image.map((im,index)=>(
          <div className="product-img">
              <img src={im}/>
          </div>
      ))}
         
      
  </Carousel>
    )}
}

export default MainCarousel

        