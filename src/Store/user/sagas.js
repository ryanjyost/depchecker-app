import { call, put } from 'redux-saga/effects';

function* login({ api, action }, { payload }) {
   const { code } = payload;
   try {
      const response = yield call(api.login, code);
      yield put(action.success());
   } catch (error) {
      yield put(action.failure(error));
   }
}

function* setupNewInstallation({ api, action }, { payload }) {
   const { code, installationId } = payload;
   try {
      const response = yield call(api.setupNewInstallation, installationId);
      const { installation, repos } = response.data.response;
      yield put(action.success(installation, repos.repositories));
   } catch (error) {
      yield put(action.failure(error));
   }
}

function* updateInstallationRepos({ api, action }, { payload }) {
   const { installationId, repos } = payload;
   try {
      const response = yield call(api.updateInstallationRepos, installationId, repos);
      const { installation } = response.data.response;
      yield put(action.success(installation));
   } catch (error) {
      yield put(action.failure(error));
   }
}

export default {
   login,
   setupNewInstallation,
   updateInstallationRepos
};
