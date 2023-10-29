import produce from 'immer'

const InitialState={
 
  orders:  [
        // { id: 1, IdUser: 1, dateSending: new Date("10/07/2020"), Status: 1 },
        // { id: 2, IdUser: 2, dateSending: new Date("9/08/2021"), Status: 3 },
        // { id: 3, IdUser: 1, dateSending: new Date("30/06/2023"), Status: 2 },
        // { id: 3, IdUser: 1, dateSending: new Date("07/01/2022"), Status: 1 },
      ],
      ArrStatus:[
        {id: 1,plac:"Order"},
        {id: 2,plac:"packged"},
        {id: 3,plac:"In Transit"},
        {id: 3,plac:"Deliverde"},
      ]
     
      

 }


 export const OrdersReducer = produce((state, action) => {
    
    switch (action.type) {
       
        case "GET_ORDERS_REDUC":
          debugger
            state.orders = action.payload
           
            break;
          
    }
    
}, InitialState)





