import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAxAa6dc_bgx0IvVZdypV8kYmpRz4cp03o",
    authDomain: "crwn-db-15ba5.firebaseapp.com",
    projectId: "crwn-db-15ba5",
    storageBucket: "crwn-db-15ba5.appspot.com",
    messagingSenderId: "396999478366",
    appId: "1:396999478366:web:ed0fd588b466303e95b8cf"
};

export const createUserProfileDocument = async (userAuth, extraData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({displayName, email, createdAt, ...extraData})
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;