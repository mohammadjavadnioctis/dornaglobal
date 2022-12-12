import React, { FC, memo, useEffect, useState } from "react";
import Divider from "~/components/Divider/Divider";
import PropertyDetails from "~/components/PropertyDetails/PropertyDetails";
import PropertyFeatures from "~/components/PrpertyFeatures/PropertyFeatures";
import SidebarAgentCard from "~/components/SidebarAgentCard/SidebarAgentCard";
import SumWithText from "~/components/SumWithText/SumWithText";
import {
  samplePropertyDetailsData,
  SamplePropertyFeatures,
} from "~/utils/data";
import propertyDetails from "~/utils/data/SamplePropertyDetails";
import { camelCaseToSpaces, isDev, legitDetails } from "~/utils/helpers";
import { AgentType, PropertyDetailsType, PropertyType, PropertyTypeV2 } from "~/utils/types";
import FeaturedExclusives from "../Home/Partials/FeaturedExclusives/FeaturedExclusives";
import Description from "./partials/Description/Description";
import Propertyslider from "./partials/Propertyslider";
import SumWithIcons from "./partials/SumWithIcons/SumWithIcons";
import VarifyButton from "./partials/VarifyButton/VarifyButton";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "~/utils/config/firebase";


interface PropertyPageType {
  property: PropertyTypeV2;
  agent: AgentType;
  similarProperties?: PropertyType[];
}

interface ImagesType {
  url: string;
}
const PropertyPage: FC<PropertyPageType> = memo((props) => {
  const { property, agent, similarProperties } = props;
  const [images, setImages] = useState<string[]>([])
  const {
    mediaUrls,
    noOfBathRooms,
    noOfBedRooms,
    livingArea,
    yearBuilt,
    description,
    id
  } = property;
  console.log('this is the Property: ', property)
  // get the highest res images from the photos
  // const images: (string | undefined)[] | undefined = photos?.map(
  //   (photo) => photo?.mixedSources?.webp?.pop()?.url
  // );


const getTheDownLoadURL = (path: string) => {
  getDownloadURL(ref(storage, path))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    setImages(prevState => [...prevState, url])
    // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img?.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
    console.log('error form the getTheDownLoadURL', error)
  });
}

  const fetchList = async () => {
    const listRef = ref(storage, `test_properties/${id}/`);

    const listAllResponse = await listAll(listRef)
    console.log('listAllResponse', listAllResponse)
    const items = listAllResponse.items.map(item => {
      // console.log('item. fulpath', item.fullPath)
      getTheDownLoadURL(item.fullPath)
    })
    console.log('this is items',items)
  //   await listAll(listRef)
  // .then((res) => {
  //   res.prefixes.forEach((folderRef) => {
  //     // All the prefixes under listRef.
  //     // You may call listAll() recursively on them.
  //     console.log(' ths is folder ref',folderRef)
  //   });
  //   res.items.forEach((itemRef) => {
  //     // All the items under listRef.
  //   });
  // }).catch((error) => {
  //   // Uh-oh, an error occurred!
  //   console.log('this is error', error)
  // });

  }

  useEffect(()=> {
   
 fetchList()

// Find all the prefixes and items.





// const starsRef = ref(storage, `/test_properties/${id}/2b.jpg`);

// // Get the download URL
// getDownloadURL(starsRef)
//   .then((url) => {
//     // Insert url into an <img> tag to "download"
//     console.log('this is the url', url)
//   })
//   .catch((error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     console.log(error)
//     switch (error.code) {
//       case 'storage/object-not-found':
//         // File doesn't exist
//         break;
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
//       case 'storage/canceled':
//         // User canceled the upload
//         break;

//       // ...

//       case 'storage/unknown':
//         // Unknown error occurred, inspect the server response
//         break;
//     }
//   });
  },[])

// const images: (string | undefined)[] | undefined = mediaUrls?.images?.map(
//     (photo) => photo
//   );
  console.log('this is images: ', images)
  const SumWithTextProps = {
    title: property.title ?? "Amazing Oceanfront Apartment",
    address: property.address,
    price: property.price,
    tags: [],
  };

  const SumWithIconsProps = [
    { Bedrooms: noOfBedRooms },
    { Bathrooms: noOfBathRooms },
    { "Living Area": livingArea },
    { "Year Built": yearBuilt! },
    // { "Property Type": propertyTypeDimension! },
  ];

  const propertyDetails = () => {
    let details: PropertyDetailsType[] = []
    Object.keys(property).forEach(function(key, index) {
      // if the data is in appropriate to show, add it to the details list
      if(legitDetails.includes(key)){
        //  @ts-ignore
        const propertyValue = property[key]
        details.push({detailName: key, detailTitle: camelCaseToSpaces(key), detailValue: propertyValue ?? 'not specified', id: key})
    
      }
    });
    details = [...details, { detailName: 'Deal Type: ', detailTitle: 'Deal Type', detailValue: camelCaseToSpaces(property?.chosenCategoryInfo?.dealType!) ,id: 'Deal Type'  }]
    return details
  } 
  propertyDetails()
  return (
    <div>
      <VarifyButton />
      <div className="slider_container bg-white p-4  mb-4">
        <SumWithText {...SumWithTextProps} />
        {!images && (
          <div className="container border flex space-x-10 items-start">

            <img className="w-full max-w-[75%] max-h-[600px]" src="https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/no-image.png?alt=media&token=021927bf-ea0d-4cfc-8111-e1d7681b800c" />
            <img className="w-full max-w-[25%] max-h-[600px]" src="https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/no-image.png?alt=media&token=021927bf-ea0d-4cfc-8111-e1d7681b800c" />
            
          </div>
        ) }
        {images && <Propertyslider images={images as string[]} />}
        <Divider />
        <SumWithIcons features={[...SumWithIconsProps]} />
      </div>
      {/* The layout of the right sidebar and content */}
      <div className=" container relative min-h-[80vh] flex justify-between">
        <div className="w-[74%]">
          {/* <PropertyDetails details={samplePropertyDetailsData} /> */}
          <PropertyDetails details={propertyDetails()} />
          <Description description={description!} />
          <PropertyFeatures features={SamplePropertyFeatures} />

          {Array.isArray(similarProperties) && similarProperties.length > 1 && (
            <FeaturedExclusives
              properties={similarProperties}
              title="Similar Properties"
              subtitle=""
              slidesPerView={3}
              showSliderButtons={false}
              titleContainerClassNames="!text-left max-w-[unset] my-0 mx-0"
              wrapperClassNames="w-full !p-10 bg-white rounded-xl"
              titleClassNames="text-titleColors text-lg font-playfair pb-10 mb-6 border-b border-gray-400"
            />
          )}
        </div>
        <div className="w-1/4 bg-white rounded-xl h-[50vh] sticky top-[90px] right-0">
          <SidebarAgentCard agent={agent} />
        </div>
      </div>
    </div>
  );
});

if (isDev) {
  PropertyPage.displayName = "PropertyPage";
}

export default PropertyPage;
