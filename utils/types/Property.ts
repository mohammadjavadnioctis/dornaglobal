interface PropertyType {
  isFake?: boolean;
  title?: string;
  address?: Record<string, string>;
  bathrooms?: number;
  bedrooms?: number;
  city?: string;
  description?: string;
  favoriteCount?: number;
  hiResImageLink?: string;
  propertyType?:
    | "residential"
    | "commercial"
    | "land"
    | "building"
    | "tourismFacility";
  propertyTypeDimension: "string";
  propertyStatus?: "rental" | "sale";
  propertyDealStatus?: "pending" | "negotiation" | "closed";
  insights?: Record<string, string>;
  latitude?: number;
  loigitude?: number;
  listingDataSource?: string;
  listingProviderType?: "agent" | "customer" | "admin";
  lotSize?: number;
  livingArea?: number;
  sizeUnis?: "sqrft";
  nearbyProperties?: PropertyType[];
  photos?: photos[];
  price?: number;
  primaryVideo?: "string";
  yearBuilt?: number;
  garage?: number;
  id: string;

  // TODO: define dates for types where date is needed
}

interface photos {
  caption?: string;
  mixedSources: {
    webp?: {
      width: number;
      url: string;
    }[];
    jpeg?: {
      width: number;
      url: string;
    }[];
  };
}

interface details {
  price?: number;
  currency?: "usd" | "tl";
  dealType?: "rental" | "sale";
  usageType?: "residential" | "commercial" | "etc";
  estateType?: "flat" | "villa" | "apt" | "office" | "pent" | "land";
  area?: number;
  constructionDate?: string;
  floorNo?: number;
  features?: features;
}

interface features {
  noOfBathRooms?: number;
  noOfBedRooms?: number;
  noOfParkings?: number;
}

export default PropertyType;
