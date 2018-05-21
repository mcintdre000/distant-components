import { createStore } from 'redux';

const initialState = {
  loggedInAs: 'T$',
  isCreditCardHolder: true,
};

const reducer = state => state;

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
