import { StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

type Props = {
  todo: string;
  isImportant: boolean;
  deadline: Date;
  index: number;
  setTodoList: Dispatch<
    SetStateAction<
      {
        todo: string;
        isImportant: boolean;
        deadline: Date;
      }[]
    >
  >;
};
const Todo11 = (props: Props) => {
  return (
    <div className="grid grid-cols-6 items-center gap-5">
      <StarIcon
        className={`h-8 w-8 col-span-1 ${
          props.isImportant ? "fill-yellow-300" : "fill-white"
        }`}
      />
      <div className="text-3xl col-span-2">{props.todo}</div>
      <div className="text-xl self-end col-span-2">
        {props.deadline.toLocaleDateString()}
      </div>
      <TrashIcon
        className="h-8 w-8 text-red-500 cursor-pointer"
        onClick={() => {
          props.setTodoList((val) => val.filter((_, i) => i !== props.index));
        }}
      />
    </div>
  );
};

export default Todo11;
