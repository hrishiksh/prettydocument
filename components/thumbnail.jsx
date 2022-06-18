import { useRef, useState, useEffect } from "react";
import useFileStore from "../state/useFilestore";
import useReadFile from "../hooks/useReadFile";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../utils/pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function Thumbnail() {
  const [filename, setFileName] = useState("");

  const inputFileRef = useRef();

  const readFile = useReadFile();

  const addnewFile = useFileStore((state) => state.addNewFile);
  const file = useFileStore((state) => state.file);

  const handleFileclick = () => {
    inputFileRef.current.click();
  };

  const handleFiles = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      setFileName(fileList[0].name);
      const fileArrayBuffer = await readFile(fileList[0]);
      addnewFile(fileArrayBuffer);
    }
  };

  return (
    <section>
      <div className="relative w-[500px] h-[690px]">
        <input
          type="file"
          accept=".pdf"
          ref={inputFileRef}
          onChange={handleFiles}
          hidden
        />
        <div className="document-container">
          <Document file={file}>
            <Page pageNumber={1} />
          </Document>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full  border border-slate-300 rounded-md cursor-pointer"
          onClick={handleFileclick}
        >
          <div
            className={`${
              file ? "hidden" : "flex"
            } flex-col justify-center items-center w-full h-full`}
          >
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
            <p className="font-Inter pt-4 text-gray-500">
              Click here or drop a pdf file
            </p>
          </div>
        </div>
      </div>

      <p className="font-Inter font-normal text-base text-center py-4 max-w-[500px]">
        {filename}
      </p>
    </section>
  );
}
