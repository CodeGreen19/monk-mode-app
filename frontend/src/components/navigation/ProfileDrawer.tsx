import profile from "../../assets/profile.png";
import { RxCross2 } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { useLogoutMutation, useMeQuery } from "@/redux/userAuth";

export function ProfileDrawer() {
  const [logout] = useLogoutMutation();
  const { data } = useMeQuery();

  const hanldeLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex items-center ">
          <Avatar className="h-12 w-12">
            <AvatarImage src={profile} />
          </Avatar>
          <div className="mx-2">
            <div>lavel 1</div>
            <div className="font-bold">{`${data?.user?.firstName} ${data?.user?.lastName}`}</div>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="m-auto w-full p-3 md:w-[50%]">
        <div className="flex justify-end">
          <DrawerClose asChild>
            <Button variant="outline" className="m-4">
              <RxCross2 />
            </Button>
          </DrawerClose>
        </div>
        <div className=" w-full">
          <DrawerFooter className="">
            <Button className="mb-2" variant={"default"}>
              <DrawerClose asChild>
                <Link to={"/profile/edit"}>View Profile</Link>
              </DrawerClose>
            </Button>

            <DrawerClose onClick={hanldeLogout}>
              <Button className="mb-2 w-full text-[red]" variant={"outline"}>
                Logout
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
