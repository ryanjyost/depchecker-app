export function convertJSONStringToJs(jsonString) {
   try {
      return JSON.parse(jsonString);
   } catch (e) {
      console.warn('convertJSONStringToJs', e);
      return {};
   }
}
