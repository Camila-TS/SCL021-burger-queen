import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3lithBjQb8fCsKqsk2jhTtkEkknAYrLg",
    authDomain: "burger-paradise.firebaseapp.com",
    projectId: "burger-paradise",
    storageBucket: "burger-paradise.appspot.com",
    messagingSenderId: "598541773710",
    appId: "1:598541773710:web:af68490c1f736be79112df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializa firestore
const db = getFirestore(app);

// Crear colección
export async function createOrder(name, productList, observation) {

    try {
      const docRef = await addDoc(collection(db, "orders"), {

        client: name,
        content: productList,
        date: new Date().toLocaleString(),
        observation: observation

      });
      // console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e); 
      throw e;
    }
  }

  // recuperar toda la colección
//  export const allOrders = async () => {
//     try {
//       const ordersArr = [];
//       const querySnapshot = await getDocs(collection(db, 'orders'));
//       querySnapshot.forEach((orderDoc) => {
//         const eachOrder = orderDoc.data();
//         eachOrder.id = orderDoc.id;
//        ordersArr.push(eachOrder);
//        console.log(eachOrder)
//       //  console.log(ordersArr)
//       });
//       return ordersArr;
//     } catch (e) {
//       console.log('Error get all documents', e.message);
//     }
//   };