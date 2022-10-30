interface FiltersType {
    address?: {
        city: string,
        district: string,
        neighbourhood: string,
    },
    price?:{
        minPrice: number,
        maxPrice:number,
    },
    titleDeedStatus?: 'mulkiyet' | 'irtifakli' | 'arsa' | 'hisseli',
    noOfBedRooms?: string,
    yearBuilt?: number,
    floor?: string,
    heatingSystem?: string,
    noOfBathRooms?: number,
    balcony?: boolean,
    furnished?: boolean,
    usageStatus?: 'empty'  | 'underRent' ,
    isInBuildingComplex?: boolean,
    dateListed?: Date

}

export default FiltersType