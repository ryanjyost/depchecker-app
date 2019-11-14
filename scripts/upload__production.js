const sh = require('shelljs');
const { BUCKET_NAME, REACT_APP_ENV } = process.env;

/*
Upload the /build folder contents to your production S3 Bucket
*/
(function() {
   sh.echo(`Deploying the ${REACT_APP_ENV} build to Bucket ${BUCKET_NAME}`);
   sh.exec(`aws s3 sync build/ s3://${BUCKET_NAME} --delete`);
})();
