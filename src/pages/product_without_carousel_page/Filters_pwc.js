import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from "react-select";
import styles from './Filters_pwc.module.css'


const options = [
    { value: "1", label: "Name A-Z" },
    { value: "2", label: "Name Z-A" },
    { value: "3", label: "Price (Low to High)" },
    { value: "4", label: "Price (High to Low)" },
];
class Filters extends Component {
    handleCheck = (e) => {
        

        const key = e.target.value.split(":")[0];
        const value = e.target.value.split(":")[1];
       
        this.props.setFilters(key, value, e.target.checked);
    };
    render() {
        return (
            <div className={styles.pwc_filter_container}>
                <div style={{ flex: "1" }}>
                 
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
               
            </div>
            

        )
    }
}

const mapStateToProps = (state) => ({
    book: state.book,
});

export default connect(mapStateToProps)(Filters);
