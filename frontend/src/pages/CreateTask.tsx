import AddTask from "@/components/task/AddTask";
import { DatePicker } from "@/components/task/DatePicker";
import { Button } from "@/components/ui/button";
import { AlarmClockCheck } from "lucide-react";
import { FaTasks } from "react-icons/fa";

const CreateTask = () => {
  return (
    <div className="min-h-screen pt-[70px] pb-[70px] bg-white p-3">
      <h1 className=" flex items-center text-[1.2rem]">
        <AlarmClockCheck className="mr-2 h-4 w-4 text-[1.2rem]" />
        <span>Create Task</span>
      </h1>
      <div>
        <div>
          <h2>From:</h2>
          <DatePicker />
        </div>
        <div>
          <h2>to:</h2>
          <DatePicker />
        </div>
      </div>
      <h1 className=" flex items-center mt-4 text-[1.2rem]">
        <FaTasks className="mr-2  h-4 w-4 text-[1.2rem]" />

        <span>Add Your Tasks</span>
      </h1>
      <div className="flex_center">
        <AddTask />
      </div>
      <div className="flex justify-end my-3">
        <Button variant={"default"}>Create</Button>
      </div>
    </div>
  );
};

export default CreateTask;
