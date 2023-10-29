import { Nav } from "./Nav";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import "./home.css";
import { GetDataUsers } from "../redax/action";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Directions } from "@material-ui/icons";
export const postUser = async (user) => {
  debugger;
  try {
    debugger;
    const users = await axios.post(
      "http://localhost:58309/api/Customers",
      user
    );

    debugger;
    return users;
  } catch (err) {
    return err;
  }
};
export const putUser = async (user) => {
    debugger;
    try {
      debugger;
      const users = await axios.put(
        "http://localhost:58309/api/Customers",
        user
      );
  
      debugger;
      return users;
    } catch (err) {
      return err;
    }
  };
// export const GetAllData = async () => {
//   debugger;
//   try {
//     let response = await axios.get("http://localhost:58309/api/Customers");
//     debugger;
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// };
export const GetAllData = async () => {
  debugger;
  try {
    let response = await axios.get("https://localhost:7004/api/Users");
    debugger;
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const GetOrders = async () => {
  debugger;
  try {
    let response = await axios.get("http://localhost:58309/api/Order");
    debugger;
    return response.data;
  } catch (err) {
    console.log(err);
  }
};



export const MyWeb = () => {
  let dispath = useDispatch();

  const Users = useSelector((ourStore) => {
    return ourStore.UsersReducer.Users;
  });
  const [data, setData] = useState([]);

  useEffect(async () => {
    debugger;
    const data = await GetAllData();
    dispath(GetDataUsers(data));
  }, []);

  return (
    <>
        
    </>
  );
};
