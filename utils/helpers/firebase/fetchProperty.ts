import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "~/utils/config/firebase";

const fetchProperty = async (propertyId: string, isTest = false) => {
  // TODO: change this to real properties
  const docRef = doc(db, isTest ? "testproperties" : "properties", propertyId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
  return;
};

export default fetchProperty;
