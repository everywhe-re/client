// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  endpoints: {
    addFile: 'http://127.0.0.1:3000/add',
    getFile: 'http://127.0.0.1:3000/get'
  },
  crypto: {
    keyLength: 32,
    ivLength: 16,
    blockSize: 16
  }
};
