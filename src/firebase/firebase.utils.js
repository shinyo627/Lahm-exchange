// base firebase library is needed then selectively import modules from the whole firebase library because it is big as whole.
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAbYbyg0lckD3EBDfNVUcFG69TImmDftLg',
  authDomain: 'zmt-lahm-db.firebaseapp.com',
  projectId: 'zmt-lahm-db',
  storageBucket: 'zmt-lahm-db.appspot.com',
  messagingSenderId: '409408781877',
  appId: '1:409408781877:web:418d5faebb19d3efb87b7c',
};

// Google Auth/User save
// This function creates snapshot and return userRef
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // snapShot represents data
  const snapShot = await userRef.get();

  // Save the incoming user data into user collection
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Saving new user if there was no snapShot
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }

  // Returning userRef
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
