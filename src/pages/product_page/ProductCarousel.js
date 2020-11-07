import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
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
      autoPlay
      interval={5000}
      stopOnHover={false}
      >
      {this.props.image.map((im,index)=>(
          <div>
              <img src={im}/>
          </div>
      ))}
         
      
  </Carousel>
    )}
}

export default MainCarousel

        