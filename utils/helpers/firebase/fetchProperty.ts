import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import { db } from "~/utils/config/firebase";

const fetchProperty = async (propertyId: string) => {
  const docRef = doc(db, "properties", propertyId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
  return;
};

export default fetchProperty;
