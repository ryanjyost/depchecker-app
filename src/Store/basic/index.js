import update from 'immutability-helper';
import { createSagaActions } from '../actionGenerators';
import reduceReducers from '../reduceReducers';
import persist from '../persist';

/**
 * Initial state for this section of the store
 * @type {Object}
 */
const InitialState = {
   dependencies: [],
   packageJSON: null,
   summary: null,
   fetching: false,
   status: null,
   error: null
};

/**
 * Analyze repo with a url
 */
const analyzeRepoUrl = createSagaActions(
   'ANALYZE_REPO_URL',
   {
      request: url => ({ url }),
      success: () => ({}),
      failure: error => ({ error })
   },
   'basic'
);

function analyzeRepoUrlReducer(state = InitialState, action) {
   const { payload } = action;
   switch (action.type) {
      case analyzeRepoUrl.types.request:
         return update(state, {
            dependencies: { $set: [] },
            packageJSON: { $set: null },
            summary: { $set: null },
            fetching: { $set: true },
            status: { $set: 'Fetching dependencies for the provided repo...' },
            error: { $set: null }
         });
      // case analyzeRepoUrl.types.success:
      //    return update(state, {
      //       // fetching: { $set: false }
      //    });
      case analyzeRepoUrl.types.failure:
         return update(state, {
            fetching: { $set: false },
            error: { $set: `Error occurred` }
         });
      default:
         return state;
   }
}

/**
 * Analyze repo with a package json
 */
const analyzePackageJSON = createSagaActions(
   'ANALYZE_PACKAGE_JSON',
   {
      request: packageJSON => ({ packageJSON }),
      success: () => ({}),
      failure: error => ({ error })
   },
   'basic'
);

function analyzePackageJSONReducer(state = InitialState, action) {
   const { payload } = action;
   switch (action.type) {
      case analyzePackageJSON.types.request:
         return update(state, {
            dependencies: { $set: [] },
            packageJSON: { $set: payload.packageJSON },
            summary: { $set: null },
            fetching: { $set: true },
            error: { $set: null }
         });
      // case analyzePackageJSON.types.success:
      //    return update(state, {
      //       // fetching: { $set: false }
      //    });
      case analyzePackageJSON.types.failure:
         return update(state, {
            fetching: { $set: false },
            error: { $set: `Error occurred` }
         });
      default:
         return state;
   }
}

/**
 * Read json file and return as object
 */
const readPackageJSON = createSagaActions(
   'READ_PACKAGE_JSON',
   {
      request: formData => ({ formData }),
      success: packageJSON => ({ packageJSON }),
      failure: error => ({ error })
   },
   'basic'
);

function readPackageJSONReducer(state = InitialState, action) {
   const { payload } = action;
   switch (action.type) {
      case readPackageJSON.types.request:
         return update(state, {
            fetching: { $set: true },
            error: { $set: null }
         });
      case readPackageJSON.types.success:
         return update(state, {
            fetching: { $set: false },
            packageJSON: { $set: payload.packageJSON }
         });
      case readPackageJSON.types.failure:
         return update(state, {
            fetching: { $set: false },
            error: { $set: `Error occurred` }
         });
      default:
         return state;
   }
}

/**
 * Save single dep analysis data from socket
 */
const UPDATE_SINGLE_DEP = 'basic/UPDATE_SINGLE_DEP';
const updateSingleDep = data => ({ type: UPDATE_SINGLE_DEP, data });

/**
 * Save single dep analysis data from socket
 */
const UPDATE_PACKAGE_JSON = 'basic/UPDATE_PACKAGE_JSON';
const updatePackageJSON = packageJSON => ({ type: UPDATE_PACKAGE_JSON, packageJSON });

/**
 * Save single dep analysis data from socket
 */
const UPDATE_SUMMARY = 'basic/UPDATE_SUMMARY';
const updateSummary = data => ({ type: UPDATE_SUMMARY, summary: data });

function reducer(state = InitialState, action) {
   switch (action.type) {
      case UPDATE_SINGLE_DEP:
         return update(state, {
            dependencies: { $push: [action.data] }
         });
      case UPDATE_PACKAGE_JSON:
         return update(state, {
            packageJSON: { $set: action.packageJSON }
         });
      case UPDATE_SUMMARY:
         return update(state, {
            summary: { $set: action.summary },
            fetching: { $set: false }
         });
      default:
         return state;
   }
}

export const actions = {
   analyzeRepoUrl,
   analyzePackageJSON,
   updateSingleDep,
   updatePackageJSON,
   updateSummary,
   readPackageJSON
};

/**
 * This file's reducer functions will be combined and
 * manage one top-level property/section of the redux Store (SECTION_OF_REDUX_STATE)
 *
 * Use the whitelist (second arg of "persist" function) to specify properties in this reducer's
 * state to save to localStorage and hydrate when the app fires up a new session
 */
export default persist(
   'deps',
   ['dependencies', 'packageJSON', 'summary'],
   reduceReducers(InitialState, reducer, analyzeRepoUrlReducer, analyzePackageJSONReducer, readPackageJSONReducer)
);
