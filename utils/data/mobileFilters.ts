import { MultiLevelMenuItemType, MultiLevelMenuType } from "~/components/MultiLevelMenu/MultiLevelMenu"
import AddressInput from "~/components/pages/Search/Partials/AddressInput/AddressInput"

const MobileFiltersData: MultiLevelMenuItemType[] = [
    {
        id: 'main',
        label: 'Main',
        goToMenu: 'main',
        menuItems: [
            {
                id: 'address',
                label: 'address',
                goToMenu: 'adress',
                parent: 'main'
            },
            {
                id: 'price',
                label: 'Price',
                goToMenu: 'price',
                parent: 'main'
            },
            {
                id: 'address',
                label: 'address',
                goToMenu: 'adress',
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
        
   },

]

export default MobileFiltersData