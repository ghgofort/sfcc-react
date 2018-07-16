/**
 * @file appConfig.js
 * Defines application configuration settings and provides helper functions for
 * easily getting the needed information.
 */

/****************************************************
 // Environment specific app settings.
 *****************************************************/
 export const appConfig = {
 /**
   * Operation Mode
   * This value is meant to control certain settings that are set differently
   * for development purposes than they need to be for production purposes.
   * Options.
   */

  // instanceType: 'production',
  // instanceType: 'staging',
  // instanceType: 'qa',
  instanceType: 'development',

  // Definces the settings for each instance type.
  environment: {

    // Setup for app development.
    development: {
      // This can be set to override the initial path to images that is returned
      // by OCAPI api calls for product images.
      overrides: {
        productImage: {
          /**
           * @todo : Refactor to get rid of the isOverride property since there
           * is already null checking.
           */
          isOverride: true,
          pathToReplace: '/AAFF_S25/',
          pathReplacement: '/AAFF_STG/'
        }
      }
    },

    // Setup for a production release.
    production: {

    }
  },

  /****************************************************
  // Settings for UI settings.
  *****************************************************/

  // Configuration settings for the navbar menu in the expanded state.
  sidebar: {

    // Defines the proportion of the screen that will not be covered by the
    // sidebar menu.
    marginRight: .3,

    // Define the time (in ms) that it takes to toggle the sidebar menu.
    toggleTime: 300
  },

  // ProductSearch settings
  productSearch: {
    // The default number of products to return from a search as a paged result.
    defaultPageSize: 25
  },

  siteID: 'SiteGenesis'
};

