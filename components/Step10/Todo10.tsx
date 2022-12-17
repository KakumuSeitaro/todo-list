import { StarIcon } from "@heroicons/react/24/outline";

type Props = {
  todo: string;
  isImportant: boolean;
  deadline: Date;
};
const Todo9 = (props: Props) => {
  return (
    <div className="grid grid-cols-5 items-center gap-5">
      <StarIcon
        className={`h-8 w-8 col-span-1 ${
          props.isImportant ? "fill-yellow-300" : "fill-white"
        }`}
      />
      <div className="text-3xl col-span-2">{props.todo}</div>
      <div className="text-xl self-end col-span-2">
        {props.deadline.toLocaleDateString()}
      </div>
    </div>
  );
};

export default Todo9;
