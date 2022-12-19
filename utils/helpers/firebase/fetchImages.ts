import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "~/utils/config/firebase";



const getTheDownLoadURL = async (path: string) => {
    let urls: string[];
    getDownloadURL(ref(storage, path))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

     urls.push(url)
     console.log("iamges::: urls" , urls)
     return urls
    })
    .catch((error) => {
      // Handle any errors
      console.log('error form the getTheDownLoadURL', error)
    });
  }

const fetchList = async (id: string) => {
    const listRef = ref(storage, `test_properties/${id}/`);

    const listAllResponse = await listAll(listRef)
    const items = await listAllResponse.items.map(async (item) => {
        await getTheDownLoadURL(item.fullPath)
    })
    console.log('iamges:::  items from helpers : ', items )
    return items
}
export default fetchList