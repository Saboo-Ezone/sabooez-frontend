import { createContext, useContext} from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

//to get the database we use getDatabase , to set the data we use set and to give the refrence of the database we use ref for giving refernce to the root , ///////Realtimedatabase
import { getDatabase, set, ref, get, child, onValue } from 'firebase/database';

//Firestore
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKbJGKb9paftWElW6Bxl020d7lYAbTUKA",
  authDomain: "sabooezone1.firebaseapp.com",
  projectId: "sabooezone1",
  storageBucket: "sabooezone1.appspot.com",
  messagingSenderId: "94379106740",
  appId: "1:94379106740:web:ba1df6a294f7fcb04192e1",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

//FirebaseStore
export const FirebaseStore = getFirestore(FirebaseApp);

//creating context
const FirebaseContext = createContext(null);

//custom hook for returning usecontext
export const useFirebase = () => useContext(FirebaseContext);

//Realtimedatabase
const database = getDatabase(FirebaseApp);

//creating Provider
export const FirebaseProvider = (props) => {

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };

  //Realtimedatabase
  const putData = (key, data) => set(ref(database, key), data);

  const writeData = async (path, data) => {
    const result = await addDoc(collection(FirebaseStore, path), data);
    console.log(result);
  };

  const subCollection = async () => {
    const result = await addDoc(
      collection(FirebaseStore, 'Cities/JIEllPgLLzEZC76mpUH7/places'),
      {
        name: 'Mumbai',
        desc: 'Awsome desc',
        dat: Date.now(),
        pinCode: 1234,
      }
    );
    console.log(result);
  };
  const getRealtime = async () =>
    get(child(ref(database), 'Grandfather/father')).then((snap) =>
      console.log(snap.val())
    );

  const realtimeTrack = async () => {
    onValue(ref(database, 'Grandfather'), (snapshot) => {
      console.log(snapshot.val());
    });
  };

  const getDocument = async () => {
    const docRef = doc(FirebaseStore, 'EnquiryForm', 'Ar4opqvHRp1Lqx48FN4A');
    const docSnap = await getDoc(docRef);
    // console.log(docSnap);
    // console.log(docSnap.data());
    return docSnap.data();
  };

  const getDocuments = async () => {
 
    const querySnapshot = await getDocs(
      collection(FirebaseStore, 'EnquiryForm')
    );
    // console.log(querySnapshot)+

    return querySnapshot;
  };

  const getDocByQuery = async () => {
    const collectionRef = collection(FirebaseStore, 'user');
    const q = query(collectionRef, where('isMale', '==', true));
    const snap = await getDocs(q);
    snap.forEach((data) => console.log(data.data()));
  };

  const update = async () => {
    const docRef = doc(FirebaseStore, 'Cities', 'JIEllPgLLzEZC76mpUH7');
    updateDoc(docRef, {
      name: 'New Delhi',
    });
  };
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        putData,
        useFirebase,
        writeData,
        subCollection,
        getDocument,
        getDocByQuery,
        update,
        getRealtime,
        realtimeTrack,
        getDocuments,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
