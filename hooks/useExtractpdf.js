import { PDFDocument } from "pdf-lib";

const useExtractpdf = () => {
  function range(start, end) {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i - 1);
  }

  async function extractPdfPage(arrayBuff, start, end) {
    const pdfSrcDoc = await PDFDocument.load(arrayBuff);
    const pdfNewDoc = await PDFDocument.create();
    if (end) {
      const pages = await pdfNewDoc.copyPages(pdfSrcDoc, range(start, end));
      pages.forEach((page) => pdfNewDoc.addPage(page));
      const newpdf = await pdfNewDoc.save();
      return newpdf;
    } else {
      const pages = await pdfNewDoc.copyPages(pdfSrcDoc, [start - 1]);
      pages.forEach((page) => pdfNewDoc.addPage(page));
      const newpdf = await pdfNewDoc.save();
      return newpdf;
    }
  }

  return extractPdfPage;
};

export default useExtractpdf;
