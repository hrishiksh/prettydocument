import { useState } from "react";
import * as pdfLib from "pdf-lib";
import { outlinePdfFactory } from "@lillallol/outline-pdf";
import filesaver from "file-saver";
import { PDFDocument } from "pdf-lib";

export default function Home() {
  const [pdfFileData, setPdfFileData] = useState();

  /**
   * readFileAsync() wraps the FileReader API into a Promise to use as async/await
   * @param {Blob} file
   */
  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function renderPdf(arrayBuff) {
    // const pdfDoc= await PDFDocument.load(arrayBuff);
    const tempblob = new Blob([new Uint8Array(arrayBuff)], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempblob);
    setPdfFileData(docUrl);
  }

  function range(start, end) {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i - 1);
  }

  async function extractPdfPage(arrayBuff) {
    const pdfSrcDoc = await PDFDocument.load(arrayBuff);
    const pdfNewDoc = await PDFDocument.create();
    const pages = await pdfNewDoc.copyPages(pdfSrcDoc,range(2,5));
    pages.forEach(page=>pdfNewDoc.addPage(page));
    const newpdf= await pdfNewDoc.save();
    filesaver.saveAs(
      new Blob([newpdf], { type: "application/pdf" }),
      `extracted.pdf`
    );
  }

  async function OutlinePdf(arrybuff, fileName) {
    const outlinepdf = outlinePdfFactory(pdfLib);
    const outline = `
        1||Admit card 1
        2|-|Enei page 2
        3|--|Instruction Page 3
        4|-|Social distancing 4
        5||Self declaration 5
        `;
    const pdfDocument = await outlinepdf({ outline: outline, pdf: arrybuff });
    const finalpdf = await pdfDocument.save();
    filesaver.saveAs(
      new Blob([finalpdf], { type: "application/pdf" }),
      `${fileName}.pdf`
    );
  }

  // Execute when user select a file
  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
      // OutlinePdf(pdfArrayBuffer,"test.pdf");
      renderPdf(pdfArrayBuffer);
      extractPdfPage(pdfArrayBuffer);
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
      <iframe
        style={{ display: "block", width: "100vw", height: "90vh" }}
        title="PdfFrame"
        src={pdfFileData}
        frameborder="0"
        type="application/pdf"
      ></iframe>
    </>
  );
}
