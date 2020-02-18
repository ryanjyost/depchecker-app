import apisauce from 'apisauce';
import { $ApiBaseUrl } from 'Config';

/**
 * Create a module of api methods for DepChecker API
 * @returns {Object} A module/object of api methods
 */
const create = () => {
   const api = apisauce.create({
      baseURL: $ApiBaseUrl
   });

   const readPackageJSON = formData => api.post(`/read_package_json`, formData);

   const login = code => api.post(`/auth`, { code });

   const setupNewInstallation = installationId => api.post(`/installations/setup`, { installationId });

   const updateInstallationRepos = (installationId, repos) =>
      api.put(`/installations/${installationId}/repos`, { repos });

   return {
      readPackageJSON,
      login,
      setupNewInstallation,
      updateInstallationRepos
   };
};

export default create;
