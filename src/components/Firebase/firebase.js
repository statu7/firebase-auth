import app from 'firebase/app'
import 'firebase/auth';

const devConfig = {
    apiKey: process.env.REACT_APP_DEV_API_KEY,
    authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
    projectId: process.env.REACT_APP_DEV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID
};

const prdConfig = {
    apiKey: process.env.REACT_APP_PRD_API_KEY,
    authDomain: process.env.REACT_APP_PRD_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_PRD_DATABASE_URL,
    projectId: process.env.REACT_APP_PRD_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PRD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PRD_MESSAGING_SENDER_ID
};

const config =
    process.env.NODE_ENV === 'production' ? prdConfig : devConfig;

class Firebase {

    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();

        console.log("APPI-Key" + devConfig.apiKey);
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}


export default Firebase;

