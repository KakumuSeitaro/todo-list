import Link from "next/link";
import { useState } from "react";
import Todo10 from "../components/Step10/Todo10";
import { StarIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Step10 = () => {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState<
    { todo: string; isImportant: boolean; deadline: Date }[]
  >([]);
  const [deadline, setDeadline] = useState(new Date());
  const [isImportant, setIsImportant] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="pb-5 ">
        <div className="grid grid-cols-5 font-bold gap-5">
          <div className="col-span-1">スター　　　</div>
          <div className="col-span-2">やること　</div>
          <div className="col-span-2">　期限</div>
        </div>
        {todoList.map((val, i) => {
          return (
            <Todo10
              key={i}
              todo={val.todo}
              isImportant={val.isImportant}
              deadline={val.deadline}
            />
          );
        })}
      </div>
      <div className="flex w-full items-center justify-center">
        <StarIcon
          onClick={() => {
            setIsImportant((val) => {
              return val ? false : true;
            });
          }}
          className={`mr-3 h-8 w-8 cursor-pointer ${
            isImportant ? "fill-yellow-300 " : "fill-white"
          }`}
        />
        <input
          className="border border-black p-1"
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <div>
          <DatePicker
            className="border border-black p-1 ml-5"
            dateFormat="yyyy/MM/dd"
            selected={deadline}
            onChange={(date: Date) => setDeadline(date)}
          />
        </div>
        <div
          className="ml-3 p-2 bg-blue-300 hover:bg-blue-500 cursor-pointer"
          onClick={() => {
            setTodoList((val) => {
              return [
                ...val,
                {
                  todo: inputVal,
                  isImportant: isImportant,
                  deadline: deadline,
                },
              ];
            });
            setInputVal("");
            setIsImportant(false);
            setDeadline(new Date());
          }}
        >
          確定
        </div>
      </div>
      <Link className="p-2 mt-32 border-b-2 bg-red-400 hover:bg-red-100" href="/">
        ホームへ戻る
      </Link>
    </div>
  );
};

export default Step10;
