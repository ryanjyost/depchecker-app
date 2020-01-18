import { convertJSONStringToJs } from '../';
import { examplePackageJson, examplePackageJsonString } from './fixtures';

describe('convertJSONStringToJs()', function() {
   test('should parse a valid JSON string', function() {
      expect(convertJSONStringToJs(examplePackageJsonString)).toEqual(examplePackageJson);
   });
});
