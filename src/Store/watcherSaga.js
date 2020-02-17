import { takeLatest, takeLeading, all } from 'redux-saga/effects';
import createSocket from 'Services/Socket';
import createDepCheckerApi from 'Services/DepChecker';
import { BasicActions, UserActions } from 'Store';

// Sagas
import UserSagas from 'Store/user/sagas';
import BasicSagas from 'Store/basic/sagas';

const Socket = createSocket();
const DepChecker = createDepCheckerApi();

export default function*() {
   yield all([
      generateWatcher(UserActions.login, UserSagas.login, DepChecker),
      generateWatcher(UserActions.setupNewInstallation, UserSagas.setupNewInstallation, DepChecker),
      generateWatcher(BasicActions.analyzeRepoUrl, BasicSagas.analyzeRepoUrl, Socket),
      generateWatcher(BasicActions.analyzePackageJSON, BasicSagas.analyzePackageJSON, Socket),
      generateWatcher(BasicActions.readPackageJSON, BasicSagas.readPackageJSON, DepChecker)
   ]);
}

function generateWatcher(action, saga, api) {
   return takeLeading(action.types.request, saga, {
      api,
      action
   });
}
