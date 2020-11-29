
import React,{Component} from 'react';
import { connect } from 'react-redux'
import banner from './../terms_page/terms.module.css'
import styles from './SellerReg.module.css'
import logo from './logo.png'
import {registerSeller} from "../../actions/auth_actions";
import { showDialog } from '../../actions/dialog_actions'



class SellerReg extends Component{
    constructor(props){
        super(props);
        
    }

    state = {
        fullname: "",
        email: "",
        phone: "",
        isStudent: false,
        password: "",
        confPassword: "",
        isVendor:true,
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }



    //handlers

    NameHandler = (e) =>{

        this.setState({
            ...this.state,
            fullname: e.target.value
        });
    
    }

    EmailHandler = (e) => {

        this.setState({
            ...this.state,
            email:e.target.value
        });

    };

    PhoneHandler = (e) => {

        this.setState({
            ...this.state,
            phone: e.target.value
        });

    };

    PasswordHandler = (e) => {

        this.setState({
            ...this.state,
            password: e.target.value
        });

    };

    ConfPasswordHandler = (e) => {

        this.setState({
            ...this.state,
            confPassword: e.target.value
        });

    };

    IsVendorHandler = (e) => {
        console.log(e.target.value)
        this.setState((prevState,props) => {
            return{
                isStudent:!prevState.isStudent,
                isVendor: prevState.isStudent
            };
        });        

    };

    
    SellerRegisterHandler = () => {
        if (
            this.state.fullname.length > 0 &&
            this.state.email.length > 0 &&
            this.state.phone.length > 0
        ) {
            if (this.state.password.length > 8) {
                if (
                    this.state.password ===
                    this.state.confPassword
                ) {
                    this.props.registerSeller(
                        this.state,
                        //this.props.history ... ye kyu chahiye hai hermit
                    );
                } else {
                    this.props.auth.user.fullname = this.state.fullname
                    this.props.auth.user.email = this.state.email
                    this.props.auth.user.phone = this.state.phone
                    this.props.showDialog("Passwords do not match");
                }
            } else {
                this.props.auth.user.fullname = this.state.fullname
                this.props.auth.user.email = this.state.email
                this.props.auth.user.phone = this.state.phone
                this.props.showDialog("Password length should be 8 or more");

            }
        } else {
            this.props.showDialog("Invalid Inputs");
        }
    };
       


    render(){
        return(
            <div className={banner.ain}>            
                <div className={banner.hero}>
                    <h1>Become a Seller</h1>
                </div>
                <div className={banner.heroMobile}>
                    <h1>Become a Seller</h1>
                </div>
                <div className={styles.form_decor}>
                    <img src={logo}></img>
                    <div className={styles.form_card}>
                    <form>
                            <label ><span className={styles.label_head}>Full Name:</span><br></br>
                            <input
                             type="text"                             
                             placeholder="Enter Your Full Name"
                             className="form-control"
                             required value={this.state.fullname}
                             onChange={this.NameHandler}
                             />
                        </label>
                            <label ><span className={styles.label_head}>Email:</span><br></br>
                        <input
                            type="email"
                            
                            placeholder="Enter Your Email Address"
                            className="form-control"
                            required value={this.state.email}
                            onChange={this.EmailHandler}
                            />
                        </label>
                            <label ><span className={styles.label_head}>Mobile Number:</span><br></br>
                        <input
                                                      
                            placeholder="Enter Your Contact Number"
                            className="form-control"
                            required value={this.state.phone}
                            onChange={this.PhoneHandler}
                            />
                        </label>
                            <label ><span className={styles.label_head}>Password:</span><br></br>
                        <input
                            type="password"                            
                            placeholder="Enter Your Password"
                            className="form-control"
                            required value={this.state.password}
                            onChange={this.PasswordHandler}
                            />
                        </label>
                            <label ><span className={styles.label_head}>Confirm Password:</span><br></br>
                        <input
                            type="password"
                            
                            placeholder="ReEnter Your Password"
                            className="form-control"
                            required value={this.state.confPassword}
                            onChange={this.ConfPasswordHandler}
                        />
                        </label>
                            <label ><span className={styles.label_head}>Are you a student</span>
                                <input
                                    type="checkbox"                                    
                                    className="form-control"
                                    required 
                                    onChange={this.IsVendorHandler}
                                />
                            </label>

                        <div className={styles.user_login_button}>
                            <input className={styles.reg_button} type="button" value="Become A Seller"
                                onClick={this.SellerRegisterHandler} />
                        </div>

                    
                    </form>

                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {
    registerSeller,
    showDialog,    
})(SellerReg);

