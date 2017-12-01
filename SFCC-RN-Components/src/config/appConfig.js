/**
 * appConfig.js
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
  // instanceType: 'PRODUCTION',
  instanceType: 'DEBUG',

  // Definces the settings for each instance type.
  environment: {

    // Setup for app development.
    DEBUG: {
      // To use the live API calls change this to:
      //api: 'live'
      api: 'mock'
    },

    // Setup for a production release.
    PRODUCTION: {
      api: 'live'
    }
  },

/****************************************************
// Settings for UI settings.
*****************************************************/

  // Configuration settings for the navbar menu in the expanded state.
  sidebar: {

    // Defines the proportion of the screen that will not be covered by the sidebar menu.
    marginRight: .3,

    // Define the time (in ms) that it takes to toggle the sidebar menu.
    toggleTime: 300
  }
};

/****************************************************
// Settings for any API data calls made from the app.
*****************************************************/
export const apiConfig = {};
