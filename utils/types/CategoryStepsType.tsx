
interface CategoryStepsType {

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
    }[] | {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
    }[] | undefined;
    
    dailyRentalPropertyTypes: {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
    }[] | {
        propertyTypeName: string;
        propertyTypeLabel: string;
        id: string;
    }[] | undefined;
    id: string;
};

export default CategoryStepsType