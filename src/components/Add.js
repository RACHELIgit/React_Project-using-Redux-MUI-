// import { Edit } from "@material-ui/icons";
// import { Alert } from "@material-ui/lab";
// import { useContext, useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router";
// import { ThisUserContext } from "../context/ThisUserContext"
// import { putUser } from "./head";
// import { Edituser } from "../redax/action";
// import { AddNewUser } from "../redax/action";
// import { GetAllData } from "./head";
// import { GetDataUsers } from "../redax/action";
// export const Add=()=>{
  
//     const Users=useSelector((ourStore)=>{
//         return ourStore.UsersReducer.Users
//     })
//     const{ThisUser,SetThisUser}=useContext(ThisUserContext);
//     const [erros, setErrors] = useState({ NameErros: "" });
    
//     const [userDetails, setuserDetails] = useState({} );
     
//        ThisUser.name!="מצב אורח"?? setuserDetails(ThisUser);
      
//       const userName = useRef();
//       const userPass = useRef();

//  const numData = 2;    
// let dispath=useDispatch();
// let navigate=useNavigate();

// useEffect(()=>{
// console.log(ThisUser);
// console.log(userDetails);
// },[])


//  const validateChar = (char) => {
//     debugger;
//     if (char.key > "A" && char.key < "Z") {
//       setErrors({
//         ...erros,
//         NameErros: "Correct!",
//       });
//       console.log(erros);
//     } else {
//       setErrors({
//         ...erros,
//         NameErros: "invalid!",
//       });
//       console.log(erros);
//     }
//   };

//   //פונקצית בדיקת תקינות של שדה שם
//   //דוגמא עם תפיסת האירוע
//   const validateName = (e) => {
//     e.preventDefault();
//     if(e.target.value==""){
//       setErrors({ ...erros, NameErros: "שדה חובה" });
//     }
//     else if (e.target.value.length >= 8 ) {
//       setErrors({ ...erros, NameErros: "ארוך מידי" });
//       setuserDetails({ ...userDetails, UserName: e.target.value });
//     } else{
//       setErrors({ ...erros, NameErros:"✔" });
//       setuserDetails({ ...userDetails, UserName: userName.current.value });
//     }
     
//   };

//   //פונקציהה עם בדיקת תקינות של מייל
//   //דוגמא עם גישה ל-USEREF
//   // const validateEmail = () => {
//   //   // במידה ושדה המיייל נותר ריק
//   //   if (!userEmail.current.value) {
//   //     setErrors({
//   //       ...erros,
//   //       EmailErros: "שדה חובה ",
//   //     });
//   //     // האם הוא בתבנית הנכונה
//   //   } else if (
//   //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userEmail.current.value)
//   //   ) {
//   //     setErrors({
//   //       ...erros,
//   //       EmailErros: "כתובת מייל לא חוקית ",
//   //     });
//   //   } else {
//   //     setErrors({
//   //       ...erros,
//   //       EmailErros: "✔",
//   //     });
//   //     setuserDetails({ ...userDetails, email: userEmail.current.value });
//   //   }
//   // };

//   //פונקציה עם בדיקת תקינות של סיסמה
//   const validatePass = () => {
//     let passw = /^[A-Za-z]\w{7,14}$/;
//     if (userPass.current.value.match(passw)) {
//       setErrors({
//         ...erros,
//         PassErros: "✔",
//       });
//       setuserDetails({ ...userDetails, UserPasword: userPass.current.value });
//     } else {
//       setErrors({
//         ...erros,
//         PassErros:
//         "סיסמא שגויה"
//       });
//     }
//   };
  
//   const finishForm = (e) => {
    
//     debugger
//      e.preventDefault();
//      console.log(userDetails);
//      //בדיקה האם כל השדות מולאו באופן תקין
//      //יש לדאוג למקרה קצה- טופס עריכה!@!!!!!!!!!!!!!
     
//      if (Object.keys(userDetails).length == numData)
// {

//     // setuserDetails({...userDetails,id:Users[Users.length-1].id+1});
//     // dispath(AddNewUser(userDetails));
//     // debugger
//     putUser(userDetails);
//     const c = async () => {
//       const data = await GetAllData();
//       dispath(GetDataUsers(data));
//     };
//     c();
//     SetThisUser(userDetails);
//     console.log(userDetails);
//      navigate("/HomePage") 
   
// }
    
//    };
 

//    return<>

// <div id="formnew">
//       <form  onSubmit={(e) => finishForm(e)}>
//         {/* { userDetails=={} ? <h1>משתמש חדש</h1> :  <h1>עריכה</h1>} */}

//         <label>
//           הכנס שם :
//           <input
//             type="text"
//             ref={userName}
//           //  value={userDetails.name} 
//             placeholder=" עד 8 אותיות "
//             // value={myUser.Name}
//             // onKeyPress={(e) => validateChar(e)}
//             onChange={(e) => validateName(e)}
//           />
//         </label>
//         <label style={{ color: "black" }}>{erros.NameErros}</label>

       
//         <label>
//          הכנס סיסמא:
//           <input
//             type="password"
//             // value={userDetails.UserPasword}
//             ref={userPass}
//             onChange={validatePass}
//             placeholder="סיסמא בת 7-16 ספרות ואות גדולה  "
//           />
//         </label>
//         <label>{erros.PassErros}</label>

//         <input type="submit" />
//       </form>
// </div>


//    </>


// }
import { Edit, SendRounded } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ThisUserContext } from "../context/ThisUserContext";
import { postUser } from "../components/head";
import { Edituser } from "../redax/action";
import { GetAllData } from "../components/head";
import { GetDataUsers } from "../redax/action";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import pic1 from '../components/pic/edit.png'
import { putUser } from "./head";


import './edit.css';
export const Add = () => {
  let dispatch = useDispatch();
  const Users = useSelector((ourStore) => {
    return ourStore.UsersReducer.Users;
  });

  const { ThisUser, SetThisUser } = useContext(ThisUserContext);
  debugger;
  const [erros, setErrors] = useState({ NameErros: "" });

  const [userDetails, setuserDetails] = useState({ ...ThisUser });

  useEffect(() => {
    console.log(ThisUser);
    console.log(userDetails);
  });



 

  debugger;
  ThisUser.name != "מצב אורח" ?? setuserDetails(ThisUser);

  const userName = useRef();
  const userEmail = useRef();
  const userPass = useRef();

  const numData = 2;
  let dispath = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    console.log(ThisUser);
    console.log(userDetails);
  }, []);

  const validateChar = (char) => {
    debugger;
    if (char.key > "A" && char.key < "Z") {
      setErrors({
        ...erros,
        NameErros: "Correct!",
      });
      console.log(erros);
    } else {
      setErrors({
        ...erros,
        NameErros: "invalid!",
      });
      console.log(erros);
    }
  };

  //פונקצית בדיקת תקינות של שדה שם
  //דוגמא עם תפיסת האירוע
  const validateName = event => {
    debugger;
    event.preventDefault();
    if (event.target.value == "") {
      setErrors({ ...erros, NameErros: "שדה חובה" });
    }
   else {
      setErrors({ ...erros, NameErros: "✔" });
      setuserDetails({ ...userDetails, UserName: event.target.value });
    }
  };

  //פונקציהה עם בדיקת תקינות של מייל
  //דוגמא עם גישה ל-USEREF

  //פונקציה עם בדיקת תקינות של סיסמה
  const validatePass = event => {
    let passw = /^[A-Za-z]\w{7,14}$/;
    if (event.target.value.match(passw)) {
      setErrors({
        ...erros,
        PassErros: "✔",
      });
      setuserDetails({ ...userDetails, UserPasword: event.target.value });
    } else {
      setErrors({
        ...erros,
        PassErros: "X",
      });
    }
  };

  const submit = (e) => {
    debugger;
    e.preventDefault();
    console.log(userDetails);
    //בדיקה האם כל השדות מולאו באופן תקין
    //יש לדאוג למקרה קצה- טופס עריכה!@!!!!!!!!!!!!!

    if (Object.keys(userDetails).length == numData) {
      putUser(userDetails);
      const c = async () => {
        const data = await GetAllData();
        dispath(GetDataUsers(data));
      };
      c();
      SetThisUser(userDetails);
      console.log(userDetails);
      alert("שם משתמש התווסף בהצלחה")
       navigate("/HomePage") 
    }
  };
   const [flagnull,setflagnull]=useState(false);
   const [itsnull,setitsnull]=useState('שדה חובה')
   let password=ThisUser.UserPasword
  return (
   <>

    <div className="h1">Sighn In</div>
       <div className="editDiv">
    <img className="editimg" src={pic1}></img>
    <div class="wa">
   
      <form id="formlog" onSubmit={submit}>

        {/* <label>שם: </label> */}
        <div className="formgroup">
          <div className="input">
            <TextField
              // ref={name}
              id="outlined-basic"
              label="השם שלך"
              placeholder={userDetails.UserName}
              variant="outlined"
              onChange={validateName}
            />
             <label style={{color:'#8edf36',fontFamily:'Almoni Neue DL 4.0 AAA'}} className="labelEroor">{erros.NameErros}</label>
          </div>

          <div className="input">
        
          <TextField
              // ref={name}
              id="outlined-basic"
              label="הסיסמא שלך"
              placeholder={password}
              variant="outlined"
              onChange={validatePass}
            /> 
           
          </div>
          <label style={{color:'#8edf36',fontFamily:'Almoni Neue DL 4.0 AAA'}}>{erros.PassErros}</label>

          {flagnull && <label>{itsnull}</label>}

          <Button
            sx={{ width: "50%", alignSelf: "center;",fontFamily:'Almoni Neue DL 4.0 AAA' }}
            variant="contained"
            type="submit"
          >
            אישור{" "}
          </Button>
        </div>

       
      </form>
      
    </div>
    </div>
  
    </>
  );
};
