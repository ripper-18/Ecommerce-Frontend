import React,{useEffect,Component} from 'react'
import MainCarousel from './MainCarousel'
import Filters from './Filters'
import Filters2 from './Filters2'
import Products from './Products'
import {Row, Col,Container} from 'react-bootstrap';
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/auth_actions'
import cross from '../../assets/cross.svg'
import cx from "classnames"
import styles from './MainPage.module.css'
import CourseCard from './CourseCard'

class MainPage extends Component {
    state = {
        isSideFilterOpen: false,
        filters: {
           year:[],
           course:[],
           subject:[]      
          },
        sortValue: 0,
        size:0,
       

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
    updateDimensions = () => {
      if(window.innerWidth<1150){
          this.setState({
            ...this.state,
            size:3
          })
      }
      else{
        this.setState({
            ...this.state,
            size:2
          })  
    }
      };
      componentDidMount() {
        if(window.innerWidth<1150){
            this.setState({
              ...this.state,
              size:3
            })
        }
        else{
          this.setState({
              ...this.state,
              size:2
            })  
        }
        window.addEventListener('resize', this.updateDimensions);
      }
    

    render(){
    return (
        <div>

            <div className={styles.main_carousel}>
                <MainCarousel></MainCarousel>
            </div>
            <h1 style={{textAlign : 'center'}} > Find Books By Courses</h1> 
            <div className={styles.courses_div} >
          
                <CourseCard name='Bms' />
                <CourseCard name='Bcom-Hon' />
                <CourseCard name='Bcom-Psy' />
                <CourseCard name='BA(Hon)-Eco' />
                <CourseCard name='BA(Hon)-Eng' />
                <CourseCard name='BA(Hon)-Psy' />
                <CourseCard name='BA(Hon)-Soc' />
                <CourseCard name='Bsc(Hon)-Stat' />
                <CourseCard name='Bsc(Hon)-Math' />
                
            </div>
            <div className={styles.containerWrap}>
            
            <Row >
                <Col 
                  sm={12}
                  md={this.state.size}
                  className="d-none d-md-block px-4 pl-md-2"
                  style={{borderRight:"1px solid #edebef"}}
                >
                   <Filters
                   setSortValue={this.setSortValue}
                   setFilters={this.setFilters}/>
                </Col>
                <Col 
                className="bg-white" sm={12} md={this.state.size===2?10:9}>
                <h1 style={{textAlign : 'center'}} > Best Place to Buy Books </h1>
                <div  style={{borderTop:"1px solid #edebef"}}>
                        <Products
                        filters={this.state.filters}
                        sortValue={this.state.sortValue}
                        handleSideFilterOpen={
                            this.handleSideFilterOpen
                        }
                        ></Products>
                </div>
                </Col>
            </Row>
            
            <div
                        className={cx(styles.sideFilter, {
                            [styles.sideFilterOpen]: this.state
                                .isSideFilterOpen,
                        })}
                    >
                        <div
                            className="col-12"
                            style={{ position: "relative",top:"100px" }}
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

        
    )}
}

export default MainPage
