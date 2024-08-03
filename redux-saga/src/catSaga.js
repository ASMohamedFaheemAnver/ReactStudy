import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getCatsFailure, getCatsFetch, getCatsSuccess } from "./catState";
// takeEvery vs takeLatest : ref: https://stackoverflow.com/questions/61984294/takeevery-and-takelatest-why-when-to-use-use-simultaneously

function* workGetCatsFetch() {
  try {
    const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formattedCatsShortened));
  } catch (e) {
    yield put(getCatsFailure());
    console.log({ e });
  }
}

function* catSaga() {
  yield takeEvery(getCatsFetch.type, workGetCatsFetch);
  // yield takeLatest(getCatsFetch.type, workGetCatsFetch);
}

export default catSaga;
