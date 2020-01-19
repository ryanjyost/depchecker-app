import React from 'react';
import { Typography } from 'antd';
import { MarketingLanding, Home, BasicStart, BasicRepoUrl, BasicResults, BasicUploadFile, BasicPasteCode } from 'Components/pages';
import { RootRouteWithSubRoutes } from 'Components/routes';
const { Title } = Typography;

/**
 * An array of route configs, with nested objects/arrays in the same structure of the app's routes
 */
const ROUTES = [
   { key: 'ROOT', path: '/', title: 'Landing', component: MarketingLanding, exact: true },
   {
      key: 'BASIC_ROOT',
      path: '/basic',
      title: 'Basic',
      component: RootRouteWithSubRoutes,
      routes: [
         { key: 'BASIC_INDEX', path: '/basic', title: 'Basic Start', component: Home, exact: true },
         { key: 'BASIC_METHOD', path: '/basic/method', title: 'Basic', component: BasicStart, exact: true },
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
         { key: 'DIRECT_RESULTS', path: '/basic/:owner/:repo', title: 'Direct Repo Results', component: BasicResults, exact: true }
      ]
   }
];

export default ROUTES;
