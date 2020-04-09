import * as firebase from 'firebase/app';
import '@firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A',
  authDomain: 'quiz-91601.firebaseapp.com',
  databaseURL: 'https://quiz-91601.firebaseio.com',
  projectId: 'quiz-91601',
  // storageBucket: "",
  storageBucket: 'quiz-91601.appspot.com',
  messagingSenderId: '241898927962',
  appId: '1:241898927962:web:a85d9afafe87fde6ae6563',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
// https://firestore.googleapis.com/v1beta1/projects/quiz-91601/databases/(default)/documents/users/gKd3GI2m7jhgao5CGPoWvNR19CI3?key=AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A&updateMask.fieldPaths=userId
