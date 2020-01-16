import { call, put } from 'redux-saga/effects';

function* analyzeRepoUrl({ api, action }, { payload }) {
   try {
      yield call(api.analyzeRepoUrl, payload.url);
   } catch (error) {
      yield put(action.failure(error));
   }
}

function* analyzePackageJSON({ api, action }, { payload }) {
   try {
      yield call(api.analyzePackageJSON, payload.packageJSON);
   } catch (error) {
      yield put(action.failure(error));
   }
}

function* readPackageJSON({ api, action }, { payload }) {
   try {
      const response = yield call(api.readPackageJSON, payload.formData);
      yield put(action.success(response.data))
   } catch (error) {
      yield put(action.failure(error));
   }
}

export default {
   analyzeRepoUrl,
   analyzePackageJSON,
   readPackageJSON
};
