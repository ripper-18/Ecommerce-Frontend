import React, { Component } from "react";
import { connect } from 'react-redux'
import { GoogleLogin } from "react-google-login";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import styles from "./Login.module.css";
import {
    registerUser,
    loginUser,
    loginGoogle,
} from "../../actions/auth_actions";
import { showDialog } from '../../actions/dialog_actions'
import google from '../../assets/google.svg'
import ForgotPModal from './ForgotPModal'
import cx from 'classnames'


class Login extends Component {
    state = {
        login: {
            cred: "",
            password: "",
        },
        register: {
            name: this.props.auth.user.name,
            email: this.props.auth.user.email,
            phone: this.props.auth.user.phone,
            password: "",
            confirmpassword: "",
        },
        isOpen: false,
    };
    componentDidMount() {
        window.scrollTo(0, 0)

    }

    setModalOpen = (value) => {
        this.setState({
            ...this.state,
            isOpen: value,
        });
    };
    handleLoginEmail = (e) => {
        this.setState({
            ...this.state,
            login: {
                ...this.state.login,
                cred: e.target.value,
            },
        });
    };
    handleLoginPassword = (e) => {
        this.setState({
            ...this.state,
            login: {
                ...this.state.login,
                password: e.target.value,
            },
        });
    };
    handleRegisterName = (e) => {
        this.setState({
            ...this.state,
            register: {
                ...this.state.register,
                name: e.target.value,
            },
        });
    };
    handleRegisterEmail = (e) => {
        this.setState({
            ...this.state,
            register: {
                ...this.state.register,
                email: e.target.value,
            },
        });
    };
    handleRegisterPhone = (e) => {
        this.setState({
            ...this.state,
            register: {
                ...this.state.register,
                phone: e.target.value,
            },
        });
    };
    handleRegisterPassword = (e) => {
        this.setState({
            ...this.state,
            register: {
                ...this.state.register,
                password: e.target.value,
            },
        });
    };
    handleRegisterCnfPassword = (e) => {
        this.setState({
            ...this.state,
            register: {
                ...this.state.register,
                confirmpassword: e.target.value,
            },
        });
    };

    handleLogin = () => {
        if (
            this.state.login.cred.length > 0 &&
            this.state.login.password.length > 0
        ) {
            this.props.loginUser(this.state.login, this.props.history);
        } else {
            this.props.showDialog("Invalid Inputs");
        }
    };


    handleGoogleLogin = ({ profileObj }) => {
        let data = {
            name: profileObj.name,
            email: profileObj.email,
            id: profileObj.googleId,
        };
        this.props.loginGoogle(data, this.props.history);
    };

    handleRegister = () => {
        if (
            this.state.register.name.length > 0 &&
            this.state.register.email.length > 0 &&
            this.state.register.phone.length > 0
        ) {
            if (this.state.register.password.length > 8) {
                if (
                    this.state.register.password ===
                    this.state.register.confirmpassword
                ) {
                    this.props.registerUser(
                        this.state.register,
                        this.props.history
                    );
                } else {
                    this.props.auth.user.name = this.state.register.name
                    this.props.auth.user.email = this.state.register.email
                    this.props.auth.user.phone = this.state.register.phone
                    this.props.showDialog("Passwords do not match");
                }
            } else {
                this.props.auth.user.name = this.state.register.name
                this.props.auth.user.email = this.state.register.email
                this.props.auth.user.phone = this.state.register.phone
                this.props.showDialog("Password length should be 8 or more");

            }
        } else {
            this.props.showDialog("Invalid Inputs");
        }
    };
    render() {
        return (
            <div className={styles.parent_div}>
                <div className={styles.left_section} >
                    <h1 className={styles.welcome_heading}>Hi there! </h1>
                    <br></br><br></br>
                    <div className="justify-content-center row">
                        <div className=" col-md-8 col-sm-8">
                            <div className={"card"} style={{ alignItems: "center" }} >
                                <div className={"card-body"} style={{ width: "80%", justifyContent: "center" }}>
                                    <Tabs
                                        defaultActiveKey="login"
                                        id="uncontrolled-tab-example"
                                        className={cx(styles.tabs)}
                                    >
                                        <Tab eventKey="login" title="Login" className={styles.login_tab}>
                                            <div className="mt-3">
                                                <div className={styles.form}>
                                                    <form style={{ justifyContent: "center" }}>

                                                        <label style={{ width: "100%" }}>
                                                            Email:
                                                 <input type="email" placeholder="Enter your registered email"
                                                                className="form-control"
                                                                required
                                                                value={
                                                                    this.state
                                                                        .login
                                                                        .cred
                                                                }
                                                                onChange={(e) =>
                                                                    this.handleLoginEmail(
                                                                        e
                                                                    )

                                                                } />
                                                        </label>

                                                        <br />

                                                        <label style={{ width: "100%" }}>
                                                            Password:
                                         <input type="password" placeholder="Enter your password"
                                                                className="form-control"
                                                                required
                                                                value={
                                                                    this.state
                                                                        .login
                                                                        .password
                                                                }
                                                                onChange={(e) =>
                                                                    this.handleLoginPassword(
                                                                        e
                                                                    )
                                                                } />
                                                        </label>
                                                        <br />
                                                        <div className={styles.user_login_button}>
                                                            <input className={styles.login_tab_button} type="button" value="Login" onClick={
                                                                this.handleLogin
                                                            }
                                                            />
                                                            <span style={{ color: "#007bff", cursor: "pointer" }} onClick={() => this.setModalOpen(true)}>Forgot Password?</span>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>

                                            <br />
                                            <ForgotPModal isOpen={this.state.isOpen}
                                                setModalOpen={this.setModalOpen} />
                                            <hr></hr>
                                            <p>Or Login with </p>

                                            <div className={styles.google_button_container}>
                                                {<GoogleLogin
                                                    render={(
                                                        renderProps
                                                    ) => (
                                                        <button
                                                            className={styles.login_with_google_button}
                                                            onClick={
                                                                renderProps.onClick
                                                            }
                                                            disabled={
                                                                renderProps.disabled
                                                            }

                                                        >
                                                            <img src={google} />
                                                        </button>
                                                    )}
                                                    clientId="250553439818-tk4jffted610in0h9hidqgnpft8m0lm2.apps.googleusercontent.com"
                                                    onSuccess={
                                                        this
                                                            .handleGoogleLogin
                                                    }
                                                    onFailure={() =>
                                                        this.props.showDialog(
                                                            `Google Login failed`
                                                        )
                                                    }
                                                    cookiePolicy={
                                                        "single_host_origin"
                                                    }
                                                />}
                                            </div>

                                        </Tab>
                                        <Tab eventKey="signup" title="Create Account">
                                            <div className={styles.form}>
                                                <form>
                                                    <label style={{ width: "100%" }}>
                                                        Name:
                  <input size="100" type="text" placeholder="Enter your name"
                                                            className="form-control"
                                                            required
                                                            value={
                                                                this.state
                                                                    .register
                                                                    .name
                                                            }
                                                            onChange={(e) =>
                                                                this.handleRegisterName(
                                                                    e
                                                                )
                                                            } />
                                                    </label>

                                                    <br />

                                                    <label style={{ width: "100%" }}>
                                                        Email:
                  <input size="100" type="email" placeholder="Enter your email address"
                                                            className="form-control"
                                                            required
                                                            value={
                                                                this.state
                                                                    .register
                                                                    .email
                                                            }
                                                            onChange={(e) =>
                                                                this.handleRegisterEmail(
                                                                    e
                                                                )
                                                            } />
                                                    </label>

                                                    <br />

                                                    <label style={{ width: "100%" }}>
                                                        Phone:
                  <input size="100" placeholder="Enter your phone number" type="text"
                                                            className="form-control"
                                                            required
                                                            value={
                                                                this.state
                                                                    .register
                                                                    .phone
                                                            }
                                                            onChange={(e) =>
                                                                this.handleRegisterPhone(
                                                                    e
                                                                )
                                                            } />
                                                    </label>

                                                    <br />

                                                    <label style={{ width: "100%" }}>
                                                        Password:
                  <input size="100" type="password" placeholder="Enter your password"
                                                            className="form-control"
                                                            required
                                                            value={
                                                                this.state
                                                                    .register
                                                                    .password
                                                            }
                                                            onChange={(e) =>
                                                                this.handleRegisterPassword(
                                                                    e
                                                                )
                                                            } />
                                                    </label>
                                                    <br />
                                                    <label style={{ width: "100%" }}>
                                                        Confirm Password:
                  <input size="100" type="password" placeholder="Please re-enter the password"
                                                            className="form-control"
                                                            required
                                                            value={
                                                                this.state
                                                                    .register
                                                                    .confirmpassword}
                                                            onChange={(e) =>
                                                                this.handleRegisterCnfPassword(
                                                                    e
                                                                )
                                                            } />
                                                    </label>
                                                    <div className={styles.user_login_button}>
                                                        <input className={styles.login_tab_button} type="button" value="Sign Up"
                                                            onClick={
                                                                this
                                                                    .handleRegister
                                                            } />
                                                    </div>
                                                </form>
                                            </div>

                                            <br />
                                        </Tab>
                                    </Tabs>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.right_section} >
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {
    registerUser,
    loginUser,
    showDialog,
    loginGoogle
})(Login);

