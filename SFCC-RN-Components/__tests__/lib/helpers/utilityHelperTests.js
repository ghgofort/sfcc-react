import expect from 'expect';
import URLHelper from '../../../src/lib/utilityHelpers/URLHelper';


describe('URLHelper.js utility helper methods.', () => {
  let appConfig;

  // Setup Test Group.
  beforeEach(() => {
    // Setup a mock appConfig that with a valid replacement string for a
    // section of the url path.
    appConfig =  {
      instanceType: 'test',
      environment: {
        test: {
          overrides: {
            // Valid : should return true.
            productImage: {
              isOverride: true,
              pathToReplace: '/AAFF_S25/',
              pathReplacement: '/AAFF_STG/'
            },
            // Valid : should return false.
            blogImage: {
              isOverride: false,
              pathToReplace: '/AAFF_S25/',
              pathReplacement: '/AAFF_STG/'
            },
            // Missing pathReplacement property : should return false.
            iconImage: {
              isOverride: true,
              pathToReplace: '/AAFF_S25/',
            },
            // Missing pathToReplace property : should return false.
            mensProductImage: {
              isOverride: true,
              pathReplacement: '/AAFF_STG/'
            },
            // Missing isOverride property : should return false.
            womensProductImage: {
              pathToReplace: '/AAFF_S25/',
              pathReplacement: '/AAFF_STG/'
            }
          }
        }
      }
    };
  });

  /**
   * Test Group - class: URLHelper, method: needsOverride
   */
  describe('URLHelper.needsOverride() - Check for URL mappings in appConfig.js for a specified imageType', () => {

    test('should return: true => when: the URL type has a valid override in the overrides configuration property.', () => {
      expect(URLHelper.needsOverride('productImage')).toBeTruthy();
    });

    test('should return: false => when: the URL type does not exist in the overrides configuration property.',() => {
      expect(URLHelper.needsOverride('contentImage')).toBeFalsy();
    });

    test('should return: false => when: the URL type has an invalid overrides configuration property.', () => {
      expect(URLHelper.needsOverride('blogImage')).toBeFalsy();
      expect(URLHelper.needsOverride('iconImage')).toBeFalsy();
      expect(URLHelper.needsOverride('mensProductImage')).toBeFalsy();
      expect(URLHelper.needsOverride('womensProductImage')).toBeFalsy();
    });
  });

  describe('Test URLHelper.updateURL(url : string, urlType : string) : string Static class member', () => {
    const beforeURL = 'https://sits-pod52.demandware.net/dw/image/v2/AAFF_S25/on/demandware.static/-/Sites-masterCatalogHoka/default/v1514346396403/images/white/1016786-CCYN_1.jpg';

    test('should return: a modified URL with the proper portion of the path replaced => when: an override exists for this urlType', () => {
      const afterURL = 'https://sits-pod52.demandware.net/dw/image/v2/AAFF_STG/on/demandware.static/-/Sites-masterCatalogHoka/default/v1514346396403/images/white/1016786-CCYN_1.jpg'
      expect(URLHelper.updateURL(beforeURL, 'productImage')).toEqual(afterURL);
    });

    test('should return: an unmodified url => when: there is no override for the urlType', () => {
      expect(URLHelper.updateURL(beforeURL, 'blogImage')).toEqual(beforeURL);
    });
  });

});