import { BsHouse } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import UserIcon from "~/assets/icons/UserIcon";
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
    name: "About",
    href: "/about",
    id: 5,
  },
  
  {
    name: "Profile",
    href: "/profile",
    id: 6,
  },
];

const userDashboardMenu : DashboardMenuItemsType[] = [
  {
    name: 'Profile',
    href: 'profile',
    id: '1',
    Icon: UserIcon
   
  },
  {
    name: 'My Listings',
    href: 'myListings',
    id: '2',
    Icon: BsHouse
  },
  {
    name: 'Messages',
    href: 'messages',
    id: '3',
    Icon: FiMessageSquare
  },
]



export { mainMenuData, userDashboardMenu };
