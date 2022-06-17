import Link from "next/link";

export default function FlatBtn({ text, path }) {
  return (
    <Link href={`/${path}`}>
      <button className="w-96 h-16 p-4 mb-4 flex justify-between items-center border border-slate-300 rounded-md ">
        <span className="font-Inter font-medium text-base text-gray-700">
          {text}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#374151"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="13" y1="18" x2="19" y2="12" />
          <line x1="13" y1="6" x2="19" y2="12" />
        </svg>
      </button>
    </Link>
  );
}
