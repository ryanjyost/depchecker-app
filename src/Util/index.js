export function convertJSONStringToJs(jsonString) {
   try {
      return JSON.parse(jsonString);
   } catch (e) {
      console.warn('convertJSONStringToJs', e);
      return {};
   }
}

export function getRepoNameAndOwnerFromUrl(url) {
   if (!url.includes('https://github.com/')) return [null, null];
   const [front, back] = url.split('github.com/');
   const [owner, repo] = back.split('/');
   return [owner, repo];
}
