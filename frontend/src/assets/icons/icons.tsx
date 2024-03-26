import { RiHome5Line } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { Notification } from "@/components/notification/Notification";
export const BottomIconsArr = [
  { icon: <RiHome5Line />, location: "/" },
  { icon: <LuSearch />, location: "/search" },
  { icon: <Notification />, location: "/notification" },
  { icon: <IoAddCircleOutline />, location: "/task/create" },
];
