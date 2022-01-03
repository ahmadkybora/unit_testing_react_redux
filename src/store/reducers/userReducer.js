import { GET_USERS } from "../actions/actionType";

// export default (state = true, action) => {
//     switch(action.type) {
//         case GET_USERS: 
//             return true;
//             // ریدیوسر حتما باید مقداری را برگرداند که در 
//            // اینجا بطور پیش فرض مقدار استیت را که فالس است بر میگرداند
//         default: 
//             return state;
//     }
// }

// در حالت پیش فرض .و اگر استیت فالس باید و همچنین در کیس GET_USERS مقدار true را برمیگرداند
// export default (state = false, action) => {
//     switch(action.type) {
//         case GET_USERS: 
//             return true;
//         default: 
//             return state;
//     }
// }

export default (state='', action) => {
    // در صورتی که مقدار false برگرداند
    return state;
}