import { doc, getDoc } from "firebase/firestore";
import { db } from "~/utils/config/firebase";

const fetchUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    console.log("No such user document!");
  }
  return;
};

export default fetchUser;
