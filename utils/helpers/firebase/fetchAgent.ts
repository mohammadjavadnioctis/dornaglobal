import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "~/utils/config/firebase";

const fetchAgent = async (agentId: string) => {
  const docRef = doc(db, "agents", agentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    console.log("No such agent document!");
  }
  return;
};

export default fetchAgent;
