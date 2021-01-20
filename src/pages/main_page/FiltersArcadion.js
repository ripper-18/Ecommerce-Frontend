import React, { Component } from "react";

import cx from 'classnames'
import styles from "./FiltersArcadion.module.css";
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
                    <Card.Header
                       
                        className={cx(styles.cardHeader, "col-sm-12 p-0")}
                        
                    >
                        <span>YEAR</span>
                        
                    </Card.Header>
                   
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={cx(styles.ul, "row d-flex m-0")}>
                                <li className="col-12">
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
                                <li className="col-12">
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
                                <li className="col-12">
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
                                <li className="col-12">
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
                   
                </Card>
                <Card className={cx(styles.card, "my-3 my-md-4")}>
                    <Card.Header
                        className={cx(styles.cardHeader, "col-sm-12 p-0")}
                      
                    >
                        <span>COURSE</span>
                        
                    </Card.Header>
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={cx(styles.ul, "row d-flex m-0")}>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:Bms"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Bachelor of Management Studies</p>
                                    </label>
                                </li>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:BcomH"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Bcom(Hons)</p>
                                    </label>
                                </li>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:BcomP"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>Bcom(P)</p>
                                    </label>
                                </li>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:BAHEco"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>BA(Hons) Economics</p>
                                    </label>
                                </li>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:BAHEng"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>BA(Hons) English</p>
                                    </label>
                                </li>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:BAHPsy"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>BA(Hons) Psychology</p>
                                    </label>
                                </li>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:BAHSoc"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>BA(Hons) Sociology</p>
                                    </label>
                                </li>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:BscHSta"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>BSc(Hons) Statistics</p>
                                    </label>
                                </li>
                                <li className="col-12">
                                    <label>
                                        <input
                                            value="course:BscHMat"
                                            onChange={(e) =>
                                                this.handleCheck(e)
                                            }
                                            type="checkbox"
                                        />
                                        <p>BSc(Hons) Mathematics</p>
                                    </label>
                                </li>
                            </ul>
                        </Card.Body>
                </Card>
                <Card  className={cx(styles.card, "my-3 my-md-4")}>
                    <Card.Header
                        
                        className={cx(styles.cardHeader, "col-sm-12 p-0")}
                       
                    >
                        <span>SUBJECT</span>
                        
                    </Card.Header>
                 
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={cx(styles.ul, "row d-flex m-0")}>
                                <li className="col-12">
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
                                <li className="col-12">
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
                </Card>
               

            </Accordion>

        );
    }
}

export default FilterAccordion;