import formFiledsAlias from "./FormFieldsAlias"

const { address, aidat, balcony, buildingAge, deposit, facing, floor, furnished, heatingModel, livingArea, noOfBathrooms, noOfEntrance, noOfBedRooms, preRent, price, residenceName, titleDeedStatus, totalArea, totalFloorCount, usageStatus, view, withinResidence, avilableForCreditUsage, imarStatus, adaNo, parselNo, gaba, kaks, floorReturn, theUnitOntheFirstFloor, alchoholUsagePremission, zeminEtudu, elevatorCount } = formFiledsAlias

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
                formFields: ['residential apt rental', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms,formFiledsAlias.noOfBathrooms , formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.aidat, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.noOfEntrance, formFiledsAlias.deposit, formFiledsAlias.preRent, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'residence', propertyTypeLabel: 'Residence', id: '2',
                formFields: ['residential residence rental', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.aidat, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, formFiledsAlias.deposit, formFiledsAlias.usageStatus, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'detachedHouse', propertyTypeLabel: 'Detached House', id: '3',
                formFields: ['residential detahed rental', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.noOfBathrooms, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.aidat, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'villa', propertyTypeLabel: 'Villa', id: '4',
                formFields: ['residential villa rental', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.noOfBathrooms, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.aidat, formFiledsAlias.heatingModel, formFiledsAlias.address, formFiledsAlias.usageStatus, formFiledsAlias.withinResidence, formFiledsAlias.facing, formFiledsAlias.residenceName, avilableForCreditUsage, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            // {propertyTypeName: 'residentialRentalspecific', propertyTypeLabel: 'residentialRentalspecific', id: '4'},
        ],
        forSalePropertyTypes: [
            {
                propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '1',
                formFields: ['forsale api residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }]
            },
            {
                propertyTypeName: 'residence', propertyTypeLabel: 'Residence', id: '2',
                formFields: ['forSale residence residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'detachedHouse', propertyTypeLabel: 'Detached House', id: '3',
                formFields: ['forsale detached residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],


            },
            {
                propertyTypeName: 'villa', propertyTypeLabel: 'Villa', id: '4',
                formFields: ['forsale villa residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            // {propertyTypeName: 'residentialforsalespecific', propertyTypeLabel: 'residentialforsalespecific', id: '4'},


        ],
        dailyRentalPropertyTypes: [
            {
                propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '1',
                formFields: ['dailyRental apt residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'residence', propertyTypeLabel: 'Residence', id: '2',
                formFields: ['dailyRental residnece residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'detachedHouse', propertyTypeLabel: 'Detached House', id: '3',
                formFields: ['dailyRental detached residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

            },
            {
                propertyTypeName: 'villa', propertyTypeLabel: 'Villa', id: '4',
                formFields: ['dailyRental villa residential', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],

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
            // { dealName: 'lease', dealLable: 'For lease', id: '3' },

        ],
        rentalPropertyTypes: [
            {
                propertyTypeName: 'office', propertyTypeLabel: 'Office', id: '1',
                formFields: ['commercial rental office', address, price, totalArea, noOfBedRooms, buildingAge, aidat, heatingModel, floor, avilableForCreditUsage, usageStatus,]

            },
            {
                propertyTypeName: 'coffeeShop', propertyTypeLabel: 'Coffee Shop/Bar', id: '2',
                formFields: ['commercial rental cofeeshop', address, price, totalArea, buildingAge, heatingModel, alchoholUsagePremission, aidat, usageStatus]
            },
            {
                propertyTypeName: 'store', propertyTypeLabel: 'Store/shop', id: '3',
                formFields: ['commercial rental store', address, price, totalArea, noOfBedRooms, aidat, heatingModel, buildingAge, avilableForCreditUsage]
            },
            {
                propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '4',
                formFields: ['commercial rental apt', address, price, livingArea, totalArea, noOfBedRooms, totalFloorCount, floor, aidat, buildingAge, heatingModel, usageStatus, titleDeedStatus, zeminEtudu]
            },
            {
                propertyTypeName: 'mall', propertyTypeLabel: 'Mall', id: '5',
                formFields: ['commercial rental mall', address, price, livingArea, totalArea, totalFloorCount, heatingModel, buildingAge, elevatorCount, usageStatus]
            },
            // {propertyTypeName: 'commercialrentalPropertyTypes', propertyTypeLabel: 'commercialrentalPropertyTypes', id: '9'},
        ],
        forSalePropertyTypes: [
            {
                propertyTypeName: 'office', propertyTypeLabel: 'Office', id: '1',
                formFields: ['commercial Forsal office', price, address, totalArea, noOfBedRooms, buildingAge, aidat, heatingModel, floor, avilableForCreditUsage, usageStatus, titleDeedStatus],

            },
            {
                propertyTypeName: 'coffeeShop', propertyTypeLabel: 'Coffee Shop/Bar', id: '2',
                formFields: ['commercial Forsale cofeeShop', price, address, totalArea, noOfBedRooms, buildingAge, aidat, heatingModel, floor, alchoholUsagePremission, usageStatus, titleDeedStatus],

            },
            {
                propertyTypeName: 'store', propertyTypeLabel: 'Store/shop', id: '3',
                formFields: ['commercial Forsale store', price, address, totalArea, noOfBedRooms, buildingAge, aidat, heatingModel, floor, titleDeedStatus],

            },
            {
                propertyTypeName: 'apt', propertyTypeLabel: 'Apartment', id: '4',
                formFields: ['commercial Forsale apt', price, address, totalArea, noOfBedRooms, noOfBathrooms, totalFloorCount, floor, buildingAge, aidat, heatingModel, usageStatus, titleDeedStatus, zeminEtudu],

            },
            {
                propertyTypeName: 'mall', propertyTypeLabel: 'Mall', id: '5',
                formFields: ['commercial for sale mall', address, price, totalArea, totalFloorCount, heatingModel, buildingAge, elevatorCount, usageStatus, titleDeedStatus]
            },

            // { propertyTypeName: 'restaurant', propertyTypeLabel: 'Restaurant', id: '4' },
            // { propertyTypeName: 'Warehouse', propertyTypeLabel: 'Warehouse', id: '5' },
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
                formFields: ['land for rent', formFiledsAlias.price, formFiledsAlias.livingArea, formFiledsAlias.totalArea, formFiledsAlias.noOfBedRooms, formFiledsAlias.floor, formFiledsAlias.totalFloorCount, formFiledsAlias.buildingAge, formFiledsAlias.noOfBathrooms, formFiledsAlias.aidat, formFiledsAlias.titleDeedStatus, formFiledsAlias.address, formFiledsAlias.facing, formFiledsAlias.residenceName, { name: 'features', values: [formFiledsAlias.balcony, formFiledsAlias.furnished] }],
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
            {
                dealName: 'rental', dealLable: 'Rental', id: '1',
                formFields: ['buildingRental', price, address, totalArea, buildingAge, theUnitOntheFirstFloor, totalFloorCount, heatingModel]
            },
            {
                dealName: 'forsale', dealLable: 'For sale', id: '2',
                formFields: ['buildingForSale', price, address, totalArea, buildingAge, theUnitOntheFirstFloor, totalFloorCount, heatingModel]

            },
            // { dealName: 'lease', dealLable: 'For lease', id: '3' },
            // {dealName: 'buildingspecific', dealLable: 'buildingspecific', id: '3'},

        ],
        id: '4'
    },



]




export default ChooseCategorySteps
