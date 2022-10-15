import { DashboardMenuItemsType } from "../types";



const mainMenuData = [
  {
    name: "Home",
    href: "/",
    id: 1,
  },
  {
    name: "Properties",
    href: "/properties",
    id: 2,
  },
  {
    name: "For Rent",
    href: "/properties/rent",
    id: 3,
  },
  {
    name: "For Sale",
    href: "/properties/rent",
    id: 4,
  },
  {
    name: "Profile",
    href: "/profile",
    id: 5,
  },
];

const userDashboardMenu : DashboardMenuItemsType[] = [
  {
    name: 'Profile',
    href: 'profile',
    id: '1',
   
  },
  {
    name: 'My Listings',
    href: 'myListings',
    id: '2'
  },
  {
    name: 'Messages',
    href: 'messages',
    id: '3'
  },
]



export { mainMenuData, userDashboardMenu };
