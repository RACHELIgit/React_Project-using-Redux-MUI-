import { getNodeText } from "@testing-library/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import pic1 from "../components/pic/1.jpg";
import pic2 from "../components/pic/2.jpg";
import pic3 from "../components/pic/3.jpg";
import pic4 from "../components/pic/4.jpg";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { SendRounded } from "@material-ui/icons";
import bac from '../components/pic/bac.png';
import { GetOrders } from "./head";
import { GetOrdersReduc } from "../redax/action";
import { ElectricScooterSharp } from "@mui/icons-material";

export const OrderCheked = () => {
  let arr = [pic1, pic2, pic3];
  let dispath=useDispatch();
  
  useEffect(async () => {
    debugger;
    const data = await GetOrders();
         dispath(GetOrdersReduc(data));
  }, []);

  const orders = useSelector((ourStore) => {
    return ourStore.OrdersReducer.orders;
  });

  const ArrStatus = useSelector((ourStore) => {
    return ourStore.OrdersReducer.ArrStatus;
  });


  const [YourStatus, setYourStatus] = useState(" ");
  const [statusIndex, setstatusIndex] = useState(-1);
  const[erro,seterro]=useState(" ");
  let iduser = useRef();

  
  return (
    <>
    <div className="search">
    <div style={{fontSize:'50px',marginLeft:'20%',textAlign:'center'}} className="h1">Search your Tracing</div>
{/* <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
    
      <InputBase  ref={iduser} 
        sx={{ ml: 1, flex: 1 }}  
        placeholder="Enter your order code"
        
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      {/* <IconButton type="button"
      onClick={() => {
        debugger
        console.log(iduser.current.value);
        orders.map((ele) => {
          console.log(ele.IdUser);
          console.log(iduser.current.value);
          debugger;
          if (ele.id == iduser.current.value) {
            setYourStatus(ArrStatus[parseInt(ele.id - 1)].plac);
            setstatusIndex(ele.id - 1);
          }
        });
      }}
      sx={{ p: '10px' ,backgroundColor:'#6cd3ff'}} aria-label="search">
        <SearchIcon />
      </IconButton> */}
      
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
     
    </Paper> */} 
    {/* <button onClick={()=>{
       debugger
       console.log(iduser.current.value);
       orders.map((ele) => {
         console.log(ele.IdUser);
         console.log(iduser.current.value);
         debugger;
         if (ele.id == iduser.current.value) {
           setYourStatus(ArrStatus[parseInt(ele.id - 1)].plac);
           setstatusIndex(ele.id - 1);
         }
       });
    }}></button> */}
    </div>
  
<div>
    <input type={"text"} ref={iduser} placeholder="הכנס מספר מעקב" onKeyPress={()=>{setstatusIndex(-1) ;seterro(" ")}}  style={{width:'25%',marginRight:'10%'}} ></input>
   
      {/* <button
        onClick={() => {
          orders.map((ele) => {
            console.log(ele.IdUser);
            console.log(iduser.current.value);
            debugger;
            if (ele.id == iduser.current.value) {
              setYourStatus(ArrStatus[parseInt(ele.id - 1)].plac);
              setstatusIndex(ele.id - 1);
            }
          });
        }}
      
      >
        חפש
     </button> */}
  <IconButton    onClick={() => {
    console.log(erro);
    console.log(statusIndex);
          orders.map((ele) => {
            console.log(ele.IdUser);
            console.log(iduser.current.value);
            debugger;
            if (ele.Id == iduser.current.value) {
              setYourStatus(ArrStatus[parseInt(ele.Id - 1)].plac);
              setstatusIndex(ele.Id - 1);
            }
          });
          if(statusIndex==-1)
                seterro("אין תוצאות")
                else
                seterro(" ")
        }} 
      
>
   
  <SearchIcon sx={{ backgroundColor: "#a8ef65",borderRadius:'20px',width:'60px'}} ></SearchIcon>
    </IconButton>
    </div>
    {YourStatus != " "  && statusIndex!=-1 && 
        <div className="res">
          <img className="resultimg" src={arr[statusIndex]}></img>
          {/* <p>החבילה שלך:{YourStatus}</p> */}
        </div>}
    <img className="eee" src={bac}></img>
        {
          statusIndex==-1 &&
           <p className="resulterr">{erro}</p>
        }
   
   </>
  

  )};