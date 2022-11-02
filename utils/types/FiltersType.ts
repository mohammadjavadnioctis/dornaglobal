interface FiltersType {
    address?: {
        city: string | null,
        district: string | null,
        neighbourhood: string | null,
    },
    price?:{
        minPrice: number | null,
        maxPrice:number | null,
    },
    titleDeedStatus?: 'mulkiyet' | 'irtifakli' | 'arsa' | 'hisseli' | null,
    noOfBedRooms?: number | null,
    yearBuilt?: number | null,
    floor?: number | null,
    heatingSystem?: string | null,
    noOfBathRooms?: number | null,
    balcony?: boolean | null,
    furnished?: boolean | null,
    usageStatus?: 'empty'  | 'underRent' | null ,
    isInBuildingComplex?: boolean | null,
    dateListed?: Date | null

}

export default FiltersType