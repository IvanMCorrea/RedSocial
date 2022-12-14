// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  getDoc,
  query,
  where,
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
const appFirestore = getFirestore();

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
export async function getNetwork(username) {
  const prodsCollection = query(
    collection(appFirestore, "Users"),
    where("username", "!=", username)
  );
  const prodsSnapshot = await getDocs(prodsCollection);
  let respuesta = prodsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return respuesta;
}

export async function login(id, user, pass) {
  const docref = doc(appFirestore, "Users", id);
  const docSnapshot = await getDoc(docref);
  const data = docSnapshot.data();
  if (data.username === user && data.password === pass) {
    return true;
  } else return false;
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
export async function exportDataToFirestore(data) {
  const users = data;
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
