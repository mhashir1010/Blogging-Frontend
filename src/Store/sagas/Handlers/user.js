import { call , put } from 'redux-saga/effects';
import { updateUser } from '../../Actions/UserActions';
import { requestUpdateUser } from '../Requests/user';

export function* handleUpdateUser(action){
    console.log(action);
    try {
        const response = yield call(requestUpdateUser(action.payload));
        debugger;
        console.log(response);
        // yield put(call(updateUser));
    } catch (error) {
        console.log(error);
    }
}