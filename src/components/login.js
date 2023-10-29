import { getNodeText } from "@testing-library/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { ourStore } from "../redax/myStor";
import { Edituser } from "../redax/action";
import { useContext } from "react";
import { ThisUserContext } from "../context/ThisUserContext";
import pic1 from '../components/pic/9855.jpg'
import { EditOrAdd } from "./Add";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { GetAllData } from "../components/head";
import { GetDataUsers } from "../redax/action";

import "./tologin.css";
import { NavUser } from "./Nav";

// import { Dialog } from "@mui/material";
export const Login = () => {

  let dispath=useDispatch();
  useEffect(async () => {
    debugger;
    const data = await GetAllData();
    console.log(data);
         dispath(GetDataUsers(data));
  }, []);

  let navigate = useNavigate();
  
  const [name,setname]=useState();
  const [pas,setpas]=useState();
  const { ThisUser, SetThisUser } = useContext(ThisUserContext);

  const [erros, setErrors] = useState({ NameErros: "" });
  const [itsnull, setitsnull] = useState(" ");
  const [flagnull, setflagnull] = useState(false);

  let obj = {};
  let mynavigte = useNavigate();
  let mydispatch = useDispatch();
  // let name = useRef();
  // let pas = useRef();
  // useEffect(() => {
  //   console.log(Users);
  //   console.log(ThisUser);
  //   debugger;
  // }, [ThisUser]);
  let dispatch=useDispatch();

  const Users = useSelector((ourStore) => {
    return ourStore.UsersReducer.Users;
  });
  let TU = { UserName: "מצב אורח" };

  let flag = false;
  const OKSubmit = (e) => {
    
    console.log(Users);
    e.preventDefault();
    debugger;
    // יחיב להכניס נתונים
    if (name == "" && pas == "") {
      setitsnull("חובה למלא את כל השדות");
    } else if (name == "" && pas != "") {
      setErrors({
        ...erros,
        NameErros: "שדה חובה ",
      });
      setflagnull(!flagnull);
    }
    // במידה ולא הוזן ערך בסיסמא
    else if (pas == "" && name != "") {
      setErrors({
        ...erros,
        PassErros: "שדה חובה ",
      });
      setflagnull(!flagnull);
    } else {
      for (let index = 0; index < Users.length; index++) {
        if (
          Users[index].UserName == name ||
          Users[index].UserPasword == pas
        )
          flag = true;
        const element = Users[index];
        if (element.UserName == name) {
          if (element.UserPasword == pas) {
            debugger;
            alert("hi " + element.UserName);
            SetThisUser(element);
            mynavigte("/HomePage");
          } else {
            setErrors({
              ...erros,
              PassErros: "סיסמא שגויה",
            });
          }
        } else if (
          element.password == pas &&
          element.name != name
        ) {
          setErrors({
            ...erros,
            NameErros: "שם משתמש שגוי ",
          });
        }
      }
      if (flag == false) alert("משתמש לא קיים");
    }
  };
  const handlpas=event=>{
  
    setpas(event.target.value)
    
  }
  const handlname=event=>{
  debugger
    setname(event.target.value)
  }
  const submit=(event)=>{
    event.preventDefault();
    debugger
  //  let x=Users.FindIndex((e)=>e.UserPasword==name);
    Users.map((ele)=>{
      if(ele.UserName==name)
          {
            if(ele.UserPasword==pas){
              alert("hi " + ele.UserName);
              SetThisUser(ele);
              mynavigte("/HomePage");

            }
             
              else
              alert("סיסמא שגויה")
          }
          else
          if(ele.UserPasword==pas)
          {
            alert("שם משתמש לא תואם סיסמא")
          }
    
      
    })
  }
  return (
    <>
    {/* <div className="dd"> */}
    
      {/* <button onClick={async () => { SetThisUser(ob) }}>context</button> */}
      {/* {console.log(ThisUser)} */}
      {ThisUser.UserName == "מצב אורח" ? (
        <>
                
          <div className="h1">-------Log In--------</div>
          <div class="allsihgap">
            <form id="formlog" onSubmit={submit}>
              {/* <label>שם: </label> */}
              <div className="formgroup">
                <div className="input">
                  <TextField
                    // ref={name}
                    id="outlined-basic"
                    label="your name"
                    variant="outlined"
                    onChange={handlname}
                  />
                </div>
                <label className="labelEroor">{erros.NameErros}</label>

                <div className="input">
                  <TextField
                    // ref={pas}
                    className="input"
                    onChange={handlpas}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
                <label>{erros.PassErros}</label>

                {flagnull && <label>{itsnull}</label>}

                <Button
                  sx={{ width: "50%", alignSelf: "center;" }}
                  variant="contained"
                  type="submit"
                >
                  אישור{" "}
                </Button>
              </div>

              <p className="p" onClick={()=>{
                  navigate("/Add");
                }}>משתמש חדש</p>
            </form>
            
          </div>
          <img className="imgg" src={pic1}></img>
        </>
        
      ) : (
        <>
        <div>
          <Button sx={{backgroundColor:'#6cd3ff'}}
            onClick={() => {
              navigate("/EditUsers");
            }}
          >
            עריכה
          </Button>
          <Button
            onClick={() => {
              SetThisUser(TU);
              window.location.reload(false);
            }}
          >
            התנתקות
          </Button>
          </div>
          <NavUser></NavUser>
        </>
      )}
     
      {/* </div> */}
    </>

  );
};
