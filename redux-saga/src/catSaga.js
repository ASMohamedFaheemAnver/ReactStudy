import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getCatsFailure, getCatsFetch, getCatsSuccess } from "./catState";
// takeEvery vs takeLatest : ref: https://stackoverflow.com/questions/61984294/takeevery-and-takelatest-why-when-to-use-use-simultaneously

const fetchCatBreed = async () => {
  try {
    return await fetch("https://api.thecatapi.com/v1/breeds");
  } catch (e) {
    return e;
  }
};

function* fetchCats() {
  try {
    const cats = yield call(fetchCatBreed);
    const formattedCats = yield cats.json();
    return formattedCats.slice(0, 10);
  } catch (e) {
    throw e;
  }
}

function* workGetCatsFetch() {
  try {
    const formattedCatsShortened = yield* fetchCats();
    yield put(getCatsSuccess(formattedCatsShortened));
  } catch (e) {
    yield put(getCatsFailure());
    console.log({ e });
  }
}

function* catSaga() {
  // Combine toolkit and saga action as one
  // yield takeEvery(getCatsFetch.type, workGetCatsFetch);
  // yield takeLatest(getCatsFetch.type, workGetCatsFetch);

  // Separate saga and toolkit action types
  yield takeLatest("catSaga/workGetCatsFetch", workGetCatsFetch);
}

export default catSaga;
