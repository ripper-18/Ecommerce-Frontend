import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import Select from "react-select";
import styles from './Filters.module.css'
import FilterAccordion from "./FiltersArcadion";
import cx from 'classnames'

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
            <Container className="pl-md-0 center">
                <div className={cx(styles.heading, 'mt-5 m-0 mb-md-4')}>
                    <div style={{ margin: 'auto', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>FILTER BOOKS </div>
                    <div className={cx(styles.resetContainer, ' mb-md-5 pb-4')}>
                        <div className="col-sm-12 p-0">
                            <button
                                onClick={() => window.location.reload()}
                                className="btn btn-lg btn-outline-danger w-100 reset-button"
                                style={{ borderColor: "#273c75" }}
                            >
                                Reset
                        </button>
                        </div>
                    </div>
                </div>
                <div className={cx(styles.sel, "col-12 col-sm-12 order-sm-12 p-0")}>
                    <label>SORT BY</label>
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
                        onChange={(e) => this.props.setSortValue(e.value)}
                        options={options}
                    />
                </div>
                <div>
                    <FilterAccordion setFilters={this.props.setFilters} />
                </div>


            </Container>

        )
    }
}

const mapStateToProps = (state) => ({
    book: state.book,
});

export default connect(mapStateToProps)(Filters);
