// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  getDocs,
  getDoc,
  /* query,
  where, */
  doc,
  collection,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export async function getUsers() {
  const prodsCollection = collection(appFirestore, "Users");
  const prodsSnapshot = await getDocs(prodsCollection);
  let respuesta = prodsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return respuesta;
}
export async function getUser(itemId) {
  const docref = doc(appFirestore, "Users", itemId);
  const docSnapshot = await getDoc(docref);
  return {
    id: docSnapshot.id,
    ...docSnapshot.data(),
  };
}
export async function newUser(dataOrder) {
  const orderCollectionRef = collection(appFirestore, "newUsers");
  const dateTimestamp = Timestamp.now();
  const dataOrderWithDate = {
    ...dataOrder,
    date: dateTimestamp,
  };
  const orderCreated = await addDoc(orderCollectionRef, dataOrderWithDate);
  return orderCreated;
}
export async function exportDataToFirestore() {
  const users = [];
  const usersCollection = collection(appFirestore, "Users");
  users.forEach((item) => {
    const newDoc = doc(usersCollection);
    setDoc(newDoc, item)
      .then((res) => {
        console.log("Documento guardado:", newDoc.id);
      })
      .catch((error) => console.log("error: ", error));
  });
}
export default appFirestore;
