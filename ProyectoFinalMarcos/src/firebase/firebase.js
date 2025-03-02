import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  doc,
  getDoc,
  getDocs, 
  collection,
  query,
  where,
  addDoc,
  updateDoc,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITEP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categoryMapping = {
  apple: "iphone",
  samsung: "samsung",
  motorola: "motorola",
  otros: "smartphone",
};

export async function getSingleItem(id){
  const docRef = doc(db, "items", id);
  
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error getting document: ", error);
  }
}

export async function getItems(){
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    if (querySnapshot.size != 0){
      const itemList = querySnapshot.docs.map((docu) => {
        return {id: docu.id, ...docu.data()};
      });
      return itemList;
    } else {
      console.log("There are no items in the database");
    }
  } catch (error) {
    console.log("Error when attempting to get items", error);
  }
} 

export async function getItemsByCategory(categoryId) {
  try {
    const category = categoryMapping[categoryId] || categoryId;
    console.log(`Fetching items for category: ${category}`);
    const q = query(collection(db, "items"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size != 0) {
      const itemList = querySnapshot.docs.map((docu) => {
        return { id: docu.id, ...docu.data() };
      });
      console.log(`Found ${itemList.length} items for category: ${category}`);
      return itemList;
    } else {
      console.log(`No items found for category: ${category}`);
    }
  } catch (error) {
    console.log("Error when attempting to get items by category", error);
  }
}

export async function sendOrder(order) {
  const ordersCollection = collection(db, 'orders');
  try {
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    console.error('Error al agregar el documento nuevo ', error);
  }
}


