

export default function Thumbnail() {
  return (
    <div className="w-96 h-[500px] flex flex-col justify-center items-center border border-slate-300 rounded-md cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 23 23"
        strokeWidth=".5"
        stroke="#6b7280"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 3v4a1 1 0 0 0 1 1h4" />
        <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
        <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
      </svg>
      <p className="font-Inter pt-4 text-gray-500">Click here or drop a pdf file</p>
    </div>
  );
}
