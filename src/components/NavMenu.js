import { getNodeText } from "@testing-library/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
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
import { ColorLens } from "@mui/icons-material";
import {
  Home,
  HomeOutlined,
  Search,
  SearchOutlined,
  SearchRounded,
} from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import "./links.css";
import { Link, NavLink } from "react-router-dom";
import { Dialog } from "@mui/material";
import { useStyles } from "./nuvBar";
import "./MenuPopup.css";

export const MenuPopup = () => {
  let navigate = useNavigate();
  let params = useParams();


  return (
    <>
      <div className="Mydiv" >
     
          <Toolbar>
            <div className="buttons">
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
       
      
    </>
  );
};
