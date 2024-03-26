import { Button } from "../ui/button";

const DayList = () => {
  return (
    <div className="flex items-center gap-2 justify-start">
      <div className="bg-white b_1 flex-none overflow-x-auto rounded-sm h-[150px] p-3 w-[200px]">
        <div className="w-[50%] flex_center h-[50%] b_1  bg-slate-50 rounded-md">
          Day 1
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div>Date: 14 march</div>
            <div>Task: completed</div>
          </div>
          <Button variant={"outline"}>View</Button>
        </div>
      </div>
      <div className="bg-white b_1 flex-none overflow-x-auto rounded-sm h-[150px] p-3 w-[200px]">
        <div className="w-[50%] flex_center h-[50%] b_1  bg-slate-50 rounded-md">
          Day 1
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div>Date: 14 march</div>
            <div>Task: completed</div>
          </div>
          <Button variant={"outline"}>View</Button>
        </div>
      </div>
      <div className="bg-white b_1 flex-none overflow-x-auto rounded-sm h-[150px] p-3 w-[200px]">
        <div className="w-[50%] flex_center h-[50%] b_1  bg-slate-50 rounded-md">
          Day 1
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div>Date: 14 march</div>
            <div>Task: completed</div>
          </div>
          <Button variant={"outline"}>View</Button>
        </div>
      </div>
      <div className="bg-white b_1 flex-none overflow-x-auto rounded-sm h-[150px] p-3 w-[200px]">
        <div className="w-[50%] flex_center h-[50%] b_1  bg-slate-50 rounded-md">
          Day 1
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div>Date: 14 march</div>
            <div>Task: completed</div>
          </div>
          <Button variant={"outline"}>View</Button>
        </div>
      </div>
    </div>
  );
};

export default DayList;
