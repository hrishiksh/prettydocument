import Link from "next/link";
import { useState } from "react";
import PrimaryBtn from "../components/primaryBtn";
import useFileStore from "../state/useFilestore";
import useOutlinepdf from "../hooks/useOutlinepdf";
import { saveAs } from "file-saver";

export default function OutlinePage() {
  const file = useFileStore((state) => state.file);
  const [text, setText] = useState("");
  const outlinePdf = useOutlinepdf();

  const handlePdfOutline = async () => {
    console.log(text);
    const resultingPdf = await outlinePdf(file, text);
    saveAs(new Blob([resultingPdf], { type: "application/pdf" }), "test.pdf");
  };

  return (
    <section className="ml-16">
      <Link href="/">
        <div className="mb-8 flex justify-start items-center cursor-pointer">
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
          <h1 className="font-Inter font-medium text-xl pl-2">Add outline</h1>
        </div>
      </Link>
      <p className="font-Inter font-normal text-lg">Add your outline here</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Format: \nPage no.||outline-name \nExamples:\n1||base outline\n2|-|sub outline\n3|--|sub-sub outline\n4|-|sub outline\n5||base outline`}
        className="my-4 resize-none w-96 h-80 font-Inter font-normal text-base rounded border border-slate-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
      ></textarea>
      <PrimaryBtn onClick={handlePdfOutline}>Process</PrimaryBtn>
    </section>
  );
}
