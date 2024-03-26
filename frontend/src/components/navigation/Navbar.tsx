import { ProfileDrawer } from "./ProfileDrawer";
import { SideNav } from "./SideNav";

const Navbar = () => {
  return (
    <div className="fixed z-10 bb_1 bl_1 br_1 md:left-[25%] md:w-[50%] top-0 left-0 bg-[white] h-[60px] w-full flex items-center justify-between px-3">
      <div>
        <ProfileDrawer />
      </div>
      <div>
        <SideNav />
      </div>
    </div>
  );
};

export default Navbar;
