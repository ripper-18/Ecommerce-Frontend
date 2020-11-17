import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import Select from "react-select";
import './Filters_pwc.css'
import FilterAccordion from "./FiltersArcadion_pwc";

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
    render() {
        return (
            <div className='pwc_filter_container'>

                {/* className="col-12 col-sm-12 order-sm-12 p-0" */}
                 
                <div style={{ flex: "1" }}>
                    {/* <label>Sort By</label> */}
                    <Select
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25: "#f5f5f5",
                                primary50: "#f5f5f5",
                                primary: "#273c75",
                            },
                        })}
                        placeholder={"Sort By"}
                        onChange={(e) => this.props.setSortValue(e.value)}
                        options={options}
                    />
                </div>
                {/* <div style={{flex:"1"}}>
                    <FilterAccordion setFilters={this.props.setFilters} />
                </div> */}
                {/* className='resetContainer mb-md-5 pb-4' */}
                {/* <div style={{ flex: "1" }}> */}
                    {/* className="col-sm-12 p-0" */}
                    {/* <div >
                        <button
                            onClick={() => window.location.reload()}
                            className="btn btn-lg btn-outline-danger w-100 reset-button"
                            style={{ borderColor: "#273c75" }}
                        >
                            Reset
                        </button>
                    </div>
                </div> */}
            </div>
            

        )
    }
}

const mapStateToProps = (state) => ({
    book: state.book,
});

export default connect(mapStateToProps)(Filters);
