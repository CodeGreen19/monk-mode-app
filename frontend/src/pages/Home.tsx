import { HomeAccordian } from "@/components/home/Accordian";
import { HomeCalender } from "@/components/home/Canlender";
import DayList from "@/components/home/DayList";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="pb-[60px] pt-[60px]">
      <div className="pl-3 pt-3 overflow-x-scroll day_list_box">
        <DayList />
      </div>
      <div className="w-full hidden md:flex justify-end p-3">
        <Button variant={"outline"}>See All</Button>
      </div>
      <div className=" p-3 mt-3 bg-white">
        <HomeCalender />
      </div>

      <div className=" bg-white p-3">
        <HomeAccordian />
      </div>
    </div>
  );
};

export default Home;
