import { all,takeEvery, takeLatest } from "redux-saga/effects"
import { handleUpdateUser } from "./Handlers/user"

function* watcherSaga() {
    yield takeEvery('UPDATE_USER', handleUpdateUser);
}

export default function* watchersRootSaga() {
    yield all ([
        watcherSaga()
    ]);
  }