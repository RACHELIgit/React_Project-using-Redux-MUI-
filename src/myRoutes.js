import { Route, Routes,NavLink } from "react-router-dom"

import { OrderCheked } from "./components/OredersCheked"
import { Login } from "./components/login"
import { NavUser } from "./components/Nav"
import { MyWeb } from "./components/head"
import { HomePage } from "./components/HomePage"
import { MenuPopup } from "./components/NavMenu"
import { Add } from "./components/Add"
// import { Edit } from "./components/Edit"
import { EditUsers } from "./components/EditUsers"
export const MyRoutes = () => {
    return <>
        {/* תהליךל קביעת הראוטינג-הניתובים במערכת */}
        <Routes>
        <Route pathe="/" element={<HomePage />} ></Route>
           <Route path="EditUsers" element={<EditUsers />}></Route>
          <Route path="MenuPopup" element={<MenuPopup />}></Route>
            <Route path="HomePage" element={<HomePage />}></Route>
            {/* <Route pathe="Home" element={<Home />} ></Route> */}
            <Route path="OrderCheked" element={<OrderCheked />}></Route>
            <Route path="Login" element={<Login />}> </Route>
            <Route path="Add" element={<Add />}></Route>
            <Route path="Nuv/NuvUser" element={<NavUser />}></Route>

        </Routes>
    </>
}