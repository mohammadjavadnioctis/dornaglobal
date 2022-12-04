import { FieldValue } from "firebase/firestore";

interface PropertyUploadContextType {
        title: string,
        description: string 
        address?: {
            city?: string | undefined,
            district?: string | undefined,
            neighbourhood?: string | undefined,
        },
        price?: number | undefined ,
        titleDeedStatus?: 'mulkiyet' | 'irtifakli' | 'arsa' | 'hisseli' | '',
        noOfBedRooms?: number ,
        yearBuilt?: number | null,
        floor?: number | null,
        heatingSystem?: string | null,
        noOfBathRooms?: number ,
        balcony?: boolean | null,
        furnished?: boolean | null,
        usageStatus?: 'empty'  | 'underRent' | null ,
        isInBuildingComplex?: boolean | null,
        dateListed?: Date | null,
        livingArea?: number | undefined,
        totalArea?: number | undefined,
        totalFloorCount?: number | undefined,
        aydat?: number | undefined,
        buildingAge: number | null,
        id: string | undefined,
        isVarified?: boolean
        timestamp?: FieldValue;
    }
    




export default PropertyUploadContextType