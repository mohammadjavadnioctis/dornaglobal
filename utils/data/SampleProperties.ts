import { PropertyType } from "../types";

const PropertiesData: PropertyType[] = [
  {
    title: "Modern Apartment On The Bay",
    // @ts-ignore
    images: [
      "https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/propertyid2%2Fapartment-2-592x444.jpg?alt=media&token=84c38d79-e48e-4eea-8677-59c0e213de36",
      "https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/propertyid2%2Finner-bath-room-1-592x444.jpg?alt=media&token=15ee84b2-807e-4235-8de2-1602f4aab85a",
    ],
    details: {
      price: 5000000,
      currency: "usd",
      estateType: "apt",
      area: 1200,
      features: {
        noOfBathRooms: 2,
        noOfBedRooms: 4,
        noOfParkings: 1,
      },
    },
    id: "1",
  },
  {
    title: "Modern Apartment On The Bay",
    // @ts-ignore
    images: [
      "https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/propertyid2%2Finner-bath-room-1-592x444.jpg?alt=media&token=15ee84b2-807e-4235-8de2-1602f4aab85a",
      "/images/sampleproperty/apartment-2-592x444.jpg",
    ],
    details: {
      price: 5000000,
      currency: "usd",
      estateType: "apt",
      area: 1200,
      features: {
        noOfBathRooms: 2,
        noOfBedRooms: 4,
        noOfParkings: 1,
      },
    },
    id: "2",
  },
  {
    title: "Modern Apartment On The Bay",
    // @ts-ignore
    images: [
      "https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/propertyid2%2Finner-living-room-1-592x444.jpg?alt=media&token=a684b3bd-9c47-4582-a23d-6ce0e0226c2d",
      "/images/sampleproperty/apartment-2-592x444.jpg",
    ],
    details: {
      price: 5000000,
      currency: "usd",
      estateType: "apt",
      area: 1200,
      features: {
        noOfBathRooms: 2,
        noOfBedRooms: 4,
        noOfParkings: 1,
      },
    },
    id: "3",
  },
];

export default PropertiesData;
