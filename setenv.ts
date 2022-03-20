const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
    ? `./src/environments/environment.prod.ts`
    : `./src/environments/environment.ts`;

    const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   webServicesUrl: "${process.env.WEB_SERVICES_URL}",
   googleClientId: "${process.env.GOOGLE_CLIENT_ID}",
};
`;

writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
        console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
});