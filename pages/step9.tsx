import Link from "next/link";
import { useState } from "react";
import Todo9 from "../components/Step9/Todo9";

const Step9 = () => {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="self-start ml-10 text-3xl font-bold border-b-2">
        Todoをコンポーネント化
      </div>
      <div className="text-3xl pb-5 list-disc">
        {todoList.map((val, i) => {
          return <Todo9 key={i} todo={val} />;
        })}
      </div>
      <div className="flex">
        <input
          className="border border-black p-1"
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <div
          onClick={() => {
            setTodoList((val) => {
              return [...val, inputVal];
            });
            setInputVal("");
          }}
          className="ml-3 p-2 bg-blue-300 hover:bg-blue-500 cursor-pointer"
        >
          確定
        </div>
      </div>
      <Link className="p-2 mt-32 border-b-2" href="/">
        Step一覧へ
      </Link>
    </div>
  );
};

export default Step9;
