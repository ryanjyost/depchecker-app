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

   /**
    * Get something
    * @returns {Promise} The response from the request
    */
   const readPackageJSON = (formData) => api.post(`/read_package_json`, formData);

   return {
      readPackageJSON
   };
};

export default create;
