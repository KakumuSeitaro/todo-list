import Link from "next/link";
import { useState } from "react";

const Step6 = () => {
  const [count, setCount] = useState(0);//カウント機能、初期値は０
  //書いたことが反映される
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      
      <div className="text-5xl">{count}</div>   
      <div
        className="select-none mt-10 px-4 py-1 cursor-pointer bg-blue-500 hover:bg-blue-500"
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        +1
      </div>
      <Link className="p-2 mt-32 border-b-2 bg-red-400 hover:bg-red-100" href="/">
        ホームへ戻る
      </Link>
    </div>
  );
};
export default Step6;
