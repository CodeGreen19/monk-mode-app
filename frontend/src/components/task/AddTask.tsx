import { Button } from "../ui/button";
import { RiDeleteBack2Line } from "react-icons/ri";

const AddTask = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="b_1 m-2 rounded-md bg-slate-50 p-[10px] outline-none"
          placeholder="enter a title..."
        />
      </div>
      <div className="flex_between">
        <input
          type="text"
          className="b_1 m-2 rounded-md bg-slate-50 p-[10px] outline-none"
          placeholder="enter task..."
        />
        <Button variant={"outline"}>Add</Button>
      </div>
      <ul>
        <li className="flex items-center justify-start py-3">
          <span>1</span>
          <p className="ml-3">
            Lorem ipsum dolor, vero ab quaerat eius tenetur odio neque
          </p>
          <span className="m-3 text-[1.3rem]">
            <RiDeleteBack2Line />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AddTask;
