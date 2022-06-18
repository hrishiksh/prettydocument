import * as pdfLib from "pdf-lib";
import { outlinePdfFactory } from "@lillallol/outline-pdf";

const useOutlinepdf = () => {
  async function OutlinePdf(arrybuff, outlineText) {
    const outlinepdf = outlinePdfFactory(pdfLib);
    const outline = outline;
    const pdfDocument = await outlinepdf({
      outline: outlineText,
      pdf: arrybuff,
    });
    const finalpdf = await pdfDocument.save();
    return finalpdf;
  }

  return OutlinePdf;
};

export default useOutlinepdf;
