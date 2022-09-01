// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://api.spotify.com/v1',
  clientID: 'c8fe2981a91043f2bc812f59ffd2582b',
  clientSecret: '3b069cc03c9d49298984d8bfd957b3b6',
  authParams:
    '&response_type=token&redirect_uri=http://localhost:4200/login&scope=user-library-modify user-library-read',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
