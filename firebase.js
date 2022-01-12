import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAAN9LqK3d9ixHSacD6rM-UdhXjcxiO5qY",
    authDomain: "e-retail-f6d5a.firebaseapp.com",
    projectId: "e-retail-f6d5a",
    storageBucket: "e-retail-f6d5a.appspot.com",
    messagingSenderId: "964722599297",
    appId: "1:964722599297:web:fa57be3883cf18310df480"
};

//Initialize Firebase
const app = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApp();

const db = getFirestore(app);



export default { db };
//const stripeOrders = await db  .collection("users").doc(session.user.email).collection("orders").orderBy("timestamp", "desc")    .get();