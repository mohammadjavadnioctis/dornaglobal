import { MultiLevelMenuItemType, MultiLevelMenuType } from "~/components/MultiLevelMenu/MultiLevelMenu"
import AddressInput from "~/components/pages/Search/Partials/AddressInput/AddressInput"
import MinMaxPrice from "~/components/pages/Search/Partials/Filters/Partials/MinMaxPrice"
import NoOfBathRoomsFilterInput from "~/components/pages/Search/Partials/Filters/Partials/NoOfBathRoomsFilterInput"
import NoOfBeroomsFilterInput from "~/components/pages/Search/Partials/Filters/Partials/NoOfBeroomsFilterInput"

const MobileFiltersData: MultiLevelMenuItemType[] = [
    {
        id: 'main',
        label: 'Main',
        goToMenu: 'main',
        menuItems: [
            {
                id: 'address',
                label: 'Address',
                goToMenu: 'address',
                parent: 'main'
            },
            {
                id: 'price',
                label: 'Price',
                goToMenu: 'price',
                parent: 'main'
            },
            {
                id: 'bedroomCountFilter',
                label: 'Bedroom count',
                goToMenu: 'bedroomCountFilter',
                parent: 'main'
            },
            {
                id: 'bathroomCount',
                label: 'Bathroom count',
                goToMenu: 'bathroomCountFilter',
                parent: 'main'
            },
        ],
        component: null
    },
    {
        id: 'address',
        label: 'Address',
        goToMenu: '',
        component: AddressInput
   },
    {
        id: 'price',
        label: 'Price',
        goToMenu: '',
        component: MinMaxPrice
   },
    {
        id: 'bedroomCountFilter',
        label: 'Bedroom count',
        goToMenu: '',
        component: NoOfBeroomsFilterInput
   },
    {
        id: 'bathroomCountFilter',
        label: 'Bathrooms count',
        goToMenu: '',
        component: NoOfBathRoomsFilterInput
   },

]

export default MobileFiltersData