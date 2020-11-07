import React, { Component } from "react";
import {connect} from 'react-redux'

import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import styles from "./Login.module.css";
import imgg from '../../assets/login_page/imgg.jpeg';
import {
    registerUser,
    loginUser,
    loginFb,
    loginGoogle,
} from "../../actions/auth_actions";

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
    };
    componentDidMount() {
        window.scrollTo(0, 0)
        console.log(this.props)
    }

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
            //this.props.showDialog("Invalid Inputs");
        }
    };

    /*handleFbLogin = ({ name, email, id }) => {
        let data = {
            name,
            email,
            id,
        };
        this.props.loginFb(data, this.props.history);
    };
*/
    handleGoogleLogin = ({ profileObj }) => {
        let data = {
            name: profileObj.name,
            email: profileObj.email,
            id: profileObj.googleId,
        };
        console.log("google-login")
        this.props.loginGoogle(data, this.props.history);
    };

    handleRegister = () => {
        if (
            this.state.register.name.length > 0 &&
            this.state.register.email.length > 0 &&
            this.state.register.phone.length > 0
        ) {
            if (this.state.register.password.length > 7) {
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
                    console.log(this.props)
                   // this.props.showDialog("Passwords do not match");
                }
            } else {
                this.props.auth.user.name = this.state.register.name
                this.props.auth.user.email = this.state.register.email
                this.props.auth.user.phone = this.state.register.phone
               // this.props.showDialog("Password length should be 8 or more");

            }
        } else {
          //  this.props.showDialog("Invalid Inputs");
        }
    };
    render() {
        return (

            <div className={styles.parent_div}>
                
                <div className={styles.left_section} >
                    <h1 className={styles.welcome_heading}>Welcome to DUBookX</h1>
                    <br></br><br></br>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <Tabs
                                defaultActiveKey="login"
                                id="uncontrolled-tab-example"
                            >
                                <Tab eventKey="login" title="Login" className = {styles.login_tab}>
                                    <h2 className={styles.supplement_heading}>Login</h2>
                                    <form>
                                        
                                            <label>
                                                Email:
                    <input type="email" placeholder="Enter email or phone"
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
                                                                }/>
                                            </label>
                                    
                                        <br />

                                        <label>
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
                                        <input type="button" value="Login" onClick={
                                                                this.handleLogin
                                                            }
                                                             />
                                    </form>
                                    <br />

                                    <hr></hr>
                                    <p>Or Login with </p>
                                    {/* <FaGoogle></FaGoogle> */}

                                    <GoogleLogin
                                    render={(
                                        renderProps
                                    ) => (
                                            <button
                                                onClick={
                                                    renderProps.onClick
                                                }
                                                disabled={
                                                    renderProps.disabled
                                                }
                                                
                                            >
                                                
                                                <span>
                                                    Login
                                                    with
                                                    Google
                                            </span>
                                            </button>
                                        )}
                                        clientId="250553439818-tk4jffted610in0h9hidqgnpft8m0lm2.apps.googleusercontent.com"
                                        onSuccess={
                                            this
                                                .handleGoogleLogin
                                        }
                                        onFailure={() =>
                                            alert(
                                                `Login failed`
                                            )
                                        }
                                        cookiePolicy={
                                            "single_host_origin"
                                        }
                                    />
                                   
                                </Tab>
                                <Tab eventKey="signup" title="Create Account">
                                    <h2 className={styles.supplement_heading}>Sign Up</h2>
                                    <form>
                                        <label>
                                            Name:
                  <input type="text" placeholder="Enter your name"
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
                                                                }/>
                                        </label>

                                        <br />

                                        <label>
                                            Email:
                  <input type="email" placeholder="Enter your email address"
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

                                        <label>
                                            Phone:
                  <input type="number" placeholder="Enter your phone number"
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
                                                                }/>
                                        </label>

                                        <br />

                                        <label>
                                            Password:
                  <input type="password" placeholder="Enter your password"
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
                                        <input type="button" value="Sign Up"
                                        onClick={
                                            this
                                                .handleRegister
                                        }  />
                                    </form>
                                    <br />
                                </Tab>
                            </Tabs>

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
    loginFb,
    loginGoogle
})(Login);

