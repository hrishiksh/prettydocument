import { useState } from "react";
import Link from "next/link";
import PrimaryBtn from "../components/primaryBtn";
import useFileStore from "../state/useFilestore";
import useExtractpdf from "../hooks/useExtractpdf";
import { saveAs } from "file-saver";

export default function ExtractPage() {
  const [text, setText] = useState("");
  const file = useFileStore((state) => state.file);
  const extractpdf = useExtractpdf();

  const handlePdfExtract = async () => {
    const rawPageRange = text.split("-");

    const finalPdf = rawPageRange[1]
      ? await extractpdf(file, Number(rawPageRange[0]), Number(rawPageRange[1]))
      : await extractpdf(file, Number(rawPageRange[0]));

    saveAs(new Blob([finalPdf], { type: "application/pdf" }), "test.pdf");
  };

  return (
    <section className="ml-16 w-80">
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
      <p className="font-Inter font-normal text-base">Enter page numbers</p>
      <input
        type="text"
        placeholder="eg. 3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="my-4 px-4 py-3 w-full border rounded-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 font-Inter font-normal text-base"
      />
      <PrimaryBtn onClick={handlePdfExtract}>Process</PrimaryBtn>
    </section>
  );
}
