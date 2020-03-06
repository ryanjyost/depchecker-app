import update from 'immutability-helper';
import moment from 'moment';
import { createSagaActions } from '../actionGenerators';
import reduceReducers from '../reduceReducers';
import persist from '../persist';

/**
 * Initial state for this section of the store
 * @type {Object}
 */
const InitialState = {
   fetching: false,
   installation: null,
   repos: [],
   isAuthenticated: false,
   error: null
};

/**
 * Login a user
 */
const login = createSagaActions(
   'LOGIN',
   {
      request: code => ({ code }),
      success: response => ({ response }),
      failure: error => ({ error })
   },
   'user'
);

function loginReducer(state = InitialState, action) {
   const { payload } = action;
   switch (action.type) {
      case login.types.request:
         return update(state, {
            fetching: { $set: true },
            error: { $set: null },
            isAuthenticated: { $set: false }
         });
      case login.types.success:
         return update(state, {
            fetching: { $set: false },
            isAuthenticated: { $set: true }
         });

      case login.types.failure:
         return update(state, {
            fetching: { $set: false },
            error: { $set: `Error occurred` },
            isAuthenticated: { $set: false }
         });

      case LOGOUT:
         return update(state, {
            fetching: { $set: false },
            isAuthenticated: { $set: false },
            user: { $set: null }
         });
      default:
         return state;
   }
}

/**
 * Logout a user
 */
const LOGOUT = 'user/LOGOUT';
const logout = () => ({ type: LOGOUT });

function logoutReducer(state = InitialState, action) {
   const { payload } = action;
   switch (action.type) {
      case LOGOUT:
         return update(state, {
            fetching: { $set: false },
            isAuthenticated: { $set: false },
            user: { $set: null }
         });
      default:
         return state;
   }
}

const setupNewInstallation = createSagaActions(
   'NEW_INSTALLATION',
   {
      request: (code, installationId) => ({ code, installationId }),
      success: (installation, repos) => ({
         installation,
         repos: repos.sort((a, b) => {
            a = moment(a).unix();
            b = moment(b).unix();

            if (a > b) return 1;
            if (b > a) return -1;
            return 0;
         })
      }),
      failure: error => ({ error })
   },
   'user'
);

function setupNewInstallationReducer(state = InitialState, action) {
   const { payload } = action;
   switch (action.type) {
      case setupNewInstallation.types.request:
         return update(state, {
            fetching: { $set: true },
            error: { $set: null }
         });

      case setupNewInstallation.types.success:
         return update(state, {
            fetching: { $set: false },
            installation: { $set: payload.installation },
            repos: { $set: payload.repos }
         });

      case setupNewInstallation.types.failure:
         return update(state, {
            fetching: { $set: false },
            error: { $set: `Error occurred` }
         });
      default:
         return state;
   }
}

const updateInstallationRepos = createSagaActions(
   'UPDATE_INSTALLATION_REPOS',
   {
      request: (installationId, repos) => ({ installationId, repos }),
      success: installation => ({
         installation
      }),
      failure: error => ({ error })
   },
   'user'
);

function updateInstallationReposReducer(state = InitialState, action) {
   const { payload } = action;
   switch (action.type) {
      case updateInstallationRepos.types.request:
         return update(state, {
            fetching: { $set: true },
            error: { $set: null }
         });

      case updateInstallationRepos.types.success:
         return update(state, {
            fetching: { $set: false },
            installation: { $set: payload.installation }
         });

      case updateInstallationRepos.types.failure:
         return update(state, {
            fetching: { $set: false },
            error: { $set: `Error occurred` }
         });
      default:
         return state;
   }
}

export const actions = {
   login,
   logout,
   setupNewInstallation,
   updateInstallationRepos
};

export default persist(
   'user',
   [],
   reduceReducers(
      InitialState,
      loginReducer,
      logoutReducer,
      setupNewInstallationReducer,
      updateInstallationReposReducer
   )
);
