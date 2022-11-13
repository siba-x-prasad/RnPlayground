import { combineReducers } from "redux";
const initialState = {
    account: {
        id: 0,
        emailId: "sp.dobest@gm,ail.com",
        password: "123456",
        loginStatus: false,
    },
    loggedIntime : '',
    clickedImages : []
};


const accountReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, account: {
                    id: 1,
                    emailId: action.payload.email,
                    password: action.payload.pwd,
                    loginStatus: action.payload.status,
                }
            }
        case 'LOGOUT':
            return {
                ...state, account: {
                    id: 1,
                    emailId: action.payload.email,
                    password: action.payload.pwd,
                    loginStatus: action.payload.status,
                }
            }
        default:
            return state;

    }
};

export default combineReducers({
    accounts: accountReducer
  });