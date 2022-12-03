import formFiledsAlias from "./FormFieldsAlias"

const { address, aidat, balcony, buildingAge, deposit, facing, floor, furnished, heatingModel, livingArea, noOfBathrooms, noOfEntrance, noOfRooms, preRent, price, residenceName, titleDeedStatus, totalArea, totalFloorCount, usageStatus, view, withinResidence, avilableForCreditUsage, imarStatus, adaNo, parselNo, gaba, kaks, floorReturn, theUnitOntheFirstFloor } = formFiledsAlias

const ChooseCategorySteps = [
    {
        categoryName: 'residential',
        categoryLabel: 'Residential',
        dealTypes: [
            { dealName: 'rental', dealLable: 'Rental', id: '1' },
            { dealName: 'forsale', dealLable: 'For sale', id: '2' },
            { dealName: 'dailyRental', dealLable: 'Daily rent', id: '3' },
        ],
        rentalPropertyTypes: [
            {
                propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '1',
                formFields: ['residential apt rental', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, formFiledsAlias.noOfEntrance, formFiledsAlias.deposit, formFiledsAlias.preRent, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'residence', propertyTypeLabel: 'Residence', id: '2',
                formFields: ['residential residence rental', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, formFiledsAlias.deposit, formFiledsAlias.usageStatus, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'detachedHouse', propertyTypeLabel: 'Detached House', id: '3',
                formFields: ['residential detahed rental', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'villa', propertyTypeLabel: 'Villa', id: '4',
                formFields: ['residential villa rental', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.heatingModel, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.usageStatus, formFiledsAlias.withinResidence, formFiledsAlias.facing, formFiledsAlias.residenceName, avilableForCreditUsage, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            // {propertyTypeName: 'residentialRentalspecific', propertyTypeLabel: 'residentialRentalspecific', id: '4'},
        ],
        forSalePropertyTypes: [
            {
                propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '1',
                formFields: ['forsale api residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }]
            },
            {
                propertyTypeName: 'residence', propertyTypeLabel: 'Residence', id: '2',
                formFields: ['forSale residence residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'detachedHouse', propertyTypeLabel: 'Detached House', id: '3',
                formFields: ['forsale detached residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],


            },
            {
                propertyTypeName: 'villa', propertyTypeLabel: 'Villa', id: '4',
                formFields: ['forsale villa residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            // {propertyTypeName: 'residentialforsalespecific', propertyTypeLabel: 'residentialforsalespecific', id: '4'},


        ],
        dailyRentalPropertyTypes: [
            {
                propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '1',
                formFields: ['dailyRental apt residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'residence', propertyTypeLabel: 'Residence', id: '2',
                formFields: ['dailyRental residnece residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'detachedHouse', propertyTypeLabel: 'Detached House', id: '3',
                formFields: ['dailyRental detached residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'villa', propertyTypeLabel: 'Villa', id: '4',
                formFields: ['dailyRental villa residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            // {propertyTypeName: 'residentialdailyRentalspecific', propertyTypeLabel: 'residentialdailyRentalspecific', id: '4'},
        ],
        id: '1'
    },
    // the commercial parent category
    {
        categoryName: 'commercial',
        categoryLabel: 'Commercial',
        dealTypes: [
            { dealName: 'rental', dealLable: 'Rental', id: '1' },
            { dealName: 'forsale', dealLable: 'For sale', id: '2' },
            { dealName: 'lease', dealLable: 'For lease', id: '3' },

        ],
        rentalPropertyTypes: [
            { propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '1' },
            { propertyTypeName: 'office', propertyTypeLabel: 'Office', id: '2' },
            { propertyTypeName: 'coffeeShop', propertyTypeLabel: 'Coffee Shop/Bar', id: '3' },
            { propertyTypeName: 'restaurant', propertyTypeLabel: 'Restaurant', id: '4' },
            { propertyTypeName: 'Warehouse', propertyTypeLabel: 'Warehouse', id: '5' },
            { propertyTypeName: 'store', propertyTypeLabel: 'Store/shop', id: '6' },
            { propertyTypeName: 'Factory', propertyTypeLabel: 'factory', id: '7' },
            { propertyTypeName: 'parking', propertyTypeLabel: 'parking', id: '8' },
            // {propertyTypeName: 'commercialrentalPropertyTypes', propertyTypeLabel: 'commercialrentalPropertyTypes', id: '9'},
        ],
        forSalePropertyTypes: [
            { propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '1' },
            { propertyTypeName: 'office', propertyTypeLabel: 'Office', id: '2' },
            { propertyTypeName: 'coffeeShop', propertyTypeLabel: 'Coffee Shop/Bar', id: '3' },
            { propertyTypeName: 'restaurant', propertyTypeLabel: 'Restaurant', id: '4' },
            { propertyTypeName: 'Warehouse', propertyTypeLabel: 'Warehouse', id: '5' },
            { propertyTypeName: 'store', propertyTypeLabel: 'Store/shop', id: '6' },
            { propertyTypeName: 'Factory', propertyTypeLabel: 'factory', id: '7' },
            { propertyTypeName: 'parking', propertyTypeLabel: 'parking', id: '8' },
            // {propertyTypeName: 'commercialforsalePropertyTypes', propertyTypeLabel: 'commercialforsalePropertyTypes', id: '4'},

        ],
        id: '2'
    },
    // land parent category
    {
        categoryName: 'land',
        categoryLabel: 'Land',
        dealTypes: [
            {
                dealName: 'rental', dealLable: 'Rental', id: '1',
                formFields: ['land for rent', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],
            },

            {
                dealName: 'forsale', dealLable: 'For sale', id: '2',
                formFields: ['land forsale', price, address, totalArea, imarStatus, adaNo, parselNo, gaba, kaks, floorReturn],
            },
        ],
        id: '3'
    },
    // building parent category
    {
        categoryName: 'bulding',
        categoryLabel: 'Building',
        dealTypes: [
            { dealName: 'rental', dealLable: 'Rental', id: '1',
            formFields: ['buildingRental', price, address, totalArea, buildingAge, theUnitOntheFirstFloor, totalFloorCount, heatingModel]
        },
            { dealName: 'forsale', dealLable: 'For sale', id: '2',
            formFields: ['buildingForSale', price, address, totalArea, buildingAge, theUnitOntheFirstFloor, totalFloorCount, heatingModel]

        },
            // { dealName: 'lease', dealLable: 'For lease', id: '3' },
            // {dealName: 'buildingspecific', dealLable: 'buildingspecific', id: '3'},

        ],
        id: '4'
    },



]




export default ChooseCategorySteps
