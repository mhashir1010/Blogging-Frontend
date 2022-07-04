import { configureStore } from "@reduxjs/toolkit";
import {  combineReducers } from "redux"
import { userManagment as user } from './Reducers/Reducers'
const reducers = {
    user,
};

const rootReducers = combineReducers(reducers);

export  const ReduxStore  = configureStore({reducer : rootReducers});