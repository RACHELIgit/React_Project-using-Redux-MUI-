


export const Edituser = (user) => {
    return { type: "EDITUSRE", payload: user }
}
export const AddNewUser = (user) => {
    return { type: "ADDNEWUSER", payload: user }
}
export const GetDataUsers = (DataUsers) => {
    return { type: "GET_DATA_USERS", payload: DataUsers }
}
export const GetOrdersReduc = (Orders) => {
    return { type: "GET_ORDERS_REDUC", payload: Orders }
}
