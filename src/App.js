import React, { useEffect, useState } from 'react';
import './App.css';
import { OrderCheked } from './components/OredersCheked';
import { MyRoutes } from './myRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/Nav';
import { ourStore } from './redax/myStor';
import { Provider } from 'react-redux';
import { ThisUserContext } from './context/ThisUserContext';
import { MenuPopup } from './components/NavMenu';

import { MyWeb } from './components/head';
function App() {

  const [ThisUser,SetThisUser]=useState({UserName:"מצב אורח"});

  return <>
     <Provider store={ourStore}>
     <BrowserRouter>
     <div className="App">
      
      <ThisUserContext.Provider value={{ThisUser,SetThisUser}} >
           {/* <MyWeb></MyWeb> */}
           <Nav></Nav>
        <MyRoutes></MyRoutes>
        </ThisUserContext.Provider>
      </div>  
      </BrowserRouter>
      </Provider>
  </>
}

export default App;