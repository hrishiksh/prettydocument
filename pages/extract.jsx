export default function ExtractPage() {
  return (
    <section className="ml-16">
      <div className="mb-12 flex justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="9" y2="16" />
          <line x1="5" y1="12" x2="9" y2="8" />
        </svg>
        <h1 className="font-Inter font-medium text-xl pl-2">Extract Pages</h1>
      </div>
      <div className="mb-4">
        <label className="text-base font-Inter font-normal block">
          <input
            type="radio"
            checked={true}
            className="form-radio checked:ring-1 checked:ring-yellow-500 checked:bg-yellow-500"
          />
          0 Extract single page
        </label>
        <input
          type="text"
          placeholder="eg. 3"
          className="my-4 px-4 py-3 w-full border rounded-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 font-Inter font-normal text-base"
        />
      </div>
      <div>
        <label className="text-base font-Inter font-normal block">
          <input type="radio" value="multiple" /> Extract multiple pages and
          merge into single pdf
        </label>
        <input
          type="text"
          placeholder="eg. 3-5"
          className="my-4 px-4 py-3 w-full border rounded-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 font-Inter font-normal text-base"
        />
      </div>
    </section>
  );
}
