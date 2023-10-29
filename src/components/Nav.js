import { getNodeText } from "@testing-library/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { ourStore } from "../redax/myStor";
import { ThisUserContext } from "../context/ThisUserContext";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BadgeTwoTone, ColorLens, DeliveryDining, DeliveryDiningTwoTone, MailSharp, Shop2Rounded } from "@mui/icons-material";
import { Cancel, Delete, Edit, Home, HomeOutlined, Inbox, LocalActivity, Mail, MoneyOff, Refresh, Search, SearchOutlined, SearchRounded, Shop } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import "./home.css";
import { Link ,NavLink} from "react-router-dom";
import Box from "@mui/material/Box";

import { MenuPopup } from "./NavMenu";
export const Nav = () => {
    let navigate=useNavigate();
    const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        flexGrow: 1,
        height:"100px",
      },
      menuButton: {
        marginRight: theme.spacing(2),
        backgroundColor: "#a8ef65",
      },
      SearchButton: {
        marginLeft: theme.spacing(4),
      },
      LoginButton: {
        borderColor: "soild 2px  #a8ef65",
        backgroundColor: "#a8ef65",
      },

      title: {
        flexGrow: 1,
      },
    })
  );

   
  
    
  const {ThisUser,SetThisUser} =useContext(ThisUserContext);

  const classes = useStyles();
  const [flag,setflag]=useState(false);
  const [flagLog,setflagLog]=useState(false);

  const func=()=>{
    debugger
   if(ThisUser.UserName!="מצב אורח")
   debugger
   setflagLog(true)
  }
  let TU = { UserName: "מצב אורח" };

  return (
    <>
      <div className={classes.root}>
        <AppBar color="inherit" position="static"  >
          <Toolbar >
            <Link to="/HomePage">
          <IconButton
                edge="start"
                className={classes.SearchButton}
                aria-label="menu"
              >
                <HomeOutlined />
              </IconButton>
           </Link >
           
            <IconButton 
          
            onClick={()=>{
                
                setflag(!flag)}}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
       
            <Typography variant="h6" className={classes.title}></Typography>
            <div>
              <label className="lablesearch">search</label>

              <IconButton
                edge="start"
                className={classes.SearchButton}
                aria-label="menu"
              >
                <SearchRounded />
              </IconButton>
            </div>
           
            {/* <Link   to="Login" > */}
                <div>
            <Button onMouseEnter={func} onClick={()=>{navigate("/Login")}} className={classes.LoginButton}>Login</Button>
           
            </div>
            {/* </Link> */}
          </Toolbar>
          <div className="thisuser"> {ThisUser.UserName}</div>


        </AppBar>

       
      </div>
     
     {
        flag ==true &&
        <div className="Mydiv" >
     
          <Toolbar >
          
            <div className="buttons">
            <IconButton
            onClick={()=>{setflag(!flag)}}
                edge="start"
                className={classes.SearchButton}
                aria-label="menu"
              >
                <Cancel />
              </IconButton>
            <button className="Menubutton">דואר בארץ</button>
            <button
              onClick={() => {
                navigate("/LogIn");
              }}
              className="Menubutton"
            >
              אזור אישי
            </button>
            <button
              onClick={() => {
                navigate("/OrderCheked");
              }}
              className="Menubutton"
            >
              מעקב משלוחים
            </button>
            <button className="Menubutton">זימון תורים</button>
            
           </div>
           
           </Toolbar>
          </div>
        
     }
        
    </>
  
  );
};

export const NavUser = () => {

  const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height:"100px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor: "#a8ef65",
    },
    SearchButton: {
      marginLeft: theme.spacing(4),
    },
    LoginButton: {
     border:'soild',
      // backgroundColor: "#a8ef65",
    },

    title: {
      flexGrow: 1,
    },
  })
);
const classes = useStyles();


  return<>
  <div>
 
    {/* <Toolbar> */}
      <Box>
   
    <Button 
    /*onClick={()=>{navigate("/Login")}}*/ className={classes.LoginButton}> < Edit/>עריכה</Button>
    <Button /*onClick={()=>{navigate("/Login")}} */className={classes.LoginButton}><Refresh/>התנתקות </Button>
    <Button /*onClick={()=>{navigate("/Login")}}*/  className={classes.LoginButton} ><DeliveryDiningTwoTone/>החבילות שלי</Button>
    </Box>
    {/* </Toolbar> */}
 
  </div>
  </>

}


            
           
            
       



        