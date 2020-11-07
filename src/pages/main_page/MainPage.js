import React,{useEffect,Component} from 'react'
import MainCarousel from './MainCarousel'
import Filters from './Filters'
import Products from './Products'
import {Row, Col} from 'react-bootstrap';
import './MainPage.css'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/auth_actions'

class MainPage extends Component {
    state = {
        filters: {
           year:[],
           course:[],
           subject:[]      
          },
        sortValue: 0,
        keyword:""
        

    };

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

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('search')
        //  console.log(token)//123
          this.setState({
              ...this.state,
              keyword:token
          })
         // console.log(this.state.keyword)
    }
    render(){
        
         // console.log(this.state.keyword)
    return (
        <div>

            <div className="main-carousel">
                <MainCarousel></MainCarousel>
            </div>
            <Row>
                <Col xs="3">
                   <Filters
                   setSortValue={this.setSortValue}
                   setFilters={this.setFilters}/>
                </Col>
                <Col xs="9">
                <h1 style={{textAlign : 'center'}}> Best Place to Buy Books </h1>
                <div  className="main">
                        <Products
                        filters={this.state.filters}
                        sortValue={this.state.sortValue}
                        keyword={this.state.keyword}
                        ></Products>
                </div>
                </Col>

            </Row>

        </div>

        
    )}
}

export default MainPage
