import Link from "next/link";
import { useState } from "react";

const Step8 = () => {
  const [inputVal, setInputVal] = useState("");
  const [todo, setTodo] = useState<string[]>([]);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-3xl pb-5 list-disc">
        {todo.map((val, i) => {
          return (
            <div key={i} className="list-item">
              {val}
            </div>
          );
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
            setTodo((val) => {
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

export default Step8;
