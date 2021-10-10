import "./reactpdf.scss";
import { Document, Page } from "react-pdf";

export default function ReactPdf() {
  return (
    <div>
      <Document
        file="assets/Pushkar kumar (2).pdf"
        options={{ workerSrc: "pdf.worker.js" }}
      >
        <Page
          pageNumber={1}
          height={650}
          renderAnnotationLayer={false}
          scale={1}
        />
      </Document>
    </div>
  );
}
