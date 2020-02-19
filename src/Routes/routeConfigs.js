import React from 'react';
import { Typography } from 'antd';
import {
   PremiumLanding,
   Home,
   BasicStart,
   BasicRepoUrl,
   BasicResults,
   BasicUploadFile,
   BasicPasteCode,
   FullAnalysisOptions,
   Login,
   AuthRedirect,
   SelectRepos,
   SetupComplete
} from 'Components/pages';
import { RootRouteWithSubRoutes } from 'Components/routes';
const { Title } = Typography;

/**
 * An array of route configs, with nested objects/arrays in the same structure of the app's routes
 */
const ROUTES = [
   { key: 'INDEX', path: '/', title: 'Analysis', component: FullAnalysisOptions, exact: true },
   { key: 'RESULTS', path: '/analysis', title: 'Results', component: BasicResults, exact: true },
   { key: 'LOGIN', path: '/login', title: 'Log In', component: Login, exact: true },
   { key: 'AUTH_REDIRECT', path: '/auth', title: 'Auth', component: AuthRedirect },
   { key: 'SETUP_REPOS', path: '/setup_repos', title: 'Setup Repos', component: SelectRepos, exact: true },
   { key: 'SETUP_COMPLETE', path: '/setup_complete', title: 'Setup Complete', component: SetupComplete, exact: true },
   { key: 'LANDING_PREMIUM', path: '/premium', title: 'Premium', component: PremiumLanding, exact: true },
   {
      key: 'BASIC_ROOT',
      path: '/basic',
      title: 'Basic',
      component: RootRouteWithSubRoutes,
      routes: [
         // { key: 'BASIC_INDEX', path: '/basic', title: 'Basic Start', component: Home, exact: true },
         { key: 'BASIC_INDEX', path: '/basic', title: 'Basic', component: BasicStart, exact: true },
         {
            key: 'BASIC_REPO_URL',
            path: '/basic/repo-url',
            title: 'Basic Repo Url',
            component: BasicRepoUrl,
            exact: true
         },
         {
            key: 'BASIC_UPLOAD',
            path: '/basic/upload',
            title: 'Basic Upload',
            component: BasicUploadFile,
            exact: true
         },
         {
            key: 'BASIC_CODE_PASTE',
            path: '/basic/code',
            title: 'Basic Paste Code',
            component: BasicPasteCode,
            exact: true
         },
         { key: 'BASIC_RESULTS', path: '/basic/results', title: 'Basic Results', component: BasicResults, exact: true },
         {
            key: 'DIRECT_RESULTS',
            path: '/basic/:owner/:repo',
            title: 'Direct Repo Results',
            component: BasicResults,
            exact: true
         }
      ]
   }
];

export default ROUTES;
