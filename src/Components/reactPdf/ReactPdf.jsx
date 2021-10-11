import "./reactpdf.scss";
import { Document, Page } from "react-pdf";
import { useState, useEffect } from "react";

export default function ReactPdf() {
  const [height, setheight] = useState(700);

  useEffect(() => {
    setheight(window.innerHeight - 100);
  }, []);
  console.log(height);
  return (
    <div>
      <Document
        file="assets/Pushkar kumar (2).pdf"
        options={{ workerSrc: "pdf.worker.js" }}
      >
        <Page
          pageNumber={1}
          height={height}
          renderAnnotationLayer={false}
          scale={1}
        />
      </Document>
    </div>
  );
}
