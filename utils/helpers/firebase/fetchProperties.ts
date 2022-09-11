import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import { db } from "~/utils/config/firebase";

const fetchProperties = async (propertyId: string) => {
  const propertiesCol = collection(db, "properties");
  const propertiesSnapshot = await getDocs(propertiesCol);
  const propertiesList = propertiesSnapshot.docs.map((doc) => doc.data());
};

export default fetchProperties;
