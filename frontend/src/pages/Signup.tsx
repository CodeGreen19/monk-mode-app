import { SignUpBox } from "@/components/user/SignUpBox";
import main_logo from "../assets/profile.png";
const Signup = () => {
  return (
    <div className="flex_center fixed left-0 top-0 z-[100] min-h-screen w-full flex-col bg-white">
      <div className="flex_center flex-col">
        <img src={main_logo} className="w-[60px]" alt="main_logo" />
        <div className="mb-3 font-bold">Monk Mode</div>
      </div>
      <SignUpBox />
    </div>
  );
};

export default Signup;
