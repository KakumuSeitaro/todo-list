import Link from "next/link";
import { useState } from "react";

const Step6 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-3xl">{count}</div>
      <div
        className="select-none mt-10 px-3 py-1 cursor-pointer bg-blue-300 hover:bg-blue-500"
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        +1
      </div>
      <Link className="p-2 mt-32 border-b-2" href="/">
        Step一覧へ
      </Link>
    </div>
  );
};
export default Step6;
