import { generateRouteMap } from '../routes';
import { routeConfigs, expectedRouteMapOutput } from './fixtures';

describe('generateRouteMap()', function() {
   test('should generate expected route path map', function() {
      const { pathMap } = generateRouteMap(routeConfigs);
      expect(pathMap).toEqual(expectedRouteMapOutput.pathMap);
   });
});
