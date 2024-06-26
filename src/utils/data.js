import { HiHome, HiMap } from "react-icons/hi2";
import { MdLocalOffer } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsGrid3X3Gap, BsCalendar } from "react-icons/bs";

export const navLinks = [
  { title: "Home", href: "/", icon: HiHome },
  { title: "Activity", href: "/activity", icon: HiMap },
  { title: "Promo", href: "/promo", icon: MdLocalOffer },
];

export const loginImage = [
  { id: 1, image: "/Login-bg.jpg", title: "Login" },
  { id: 2, image: "/login-bg-2.jpg", title: "Login" },
  { id: 3, image: "/login-bg-3.jpg", title: "Login" },
];

export const sidebarLink = [
  { title: "Users", href: "/dashboard/users", icon: AiOutlineUser },
  { title: "Banner", href: "/dashboard/banner", icon: RiAdvertisementLine },
  { title: "Promo", href: "/dashboard/promo", icon: MdLocalOffer },
  { title: "Category", href: "/dashboard/category", icon: BsGrid3X3Gap },
  { title: "Activity", href: "/dashboard/activity", icon: BsCalendar },
];
