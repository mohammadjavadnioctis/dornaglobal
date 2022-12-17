import { BsHouse } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";
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
    href: "/search",
    id: 2,
  },
  {
    name: "For Rent",
    href: "/search/rent",
    id: 3,
  },
  {
    name: "For Sale",
    href: "/search/rent",
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

const adminDashboardMenu : DashboardMenuItemsType[] = [
  {
    name: 'Pending Properties List',
    href: 'pendingProperties',
    id: '3',
    Icon: MdOutlinePending
  },
  {
    name: 'All Properties List',
    href: 'allPropertiesList',
    id: '2',
    Icon: BsHouse
  },
  {
    name: 'Users List',
    href: 'usersList',
    id: '1',
    Icon: UserIcon
   
  },
  {
    name: 'Messages',
    href: 'messages',
    id: '4',
    Icon: FiMessageSquare
  },
]



export { mainMenuData, userDashboardMenu, adminDashboardMenu };
