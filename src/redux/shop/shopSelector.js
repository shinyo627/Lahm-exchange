import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectorCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// Following currying method = function that returns function
// 1) First iteration
// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], (collections) =>
//     collections.find(
//       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   );

// 2)
// export const selectCollection = (collectionUrlParam) =>
//   createSelector(
//     [selectCollections],
//     (collections) => collections[collectionUrlParam]
//   );
// But Above cannot be memoized due to the collectionUrlParam is a dynamic argument

// Alternative to really memoize the dynamic match.params argument...
// Memoize does the same idea of memoization as reselect does for our selectors,
// except this time we're memoizing the return of our function which returns our selector
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);

// CURRYING
// 1)i.e...
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) = (b) => a * b;
// curriedMultiply(5)(3) // returns 15

// 2)You can use this concept and example to make utility functions for future usage...
// const curriedMultiplyBy5 = curriedMultiply(5)
// And Lets say after few time of working and if I need some function that multiply argument by 5
// curriedMultiplyBy5(4) // returns 20
