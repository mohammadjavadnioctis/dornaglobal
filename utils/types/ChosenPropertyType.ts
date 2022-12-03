// TODO: define the rest of this


interface ChosenPropertyType {
    categoryName: string;
    categoryLabel: string;
    dealTypes: {
        dealName: string;
        dealLable: string;
        id: string;
        formFields: string[] | null

    }[];
    rentalPropertyTypes: {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
        formFields: string[] | null

    }[];
    forSalePropertyTypes: {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
        formFields: string[] | null
    }[];
    dailyRentalPropertyTypes: {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
        formFields: string[] | null

    }[];
    id: string;
}

export default ChosenPropertyType