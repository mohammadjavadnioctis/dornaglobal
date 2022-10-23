// TODO: define the rest of this


interface ChosenPropertyType {
    categoryName: string;
    categoryLabel: string;
    dealTypes: {
        dealName: string;
        dealLable: string;
        id: string;
    }[];
    rentalPropertyTypes: {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
    }[];
    forSalePropertyTypes: {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
    }[];
    dailyRentalPropertyTypes: {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
    }[];
    id: string;
}

export default ChosenPropertyType