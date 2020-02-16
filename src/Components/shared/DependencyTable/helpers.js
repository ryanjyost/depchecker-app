import moment from 'moment';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

export function generateCSVData(deps) {
   return deps.map(dep => {
      return {
         name: dep.name,
         isDev: dep.isDev ? 'Yes' : 'No',
         projectVersion: dep.versions.project,
         latestRelease: dep.versions.latest,
         versionsBehind: dep.versionsBehind.text,
         lastPublish: timeAgo.format(moment(dep.time.latest).toDate()),
         weeklyDownloads: dep.weeklyDownloads,
         stars: dep.stars,
         license: (dep.license && dep.license.name) || '?',
         openIssues: dep.openIssues,
         description: dep.description,
         website: dep.links.homepage,
         npm: `https://www.npmjs.com/package/${dep.name}`,
         github: dep.links.github
      };
   });
}

export const csvHeaders = [
   {
      label: 'Name',
      key: 'name'
   },
   {
      label: 'Is Dev?',
      key: 'isDev'
   },
   {
      label: 'Project Version',
      key: 'projectVersion'
   },
   {
      label: 'Latest Release',
      key: 'latestRelease'
   },
   {
      label: 'Versions Behind',
      key: 'versionsBehind'
   },
   {
      label: 'Last Publish',
      key: 'lastPublish'
   },
   {
      label: 'Weekly Downloads',
      key: 'weeklyDownloads'
   },
   {
      label: 'GitHub Stars',
      key: 'stars'
   },
   {
      label: 'License',
      key: 'license'
   },
   {
      label: 'Open Issues & PRs',
      key: 'openIssues'
   },
   {
      label: 'Description',
      key: 'description'
   },
   {
      label: 'Website',
      key: 'website'
   },
   {
      label: 'npm page',
      key: 'npm'
   },
   {
      label: 'GitHub',
      key: 'github'
   }
];
