/**
 * Make route paths accessible by single layer map of keys to avoid hard coding Routes in links
 * @param {Array} routes
 * @returns {Object} objects that map route keys to path (pathMap) and route configs (configMap)
 */
export function generateRouteMap(routes) {
   let pathMap = {},
      configMap = {};
   for (let route of routes) {
      const routeCopy = { ...route };

      // no need for the component
      delete routeCopy.component;

      pathMap[route.key] = routeCopy.path;
      configMap[route.key] = routeCopy;

      // nested routes? keep generating
      if (routeCopy.routes) {
         const { pathMap: nestedPaths, configMap: nestedConfigMap } = generateRouteMap(routeCopy.routes);
         pathMap = { ...pathMap, ...nestedPaths };
         configMap = { ...configMap, ...nestedConfigMap };
      }
   }

   return { pathMap, configMap };
}
