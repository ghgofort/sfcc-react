# sfcc-react
sfcc-react is a React Native mobile application that uses Sales Force Commerce Cloud or SFCC (formerly Demandware) and their Open Commerce API (OCAPI) to read and write to an SFCC instance.

The app uses the Redux framework for global state management and redux-thunk for handling ASYNC action creation methods in order to make calls to OCAPI. This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Setup and Run
To run this app you need to setup a connection to your SFCC sandbox instance. This can be done by changing the settings in the appConfig.js file: SFCC-RN-Components/src/config/appConfig.js. There are 2 main exports from this file that define the current compile time settings for the app.

### apiConfig
The apiConfig object literal that is exported from the appConfig.js configuration file contains the information needed for your app to make calls to your SFCC instance using OCAPI. All of the OCAPI config is contained in a property of the apiConfig export simply named 'OCAPI'. There are several properties to this object property that allow for different setups:
- environment : An attribute with string properties for each type of instance setup (i.e.: production, staging, qa, development).  Each of these environment attributes has a string property denoting if the app is to use live API calls to the SFCC instance for that environment setup, or if it should use mock API calls instead.
- resources : This is where you define the resource calls that you will be accessing from the Open Commerce API, and the different types of parameters that will be accepted and/or required to make a specific API call for a resource.
- baseEndpoints : Contains attributes for each type of environment which point to the corresponding URL for making OCAPI calls.
- clientIDs: This attribute must be setup with a valid SFCC user ID that has been configured for OCAPI use. See the SFCC documentation for information on how to setup a user account for OCAPI access. Like the baseEndpoints, and environment attributes, this setup object also has attributes for describing the URL for each individual SFCC instance type.

## Disclaimer
The repo is still in the setup phase and there is still a large amout of work left to do. Check back soon to see more.

Author: Galen Goforth -- galengoforth@gmail.com
