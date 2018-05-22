export function login(name) {
  return {
    type: 'LOGGED_IN',
    payload: name,
  };
};

const initialState = {
  loggedInAs: '',
  isCreditCardHolder: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      // const newState = Object.assign({}, state, { loggedInAs: 'T$' });
      // const newState = { ...state, loggedInAs: action.payload };
      // return newState;
      return { ...state, loggedInAs: action.payload };
    default:
      return state;
  }
}

export default reducer;
