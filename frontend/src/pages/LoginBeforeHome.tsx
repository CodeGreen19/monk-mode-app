import { Button } from "@/components/ui/button";
import main_logo from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const LoginBeforeHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex_center fixed left-0 top-0 z-[100] min-h-screen w-full flex-col bg-white">
      <div className="flex_center flex-col">
        <div className="bb_1 flex_center w-full">
          <img src={main_logo} alt="main_logo" className="w-[70px]" />
        </div>
        <p>The ultimate productivity app</p>
        <h1 className="my-4">
          <div className="translate-x-[-40px] text-[2rem] font-bold">Monk</div>
          <div className="translate-x-[40px] text-[2rem] font-bold">
            Mode...
          </div>
        </h1>
        <Button onClick={() => navigate("/login")}>Login</Button>
        <div className="bb_1 m-1 p-1">or</div>
        <Button onClick={() => navigate("/signup")}>Signup</Button>

        <div className="mt-6"> Track your progress...</div>
      </div>
    </div>
  );
};

export default LoginBeforeHome;
