import main_logo from "../../assets/profile.png";
const Loading = () => {
  return (
    <div className="flex_center fixed left-0 top-0 z-[1000] min-h-screen w-full flex-col bg-white">
      <img src={main_logo} alt="main_logo" className="w-[60px]" />
    </div>
  );
};

export default Loading;
