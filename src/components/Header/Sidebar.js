import React,{useRef} from 'react';
import {Link,withRouter} from 'react-router-dom'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import './Sidebar.css'
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ChevronIcon from "../../assets/main_page/chevron_down.svg";
import {logoutUser} from '../../actions/auth_actions'
import {showloader} from '../../actions/isLoading_actions'

 function SwipeableTemporaryDrawer(props) {

  const [state, setState] = React.useState({
    left: false,
  });
  const [open2,setOpen]=React.useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setOpen(!open2)
  };

const Line1 = useRef()
const Line2 = useRef()
  const list = (anchor) => (
    <div
      className={"drawer"}
      role="presentation"
     
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List style={{width:"100%",padding:"0px"}}>
        <ListItem style={{width:"100%",padding:"0px"}}>
            <ListItemAvatar style={{backgroundColor:" #232b2b",height:"60px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <AccountCircleIcon className="ic" />
            </ListItemAvatar>
            {!props.auth.isAuth?(
                <Link to="/login" style={{width:"100%"}}>
                    <div ref={Line1} className="hello">
                    <span>Hello,</span>
                    <span>Sign In</span>
                  </div>
                </Link>
                
            ):(
                <Link to="/profile" style={{width:"100%"}}>
                     <div className="hello">
                     <span>Hello,</span>
                     <span>{props.auth.user.name}</span>
                </div>
                </Link>
               
            )}
        </ListItem>
        <ListItem style={{width:"100%",padding:"0px"}}>
            <div className="books" ref={Line2}>
                <span className="bhead">
                    Find Your Book
                </span>
            <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                    >
                        <span>Select Course</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul")}>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >B.Ms</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                                
                                <li className="col-6" onClick={()=>props.history.push('/category/Bms/1')}>

                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Bms/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Bms/3')}>
                                3rd Year
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >B.Com-Hon</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/BcomH/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BcomH/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BcomH/3')}>
                                3rd Year
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >B.Com-Pro</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/BcomP/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BcomP/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BcomP/3')}>
                                3rd Year
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >B.A(Hon)-Eco</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/BAHEco/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={async()=>{await props.history.push('/category/BAHEco/2')}}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BAHEco/3')}>
                                3rd Year
                                </li>
                               
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >B.A(Hon)-Eng</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/BAHEng/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BAHEng/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BAHEng/3')}>
                                3rd Year
                                </li>
                                
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >B.A(Hon)-Psy</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/BAHPsy/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BAHPsy/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BAHPsy/3')}>
                                3rd Year
                                </li>
                                
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >Shivdas</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/Shivdas/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Shivdas/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Shivdas/3')}>
                                3rd Year
                                </li>
                                
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >B.Sc(Hon)-Stat</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/BscHSta/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BscHSta/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BscHSta/3')}>
                                3rd Year
                                </li>
                                
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >B.Sc(Hon)-Math</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/BscHMat/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BscHMat/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BscHMat/3')}>
                                3rd Year
                                </li>
                                
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        </ListItem>
        <Divider/>
        <ListItem style={{width:"100%",padding:"0px",height:`100vh-${Line1.clientHeight}vh-${Line2.clientHeight}vh`}}>
            <div className="help">
                <span className="bhead" style={{padding:"20px"}}>Help & Account</span>
                <Link to="/profile">
                <div className="hs-item">Your Account</div>
                </Link>
               {!props.auth.isAuth?(
                     <Link to="/login" style={{width:"100%",color:"#231f20"}}>
                    <div className="hs-item">
              
                    <span>Sign In</span>
               
                </div>
                 </Link>
            ):(
                <div className="hs-item" onClick={()=>props.logoutUser(props.history)}>
                     <span  style={{cursor:"pointer"}}>Logout</span></div>
            )}
            <Link to="/seller_reg" style={{width:"100%",color:"#231f20"}}>
            <div className="hs-item">
                    Become A Seller?
            </div>
            </Link>
             <Link to="/about" style={{width:"100%",color:"#231f20"}}>
            <div className="hs-item">
                    About Us
            </div>
            </Link>
            <Link to="/terms" style={{width:"100%",color:"#231f20"}}>
            <div className="hs-item">
                    Terms and Conditions
            </div>
            </Link>
            <Link to="/returns" style={{width:"100%",color:"#231f20"}}>
            <div className="hs-item">
                   Return Policy
            </div>
            </Link>
            </div>
        </ListItem>
        <Divider/>
        <ListItem style={{width:"100%",padding:"0px"}}>
            <div className="contact">
                <div className="bhead">
            Contact Us
                </div>
                <ul>
            <a href="tel:9910208293"> <li>9910208293</li></a>
            <a href="tel:9953897446"><li>9953897446</li></a>
             <a href="mailto:dubookx@gmail.com"><li>dubookx@gmail.com</li></a>
       
      </ul>
                </div>
        </ListItem>
    </List>
    </div>
  );

  return (
    <div className="drawer-icon">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, !open2)}><MenuIcon className="menu-icon"/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            style={{overflow:"hidden"}}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
    auth: state.auth,

});

export default connect(mapStateToProps,{logoutUser,showloader})(withRouter(SwipeableTemporaryDrawer))