/**
 * DeviceStorageService.js
 *
 * Singleton instance of a Service class to read and write to a devices local
 * storage using the React-Native Async Storage library.
 */

import {AsyncStorage} from 'react-native';

let DeviceStorageServiceInstance = null;

export default class AsyncStorageService {
  constructor() {
    if (!DeviceStorageServiceInstance) {
      DeviceStorageServiceInstance = this;
    }
    return DeviceStorageServiceInstance;
  }

  /**
   * Reads an item or multiple items from the device storage database and
   * returns a promise that resolves with the results.
   *
   * @param  {string|Array<string>} itemNames - String key name(s) for the items
   *    to be read from AsyncStorage. Either a single name can be passed as a
   *    string, or multiple item names can be passed as an Array of strings.
   * @return {Promise} - A Promise that will resolve to return the data read
   *    from AsyncStorage.
   */
  read(itemNames) {
    // Create curried error callback instance.
    const cb = this._libError(itemNames, 'read');
    try {
      // Use infrence to determine if this is a single read or a collection.
      if (Array.isArray(itemNames)) {
         return AsyncStorage.multiGet(itemNames, cb);

      // If a single item name is passed in as a string.
      } else if (typeof itemNames === 'string') {
        return AsyncStorage.getItem(itemNames, cb);

      // Handle unexpected input types.
      } else {
        throw new TypeError('Expected either a string or an Array of strings.');
      }

    // Handle error conditions.
    } catch (err) {
      return _loggServiceError({items: items}, err, 'read');
    }
  }

  /**
   * Write key value pairs to the local device storage.
   * @param  {Array|Object} keyValArray - Key/Value pairs in Array or Object
   *    form to write to device storage.
   * @return {Promise} - Promise with the results from the data
   *    write.
   *
   * @example
   * write({
   *  'fruit': 'apples',
   *  'vegetables': {
   *    'roots': ['potatoes', 'turnips'],
   *    'leaves': ['spinich', 'lettuce']
   *  }
   * });
   *
   * // or
   * write([
   *   ['fruit', 'apples'],
   *   ['vegetables',
   *     ['roots', ['potatoes', 'turnips']],
   *     ['leaves', ['spinish', 'lettuce']],
   *   ]
   * ])
   */
  write(keyValArray) {
    // Create curried error callback instance.
    const cb = this._libError(itemNames, 'write');
    try {

      // If the Key / Value pairs were passed as an array.
      if (Array.isArray(keyValArray)) {

        // Write Objects in Array form ([{key:value}] or [[key, value]])
        keyValArray = keyValArray.map(val => {
          let k = keyValArray[val];
          if (Array.isArray(k) && k.length === 2) {
            return new Array(k[0], JSON.stringify(k[1]));
          } else if (typeof k === 'object') {
            return Object.keys(keyValArray).map(key => {
              return new Array(key, JSON.stringify(k));
            });
          } else {
            throw new TypeError('error', 'Expected key value array or key value '
                + 'object for AsyncStorage write operation.');
          }
        });

        return AsyncStorage.multiSet(keyValArray, cb);

      // If the Key / Value pairs were passed in Object form.
      } else if (typeof keyValArray === 'object') {
        return AsyncStorage.multiSet(Object.keys(keyValArray).map(key => {
          let k = keyValArray[key];
          if (typeof k !== 'string' && typeof k !== 'number') {
            k = JSON.stringify(k);
          } else if (typeof k === 'number') {
            k = k.toString();
          }
          return new Array(key, keyValArray[key]);
        }));
      } else {
        throw new TypeError('Expected key value array or key value '
            + 'object for AsyncStorage write operation.');
      }

    } catch(err) {
      return _loggServiceError({items: items, values: itemValues}, err, 'read');
    }

  }

  merge(item1Names, item2Names) {
    // @TODO - Create service method to merge storage keys.
  }

  /**
   * Deletes an item or items with given key(s) from local device storage.
   * @param  {Array|string} itemNames - The key names of the items to be
   *    removed from device storage.
   * @return {Promise} - Returns a Promise that resolves to an object with a
   *    'success' property that indicates if the item(s) were successfully
   *    deleted from the device storage.
   */
  delete(itemNames) {
    try {
      if (Array.isArray(itemsNames)) {
        itemNames.forEach((itemName) => {
          AsyncStorage.delete(itemName);
        })
      } else if (typeof itemNames === 'string') {
        AsyncStorage.delete(itemNames);
      } else {
        throw new TypeError('Delete can only be performed on an item of type '
        + 'string or Array<string>');
      }
    } catch (err) {
      return _loggServiceError({itemNames: itemNames,},err, 'delete');
    }
  }

  _loggServiceError(params, error, callName) {
    console.log('ERROR:: in DeviceStorageService.js\n===> Service Call: ');

    if (callName) {
      console.log(callName + '\n===> Call Params: ');
    }

    if (params) {
      console.log(JSON.stringify(params));
    }

    if (error) {
      console.log(JSON.stringify(error));
    }

    return Promise.reject(new Error('There was an error in the DeviceStorageService'));
  }
}
