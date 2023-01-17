// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
    getFirestore, 
    doc,
    getDoc, 
    // setDoc,
    updateDoc,
    collection,
    writeBatch,
    // query,
    // getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyB3ptg6zyw3udTLDfP-BKofFtiEE02TSp4",
  authDomain: "profile-settings-upgrade.firebaseapp.com",
  projectId: "profile-settings-upgrade",
  storageBucket: "profile-settings-upgrade.appspot.com",
  messagingSenderId: "951662863357",
  appId: "1:951662863357:web:9dff0d7938e6e094036f94"

};


// Initialize Firebase
initializeApp(firebaseConfig);

/* This singleton instanciates Firestore and directly points to the 
DB inside in our console on the website */
export const db = getFirestore();

/** NOTE:
 * normally the uid is dynamic and we would get it from the firebase auth object when the user sign's up
 * in this case it's just a simple exercise about user settings and therefor hardcoded */
const uid = 'uid01';
const userDocRef = doc(db, "userData", uid)


// ### GET  single documents from DB !! ###
// #############################
       
export const getSingleDocfromDB = async ( ) =>{

    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      return docSnap.data()
    }  else {
      // doc.data() will be undefined in this case
      const error = {error: 'error', status: 'rejected', message: `No user with the uid: "${uid}"` }
      return Promise.reject(error)
    }
}

// ### UPDATE USER-PROFILE INFORMATION !! ### 
// ##########################################

export const UpdateUserDocinDB = async (profileInfo= {})=>{
    await updateDoc(userDocRef, profileInfo);
}


// ### UPLOAD FILES TO DB !! ###
// #############################
export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
      documentsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object );
    });
    await batch.commit();
    console.log('done uploading the documents baby!');
  }

// ### put hook in jsx file and import file to upload 
// just let it run once and out-comment again 
// you can also directly upload from the firestore website instead, if you want
    // import NAME_OF_FILE_TO_UPLOAD from '../FILE_LOCATION';
    // impport method
    // useEffect(()=> {
    //     addCollectionAndDocuments('COLLECTION_NAME', NAME_OF_FILE_TO_UPLOAD)
    // }, []);