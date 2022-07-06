import { configureStore } from "@reduxjs/toolkit";
import {  applyMiddleware, combineReducers } from "redux";
import { userManagment as user } from './Reducers/Reducers';
import createSagaMiddleware from 'redux-saga';
import watchersRootSaga from "./sagas/rootSaga";

const reducers = {  user, };

const rootReducers = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();
const runSagaMiddleware = () => sagaMiddleware.run(watchersRootSaga);


// const ReduxStore = ()=>{
//     const ReduxStore = configureStore( { reducer : rootReducers },{},{ middleware: applyMiddleware(sagaMiddleware)} );

//     // runSagaMiddleware();

//     return ReduxStore;
// }

// export default ReduxStore;



const ReduxStore  = configureStore({reducer : rootReducers ,  middleware : [sagaMiddleware]});

runSagaMiddleware();
export default ReduxStore;

// sagaMiddleware.run(watchersRootSaga);
