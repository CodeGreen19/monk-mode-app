import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoNotificationsOutline } from "react-icons/io5";

export function Notification() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex_center p-0">
          <IoNotificationsOutline className=" text-[1.3rem]" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-60 translate-x-[-10px] translate-y-[-10px] md:w-80">
        <div className="m-1 p-1 text-[red]">this is a notification...</div>
        <div className="m-1 p-1 text-[red]">this is a notification...</div>
        <div className="m-1 p-1 text-[red]">this is a notification...</div>
        <div className="m-1 p-1 text-[red]">this is a notification...</div>
        <div className="m-1 p-1 text-[red]">this is a notification...</div>
        <div className="m-1 p-1 text-[red]">this is a notification...</div>
        <div className="m-1 p-1 text-[red]">this is a notification...</div>
        <div className="m-1 p-1 text-[red]">this is a notification...</div>
      </PopoverContent>
    </Popover>
  );
}
