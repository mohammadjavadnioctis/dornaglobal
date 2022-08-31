interface PropertyType {
  title?: string;
  images?: string[];
  owner?: string;
  datePublished?: Date;
  details?: details;
  id: string;
  // TODO: define dates for types where date is needed
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
