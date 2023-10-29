import { useContext, useEffect } from "react"
import { ThisUserContext } from "../context/ThisUserContext"
import "./home.css";


export const HomePage=()=>{
const {ThisUser} =useContext(ThisUserContext);
useEffect(()=>{
    console.log(ThisUser);
},[ThisUser])
    return(
        
        <>
        <div className="dd">
        <p>{ThisUser.name}</p>
        </div>
        </>
    )
}