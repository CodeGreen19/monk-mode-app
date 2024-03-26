import { BottomIconsArr } from "@/assets/icons/icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <ul className="bt_1 bl_1 br_1 fixed bottom-0 left-0 flex h-[60px] w-full items-center justify-between bg-white p-4 px-[40px] md:left-[25%] md:w-[50%]">
      {BottomIconsArr.map((item, i) => (
        <li key={i}>
          <Link
            to={`${
              item.location === "/notification"
                ? useLocation().pathname
                : item.location
            }`}
          >
            <div className="text-[1.3rem]">{item.icon}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
