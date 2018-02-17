/**
 * @file URLHelper.js
 * Provides helper methods for URLs.
 */

 import {appConfig} from '../../config/appConfig';

/**
 * @class URLHelper
 * @classdesc A class of with static member methods for URL formatting and overrides.
 */
export default class URLHelper {
  /**
   * If there is an override URL specified for the given type, then the base
   * portion of the URL is replaced with the override setting specified in the appConfig.js.
   *
   * @param {string} url - The original URL returned from the OCAPI request.
   * @param {string} urlType - The type of url to perform overrides on. This type must be added
   *    to the appConfig.js file under the 'Overrides' section, the 'isOverride'
   *    config flag must be set to true, and the 'overrideURL' property contain the
   *    base url to use for overriding the path.
   * @return {string} - Returns the url with the base portion overridden.
   */
  static updateURL(url, urlType) {
    let updatedURL = url;

    // Check that all of the required fields for overriding a portion of the URI path
    // are setup in the appConfig.js for the URL type.
    if (URLHelper.needsOverride(urlType)) {
      // Get the override config values.
      const orConfig = appConfig.environment[appConfig.instanceType].overrides[urlType];
      // Get the text pattern or portion of text to be replaced.
      /** @todo: Add Regex support for URL mapping. Just static string replacement for now :( */
      const replaceText = orConfig.pathToReplace;
      const replacementText = orConfig.pathReplacement;
      updatedURL = url.replace(replaceText, replacementText);
    }

    return updatedURL;
  }

  /**
   * Helper method to check if a given type of URL should be overriden based on the
   * setting defined in appConfig for this type of URL. If no setting is found the
   * default value is false.
   *
   * @param {string} urlType - The type of URL to check.
   *    Valid URL types: {'productImage'}
   */
  static needsOverride(urlType) {
    const envConfig = appConfig.environment[appConfig.instanceType];
    return (envConfig.overrides &&
      envConfig.overrides[urlType] &&
      envConfig.overrides[urlType].isOverride &&
      envConfig.overrides[urlType].pathToReplace &&
      envConfig.overrides[urlType].pathReplacement);
  }

}
