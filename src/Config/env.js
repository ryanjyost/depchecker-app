/*
These are non-secret environment configs
 */

const common = {
};

const LOCAL = {
   envDisplay: 'Local',
   clientUrl: 'http://localhost:3000',
   apiUrl: 'http://localhost:5000'
};

const DEV = {
   envDisplay: 'Development'
};

const STAGING = {
   envDisplay: 'Staging',
   apiUrl: 'https://depchecker-api-staging.herokuapp.com'
};

const PRODUCTION = {
   envDisplay: 'Production',
   apiUrl: 'https://depchecker-api.herokuapp.com'
};

export const local = { ...common, ...LOCAL };
export const dev = { ...common, ...DEV };
export const staging = { ...common, ...STAGING };
export const prod = { ...common, ...PRODUCTION };
