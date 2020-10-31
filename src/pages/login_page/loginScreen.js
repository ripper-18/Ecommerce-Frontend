import React, { Component } from "react";

import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import styles from "./Login.module.css";
import imgg from './imgg.jpeg';

const responseGoogle = (response) => {
    console.log(response);
};

//var imgg = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.jakpost.net%2Fc%2F2019%2F03%2F02%2F2019_03_02_66706_1551461528._large.jpg&imgrefurl=https%3A%2F%2Fwww.thejakartapost.com%2Flife%2F2019%2F06%2F01%2F5-ways-to-read-free-books-online.html&tbnid=PdNyEfnUXZbqgM&vet=12ahUKEwiQpdGA797sAhVCoUsFHVh5AHgQMygBegUIARDKAQ..i&docid=bAC_FVi1W3jR2M&w=1024&h=614&q=books%20pictures&ved=2ahUKEwiQpdGA797sAhVCoUsFHVh5AHgQMygBegUIARDKAQ";

class Login extends Component {
    state = {
        login: {
            cred: "",
            password: ""
        },
        register: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmpassword: ""
        }
    };
    componentDidMount() {
        window.scrollTo(0, 0);
        console.log(this.props);
    }

    handleLoginEmail = (e) => {
        this.setState({
            ...this.state,
            login: {
                ...this.state.login,
                cred: e.target.value
            }
        });
    };
    render() {
        return (

            <div className={styles.parent_div}>
                
                <div className={styles.left_section} >
                    <h1 className={styles.welcome_heading}>Welcome brotha</h1>
                    <br></br><br></br>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <Tabs
                                defaultActiveKey="login"
                                id="uncontrolled-tab-example"
                            >
                                <Tab eventKey="login" title="Login">
                                    <h2>Login</h2>
                                    <form>
                                        
                                            <label>
                                                Email:
                    <input type="email" />
                                            </label>
                                    
                                        <br />

                                        <label>
                                            Password:
                  <input type="password" />
                                        </label>
                                        <br />
                                        <input type="submit" value="Login" />
                                    </form>
                                    <br />

                                    <hr></hr>
                                    <p>Or Login with </p>
                                    {/* <FaGoogle></FaGoogle> */}

                                    <GoogleLogin
                                        clientId="250553439818-747jqjn1nsjrpespp5hbun3jl9leddo3.apps.googleusercontent.com"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                    />
                                    <FaFacebookF></FaFacebookF>
                                </Tab>
                                <Tab eventKey="signup" title="Create Account">
                                    <h2>Sign Up</h2>
                                    <form>
                                        <label>
                                            Name:
                  <input type="text" />
                                        </label>

                                        <br />

                                        <label>
                                            Email:
                  <input type="email" />
                                        </label>

                                        <br />

                                        <label>
                                            Phone:
                  <input type="number" />
                                        </label>

                                        <br />

                                        <label>
                                            Password:
                  <input type="password" />
                                        </label>
                                        <br />
                                        <input type="submit" value="Sign Up" />
                                    </form>
                                    <br />
                                </Tab>
                            </Tabs>

                        </div>


                    </div>
                    
                    
                </div>

                <div className={styles.right_section} >
                    <img src={imgg}></img>
                </div>
            </div>
        );
    }
}

export default Login;

