/**
 * @file apiConfig.js
 * Defines api call configuration settings
 */

import { appConfig } from './appConfig';

/****************************************************
// Settings for any API data calls made from the app.
*****************************************************/
export const apiConfig = {
  OCAPI: {
    // Set each type of environment to 'mock' or 'live' to use a live API call
    // or mock data.
    environment: {
      // development: 'mock',
      development: 'live',
      qa: 'live',
      staging: 'live',
      production: 'live'
    },

    // Define each possible call type that is available.
    resources: {
      /* ======  Baskets  ====== */
      baskets: {
        path: '/baskets',
        API: 'shop',
        calls: {
          create: {
            path: '',
            pathParams: [],
            requiredParams: [],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application-json'
            }
          }
        }
      },
      /* ======  Categories  ====== */
      categories: {
        path: '/categories',
        API: 'shop',
        calls: {
          get: {
            path: '/{0}',
            pathParams: [{ name: 'categoryID', index: 0 }],
            requiredParams: ['levels'],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        }
      },
      /* ======  ProductSearch  ====== */
      productSearch: {
        path: '/product_search',
        API: 'shop',
        calls: {
          get: {
            path: '',
            pathParams: [],
            requiredParams: [],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          getAvailability: {
            path: '/{0}',
            pathParams: [],
            requiredParams: [],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          getImages: {
            path: '/{0}',
            pathParams: [],
            requiredParams: [],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          getPrices: {
            path: '/{0}',
            pathParams: [],
            requiredParams: [],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          getRepresentedProducts: {
            path: '/{0}',
            pathParams: [],
            requiredParams: [],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          getVariations: {
            path: '/{0}',
            pathParams: [],
            requiredParams: [],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        }
      },
      /* ======  Products  ====== */
      products: {
        path: '/products',
        API: 'shop',
        calls: {
          get: {
            path: '/{0}',
            pathParams: [{ name: 'productID', index: 0 }],
            requiredParams: [],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          images: {
            path: '/{0}/images',
            pathParams: [{ name: 'productID', index: 0 }],
            requiredParams: ['all_images'],
            requiredData: [],
            callType: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        }
      },
    },

    // API general settings
    API: {
      shop: {
        path: '/shop'
      },
      data: {
        path: '/data',
      },
      meta: {
        // Authorization Server Credentials
        authServer: {
          userName: 'appUser',
          userPassword: 'appPassword'
        },
      }
    },

    // The base URI of the API call endpoint that will be used if the selected environment type
    // is setup to use the live API.
    baseEndpoints: {
      development: 'https://dw-web-example.demandware.net/s/' + appConfig.siteID + '/dw/',
      qa: 'https://qa-web-example.demandware.net/s/' + appConfig.siteID + '/dw/',
      staging: 'https://staging-web-example.demandware.net/s' + appConfig.siteID + '/dw/',
      production: 'https://www.example.com/dw/'
    },

    // Client ID's for application identification in each type of envoironment.
    clientIDs: {
      development: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      production: '',
      staging: '',
      qa: ''
    },

    // Current API version in use.
    currentVersion: 'v17_8',
  }
};