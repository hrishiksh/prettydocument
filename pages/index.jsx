import { useState } from "react";
import * as pdfLib from "pdf-lib";
import { outlinePdfFactory } from "@lillallol/outline-pdf";
import filesaver from "file-saver";

export default function Home() {
  const [pdfFileData, setPdfFileData] = useState();

  const onFileSelected = (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      console.log(fileList);
      const reader = new FileReader();
      reader.readAsArrayBuffer(fileList[0]);
      reader.addEventListener("load", async (event) => {
        const result = event.target.result;
        // Making the outline
        const outlinepdf = outlinePdfFactory(pdfLib);
        const outline = `
        1||Admit card 1
        2|-|Enei page 2
        3|--|Instruction Page 3
        4|-|Social distancing 4
        5||Self declaration 5
        `;
        console.log(result);
        const pdfDocument = await outlinepdf({ outline: outline, pdf: result });
        const finalpdf = await pdfDocument.save();
        filesaver.saveAs(
          new Blob([finalpdf], { type: "application/pdf" }),
          "modified.pdf"
        );
      });
    }
  };

  return (
    <>
      <h1>Hello world</h1>
      <input
        type="file"
        id="file-selector"
        accept=".pdf"
        onChange={onFileSelected}
      />
    </>
  );
}
