const initState = {
  userId: "",
  isLoggedIn: false,
};

interface Action {
  type: string;
  payload?: string;
}

const authReducer = (action: Action, state = initState) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { userId: action.payload, isLoggedIn: true };
    case "LOGIN_ERROR":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
