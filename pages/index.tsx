import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <div className="text-green-400 text-3xl font-bold p-5">TODO-LIST</div>
      <ul className="p-5 text-xl list-disc">
        <Link href="/step6" className="list-item py-1">
          Step 6
        </Link>
        <Link href="/step7" className="list-item py-1">
          Step 7
        </Link>
        <Link href="/step8" className="list-item py-1">
          Step 8
        </Link>
        <Link href="/step9" className="list-item py-1">
          Step 9
        </Link>
        <Link href="/step10" className="list-item py-1">
          Step 10
        </Link>
        <Link href="/step11" className="list-item py-1">
          Step 11
        </Link>
        <Link href="/step12" className="list-item py-1">
          Step 12
        </Link>
        <Link href="/step13" className="list-item py-1">
          Step 13
        </Link>
      </ul>
    </div>
  );
}
