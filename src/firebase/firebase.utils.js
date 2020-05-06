import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBhccMVpiq618tw_kEaoHb0S9xwv4AVteA',
  authDomain: 'benefits-of-green-tea-site.firebaseapp.com',
  databaseURL: 'https://benefits-of-green-tea-site.firebaseio.com',
  projectId: 'benefits-of-green-tea-site',
  storageBucket: 'benefits-of-green-tea-site.appspot.com',
  messagingSenderId: '793160716559',
  appId: '1:793160716559:web:48b06ed1275a4e3bd9ee7a',
  measurementId: 'G-M5JTMVHPET',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;