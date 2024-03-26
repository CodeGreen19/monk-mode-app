import { PiSmileySadLight } from "react-icons/pi";

const NotFound = () => {
  return (
    <div className="flex_center min-h-screen w-full bg-white">
      <span className="flex_center text-[1.2rem] font-bold">
        Not Found <PiSmileySadLight />
      </span>
    </div>
  );
};

export default NotFound;
