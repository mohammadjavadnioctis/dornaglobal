import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "~/utils/config/firebase";

const fetchProperties = async () => {
  const propertiesCol = collection(db, "testproperties");
  const propertiesSnapshot = await getDocs(propertiesCol);
  const propertiesList = propertiesSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
  const parsedProperties = JSON.parse(JSON.stringify(propertiesList))
  return parsedProperties
};

export default fetchProperties;
