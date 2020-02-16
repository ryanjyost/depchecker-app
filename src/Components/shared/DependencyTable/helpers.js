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
         deprecated: dep.deprecated ? 'Yes' : 'No',
         projectVersion: dep.versions.project,
         latestRelease: dep.versions.latest,
         versionsBehind: dep.versionsBehind && dep.versionsBehind.text,
         lastPublish: timeAgo.format(moment(dep.time.latest).toDate()),
         weeklyDownloads: dep.weeklyDownloads,
         stars: dep.stars,
         license: (dep.license && dep.license.name) || '?',
         openIssues: dep.openIssues,
         size: dep.size.unpacked.formatted,
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
      label: 'Deprecated?',
      key: 'deprecated'
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
      label: 'Size (unpacked)',
      key: 'size'
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
