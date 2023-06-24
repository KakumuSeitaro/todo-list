import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <div className="text-red-400 text-7xl font-bold p-3 bg-amber-400 text-center">TODO-LIST</div>
      <ul className="p-10 text-xl text-center">
        <Link href="/step6" className="list-item py-1">
          1. カウントアップ
        </Link>
        <Link href="/step7" className="list-item py-1">
          2. テキスト入力
        </Link>
        <Link href="/step8" className="list-item py-1">
          3. 箇条書き
        </Link>
        <Link href="/step10" className="list-item py-1">
          4. to doリスト
        </Link>
        <Link href="/step11" className="list-item py-1">
          5. to doリスト  消去機能付き
        </Link>
      </ul>
    </div>
  );
}
