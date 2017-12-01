/**
 * globalStyles.js
 * Class with getStyleSheet helper method that returns style objects for each globaly
 * used component in the app.
 *
 * *** Instructions ***
 * * Create the style sheet as a property of the class in the constructor
 */

import {StyleSheet, Dimensions} from 'react-native';

const colorNames = {
  // Colors by Name
  white:          '#ffffff',
  bondiBlue:      '#009382',
  darkCerulean:   '#005789',
  gravel:         '#51534A',
  orange:         '#FF5E00',
  green:          '#6DBE45',
  wildSand:       '#F4F4F4',
  mercury:        '#E6E6E6',
  alto:           '#CFCFCF',
  dustyGray:      '#999999',
  boulder:        '#777777',
  // Teal Spectrum
  catskillWhite:  '#E9F3F5',
  paleTurquoise:  '#B2F2FF',
  frenchPass:     '#65D0E5',
  java:           '#1DAFCC',
  bondiBlue:      '#0093B2',
  blueLagoon:     '#067A91',
  atoll:          '#095F70',
  tarawera:       '#09414D',
  // Mustard Spectrum
  peach:          '#FFE7B2',
  buttercup:      '#F1AE1D',
  pirateGold:     '#B37A00',
  // Green Spectrum
  confier:        '#90E665',
  apple:          '#6DEB45',
  limeade:        '#349106',
  // Orange Spectrum
  apricot:        '#E69465',
  blazeOrange:    '#FF5E00',
  fire:           '#834100',
  // Dark Blue Spectrum
  deepCerulean:   '#0071B3',
  veniceBlue:     '#065E91',
  tealBlue:       '#094A70',
  // Red Spectrum
  sundown:        '#FFB2B5',
  thunderBird:    '#C4151C',
  brightRed:      '#B30006',
  // Purple Spectrum
  lavenderRose:   '#FFB2FF',
  strikeMaster:   '#976197',
  violetEggplant: '#910691',
  // Validation Backgrounds
  whiteSmoke:     '#FFEDED',
  parache:        '#FAF4E7',
  oldLace:        '#FFF6E2',
  // Light Blue Spectrum
  anakiwa:        '#B2E3FF',
  truquoiseBlue:  '#65B6E6',
  curiousBlue:    '#1DBCCC',
}

const colorAliasNames = {
  // Brand Colors
  brand:         {
    trustworthy: colorNames.bondiBlue,
    pTeal:       colorNames.bondiBlue,
    innovative:  colorNames.darkCerulean,
    pDarkBlue:   colorNames.darkCerulean,
    bold:        colorNames.gravel,
    pBrown:      colorNames.gravel,
    pOrange:     colorNames.orange,
    pGreen:      colorNames.green,
    visionary:   colorNames.green,
  },

  // Gray Spectrum
  gray:          {
    backgrnd1:   colorNames.wildSand,
    backgrnd2:   colorNames.mercury,
    border:      colorNames.alto,
    lightText:   colorNames.dustyGray,
    lightGray:   colorNames.dustyGray,
    disabled:    colorNames.dustyGray,
    mediumText:  colorNames.boulder,
  },

  // Teal Spectrum
  teal:          {
    shade1:      '#E9F3F5',
    shade2:      '#B2F2FF',
    shade3:      '#65D0E5',
    shade4:      '#1DAFCC',
    shade5:      '#0093B2',
    shade6:      '#067A91',
    shade7:      '#095F70',
    shade8:      '#09414D',
  },
}

// Styling Helper
const absoluteStyling = {
    position: 'absolute',
    left: 0,
    top: 0,
};

/**
 * Navbar Styles
 * @type {StyleSheet}
 */
export const navbarStyles = StyleSheet.create({
  menuContainer: {
    backgroundColor: 'transparent',
  },
  icon: {
    width: 45,
    height: 45,
    flex: 1
  },
  navbar: {
    overflow: 'hidden',
    zIndex: 600,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomColor: colorNames.mercury,
    borderRightColor: colorNames.mercury,
  },
  item: {
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 600,
    backgroundColor: '#09414D',
    opacity: .95,
  },
  topBorder: {
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  } ,
  lightText: {
    padding: 15,
    opacity: 1,

    fontSize: 15,
    fontWeight: '600',
    color: '#E6E6E6',
  },
  backLayer: {
    position: 'absolute',
    top: 46,
    left: 0,
    zIndex: 500,
  }
});

/**
 * Button Styles
 * @type {StyleSheet}
 */
export const btnStyles = StyleSheet.create({
  btn: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#65D0E5',
    margin: 12,
    borderWidth: 0,
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 20
  },
  btnText: {
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '600'
  }
});

export const txtStyles = StyleSheet.create({
  txtPrimary: {

    fontSize: 14,
    color: colorAliasNames.teal.shade9,
  },
  txtPrimaryLight: {

    fontSize: 14,
    color: colorAliasNames.teal.shade9,
  }
});

/**
 * Form Element Styles
 * @type {StyleSheet}
 */
export const frmStyles = StyleSheet.create({
  inpText: {
    backgroundColor: colorNames.white,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#777777',
    color: '#777777'
  },
  inpTextActive: {
    borderColor: '#B2F2FF',
  }
});

/**
 * Colors
 * @type {Object}
 */
const _colors = colorNames;
_colors.brand = colorAliasNames.brand;
_colors.grays = colorAliasNames.gray;

export const colors = _colors;
