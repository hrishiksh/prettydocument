import Link from "next/link";
import PrimaryBtn from "../components/primaryBtn";

export default function ExtractPage() {
  return (
    <section className="ml-16">
      <Link href="/">
        <div className="mb-12 flex justify-start items-center cursor-pointer">
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
      </Link>

      <div className="mb-4">
        <div class="flex justify-center">
          <div>
            <div class="form-check">
              <input
                class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="inline-block text-gray-800" for="flexRadioDefault1">
                Default radio
              </label>
              <input
                type="text"
                placeholder="eg. 3"
                className="my-4 px-4 py-3 w-full border rounded-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 font-Inter font-normal text-base"
              />
            </div>
            <div class="form-check">
              <input
                class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="inline-block text-gray-800" for="flexRadioDefault2">
                Default checked radio
              </label>
              <input
                type="text"
                placeholder="eg. 3-5"
                className="my-4 px-4 py-3 w-full border rounded-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 font-Inter font-normal text-base"
              />
            </div>
          </div>
        </div>
      </div>
      <PrimaryBtn>
        Process
      </PrimaryBtn>
    </section>
  );
}
