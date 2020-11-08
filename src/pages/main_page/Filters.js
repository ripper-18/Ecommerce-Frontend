import React,{Component} from 'react'
import { Form, Container, Card } from 'react-bootstrap';
import {connect} from 'react-redux'
import Select from "react-select";
import styles from  './Filters.module.css'
import FilterAccordion from "./FiltersArcadion";
import cx from 'classnames';

const options = [
    
    { value: "1", label: "Name A-Z" },
    { value: "2", label: "Name Z-A" },
    { value: "3", label: "Price (Low to High)" },
    { value: "4", label: "Price (High to Low)" },
];
class Filters extends Component {
    handleCheck = (e) => {
        // console.log(e.target.checked);

        const key = e.target.value.split(":")[0];
        const value = e.target.value.split(":")[1];
        console.log(value)
        this.props.setFilters(key, value, e.target.checked);
    };
    render(){
    return (
        <Container className="pl-md-0">
            <div className='heading mt-5 m-0 mb-md-4'>
                <h2>Filter Books</h2>
            </div>
            <div className="col-12 col-sm-12 order-sm-12 p-0">
                <label>Sort By</label>
                <Select
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: "#f5f5f5",
                            primary50: "#f5f5f5",
                            primary: "#517fda",
                        },
                    })}
                    onChange={(e) => this.props.setSortValue(e.value)}
                    options={options}
                />
            </div>
            <div>
                <FilterAccordion setFilters={this.props.setFilters} />
            </div>
            <div className='resetContainer mb-md-5 pb-4'>
                <div className="col-sm-12 p-0">
                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-lg btn-outline-danger w-100"
                        style={{borderColor:"#517fda"}}
                    >
                        Reset
                        </button>
                </div>
            </div>
            
        </Container>
        // <Container>
        //     <Card>
        //         <Form>
        //         <Container style={{textAlign: 'center'}}>
        //             <div>
        //             <div>
        //             <label>Sort By</label>
        //             <Select
        //                 theme={(theme) => ({
        //                     ...theme,
        //                     borderRadius: 0,
        //                     colors: {
        //                         ...theme.colors,
        //                         primary25: "#f5f5f5",
        //                         primary50: "#f5f5f5",
        //                         primary: "#d8173c",
        //                     },
        //                 })}
        //                 onChange={(e) => this.props.setSortValue(e.value)}
        //                 options={options}
        //             />
        //             </div>

        //            <div>
        //                Select Year
        //            <ul className={ "row d-flex m-0"}>
        //                         <li className="col-6">
        //                             <label>
        //                                 <input
        //                                     value="year:1"
        //                                     onChange={(e) =>
        //                                         this.handleCheck(e)
        //                                     }
        //                                     type="checkbox"
        //                                 />
        //                                 <p>1</p>
        //                             </label>
        //                         </li>
        //                         <li className="col-6">
        //                             <label>
        //                                 <input
        //                                     value="year:2"
        //                                     onChange={(e) =>
        //                                         this.handleCheck(e)
        //                                     }
        //                                     type="checkbox"
        //                                 />
        //                                 <p>2</p>
        //                             </label>
        //                         </li>
        //                         <li className="col-6">
        //                             <label>
        //                                 <input
        //                                     value="year:3"
        //                                     onChange={(e) =>
        //                                         this.handleCheck(e)
        //                                     }
        //                                     type="checkbox"
        //                                 />
        //                                 <p>3</p>
        //                             </label>
        //                         </li>
        //                         <li className="col-6">
        //                             <label>
        //                                 <input
        //                                     value="year:4"
        //                                     onChange={(e) =>
        //                                         this.handleCheck(e)
        //                                     }
        //                                     type="checkbox"
        //                                 />
        //                                 <p>4</p>
        //                             </label>
        //                         </li>
        //                     </ul>
        //            </div>

        //            <div>
        //                Select Course
        //            <ul className={ "row d-flex m-0"}>
        //                         <li className="col-6">
        //                             <label>
        //                                 <input
        //                                     value="course:Bsc"
        //                                     onChange={(e) =>
        //                                         this.handleCheck(e)
        //                                     }
        //                                     type="checkbox"
        //                                 />
        //                                 <p>Bsc</p>
        //                             </label>
        //                         </li>
        //                         <li className="col-6">
        //                             <label>
        //                                 <input
        //                                     value="course:Bcom"
        //                                     onChange={(e) =>
        //                                         this.handleCheck(e)
        //                                     }
        //                                     type="checkbox"
        //                                 />
        //                                 <p>Bcom</p>
        //                             </label>
        //                         </li>
                                
        //                     </ul>
        //            </div>

        //            <div>
        //                Select Subject
        //            <ul className={ "row d-flex m-0"}>
        //                         <li className="col-6">
        //                             <label>
        //                                 <input
        //                                     value="subject:maths"
        //                                     onChange={(e) =>
        //                                         this.handleCheck(e)
        //                                     }
        //                                     type="checkbox"
        //                                 />
        //                                 <p>maths</p>
        //                             </label>
        //                         </li>
        //                         <li className="col-6">
        //                             <label>
        //                                 <input
        //                                     value="subject:physics"
        //                                     onChange={(e) =>
        //                                         this.handleCheck(e)
        //                                     }
        //                                     type="checkbox"
        //                                 />
        //                                 <p>Physics</p>
        //                             </label>
        //                         </li>
                                
        //                     </ul>
        //            </div>
        //                 </div>
                    


        //         </Container>
                
        //         </Form>
        //     </Card>
        // </Container>
    )}
}

const mapStateToProps = (state) => ({
    book: state.book,
});

export default connect(mapStateToProps)(Filters);
