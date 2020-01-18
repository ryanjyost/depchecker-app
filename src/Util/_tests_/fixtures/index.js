export const routeConfigs = [
   {
      key: 'BASIC_INDEX',
      path: '/basic',
      title: 'Basic',
      exact: true
   },
   {
      key: 'BASIC_REPO_URL',
      path: '/basic/repo-url',
      title: 'Basic Repo Url',
      exact: true
   },
   {
      key: 'BASIC_UPLOAD',
      path: '/basic/upload',
      title: 'Basic Upload',
      exact: true
   },
   {
      key: 'BASIC_CODE_PASTE',
      path: '/basic/code',
      exact: true
   },
   {
      key: 'BASIC_RESULTS',
      path: '/basic/results',
      title: 'Basic Results',
      exact: true
   }
];

export const expectedRouteMapOutput = {
   pathMap: {
      BASIC_INDEX: '/basic',
      BASIC_REPO_URL: '/basic/repo-url',
      BASIC_UPLOAD: '/basic/upload',
      BASIC_CODE_PASTE: '/basic/code',
      BASIC_RESULTS: '/basic/results'
   },
   configMap: {
      BASIC_INDEX: {
         key: 'BASIC_INDEX',
         path: '/basic',
         title: 'Basic',
         exact: true
      },
      BASIC_REPO_URL: {
         key: 'BASIC_REPO_URL',
         path: '/basic/repo-url',
         title: 'Basic Repo Url',
         exact: true
      },
      BASIC_UPLOAD: {
         key: 'BASIC_UPLOAD',
         path: '/basic/upload',
         title: 'Basic Upload',
         exact: true
      },
      BASIC_CODE_PASTE: {
         key: 'BASIC_CODE_PASTE',
         path: '/basic/code',
         title: 'Basic Paste Code',
         exact: true
      },
      BASIC_RESULTS: {
         key: 'BASIC_RESULTS',
         path: '/basic/results',
         title: 'Basic Results',
         exact: true
      }
   }
};

export const examplePackageJson = {
   name: 'DepChecker Example',
   version: '1.0.0',
   private: true,
   devDependencies: {
      'react-scripts': '1.1.4'
   },
   dependencies: {
      axios: '^0.18.0',
      bootstrap: '^3.3.7',
      dotenv: '^6.2.0',
      numeral: '^2.0.6',
      moment: '^2.23.0',
      oauth: '^0.9.15',
      react: '^15.4.1',
      'react-bootstrap': '^0.30.7',
      'react-dom': '^15.4.1',
      'react-dropzone': '8.0.0',
      'react-redux': '^5.0.2',
      'react-router': '^3.0.0',
      'react-simple-storage': '^1.0.2',
      'react-table': '^6.8.6',
      redux: '^3.6.0',
      underscore: '^1.9.1'
   },
   scripts: {
      start: 'react-scripts start',
      build: 'react-scripts build',
      test: 'react-scripts test --env=jsdom',
      eject: 'react-scripts eject'
   }
};

export const examplePackageJsonString =
   '{\n' +
   '   "name": "DepChecker Example",\n' +
   '   "version": "1.0.0",\n' +
   '   "private": true,\n' +
   '   "devDependencies": {\n' +
   '   "react-scripts": "1.1.4"\n' +
   '},\n' +
   '   "dependencies": {\n' +
   '   "axios": "^0.18.0",\n' +
   '      "bootstrap": "^3.3.7",\n' +
   '      "dotenv": "^6.2.0",\n' +
   '      "numeral": "^2.0.6",\n' +
   '      "moment": "^2.23.0",\n' +
   '      "oauth": "^0.9.15",\n' +
   '      "react": "^15.4.1",\n' +
   '      "react-bootstrap": "^0.30.7",\n' +
   '      "react-dom": "^15.4.1",\n' +
   '      "react-dropzone": "8.0.0",\n' +
   '      "react-redux": "^5.0.2",\n' +
   '      "react-router": "^3.0.0",\n' +
   '      "react-simple-storage": "^1.0.2",\n' +
   '      "react-table": "^6.8.6",\n' +
   '      "redux": "^3.6.0",\n' +
   '      "underscore": "^1.9.1"\n' +
   '},\n' +
   '   "scripts": {\n' +
   '   "start": "react-scripts start",\n' +
   '      "build": "react-scripts build",\n' +
   '      "test": "react-scripts test --env=jsdom",\n' +
   '      "eject": "react-scripts eject"\n' +
   '}\n' +
   '}';
