import Link from "next/link";
import { useState } from "react";

const Step7 = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-3xl pb-5">{inputVal ? inputVal : "ここに表示"}</div>
      <input
        className="border border-black p-1"
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <Link className="p-2 mt-32 border-b-2" href="/">
        Step一覧へ
      </Link>
    </div>
  );
};
export default Step7;
