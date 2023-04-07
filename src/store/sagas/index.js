import { fork, put, all, takeLatest } from "redux-saga/effects";
import { getPhotosSuccess } from "../reducers";

function* getPhotosWorkerSaga() {
  try {
    const result = yield fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = yield result.json();
    yield put(getPhotosSuccess(photos));
  } catch (e) {
    console.log(e);
  }
}

function* getPhotosWatcherSaga() {
  yield takeLatest("GET_PHOTOS", getPhotosWorkerSaga);
}

const sagas = [fork(getPhotosWatcherSaga)];

export default function* rootSaga() {
  yield all([...sagas]);
}
