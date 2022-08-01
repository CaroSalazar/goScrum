// import { applyMiddleware, createStore } from "redux"
// import thunk from "redux-thunk"
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from "./reducers/rootReducer"

// export const store = createStore(
//    rootReducer,
//    composeWithDevTools(applyMiddleware(thunk))
// )

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/rootReducer';

export const store = configureStore({ reducer: rootReducer });