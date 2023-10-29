import produce from 'immer'

const InitialState={
 
    Users:  [ ],     
   
 };

 export const UsersReducer = produce((state, action) => {

   switch (action.type) {
    case "EDITUSRE":
      
      let x=-1;
      state.Users.map((ele,i)=>{
        console.log(ele);
        if(ele.id==action.payload.id)
        x=i;
      })
     
      if(x!=-1){
        state.Users[x].name=action.payload.name;
        state.Users[x].password=action.payload.password;
        state.Users[x].adress=action.payload.adress;
        state.Users[x].phone=action.payload.phone;
      } 
      break;
    case "ADDNEWUSER":
      state.Users.push(action.payload)

      case "GET_DATA_USERS":
        debugger
        state.Users=(action.payload)
        console.log(state.Users);
        break;

      break;
      default:
        break;
}
  
 
}, InitialState)


