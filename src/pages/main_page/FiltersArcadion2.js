import React, { Component } from "react";

import cx from 'classnames'
import styles from "./FiltersArcadion2.module.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ChevronIcon from "../../assets/main_page/chevron_down.svg";
// import { connect } from "react-redux";

class FilterAccordion extends Component {
    handleCheck = (e) => {
        // console.log(e.target.checked);

        const key = e.target.value.split(":")[0];
        const value = e.target.value.split(":")[1];
        this.props.setFilters(key, value, e.target.checked);
    };

    render() {
        return (
            <Accordion className="my-3">
                <Card className={cx(styles.card, "my-4")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={cx(styles.cardHeader, "col-sm-12 p-0")}
                        eventKey="0"
                    >
                        <span>Select Year</span>
                        <div
                            className={styles.chevronDownToggle}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={cx(styles.ul, "row d-flex m-0")}>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="year:1"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>First</p>
                                    </label>
                                </li>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="year:2"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Second</p>
                                    </label>
                                </li>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="year:3"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Third</p>
                                    </label>
                                </li>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="year:4"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Fourth</p>
                                    </label>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={cx(styles.card, "my-3 my-md-4")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={cx(styles.cardHeader, "col-sm-12 p-0")}
                        eventKey="1"
                    >
                        <span style={{height:"50px"}}>Select Course</span>
                        <div
                            className={styles.chevronDownToggle}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={cx(styles.ul, "row d-flex m-0")}>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="course:Bcom"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Bcom</p>
                                    </label>
                                </li>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="course:Bsc"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Bsc</p>
                                    </label>
                                </li>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="course:Btech"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Btech</p>
                                    </label>
                                </li>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="course:Mtech"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Mtech</p>
                                    </label>
                                </li>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="course:BA"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>BA</p>
                                    </label>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card  className={cx(styles.card, "my-3 my-md-4")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={cx(styles.cardHeader, "col-sm-12 p-0")}
                        eventKey="3"
                    >
                        <span>Select Subject</span>
                        <div
                            className={styles.chevronDownToggle}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={cx(styles.ul, "row d-flex m-0")}>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="subject:physics"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Physics</p>
                                    </label>
                                </li>
                                <li className="col-6">
                                    <label>
                                        <input
                                            value="subject:chemistry"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Chemistry</p>
                                    </label>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
               

            </Accordion>

        );
    }
}

export default FilterAccordion;