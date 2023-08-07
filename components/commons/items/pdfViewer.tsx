import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import useWindowSize from "../../lib/hooks/useWindowSize";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

// required

type Props = {
  fileUrl: string;
  onClick: () => void;
};

const PDFViewer = ({ fileUrl, onClick }: Props) => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);
  const windowSize = useWindowSize();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div
      className={`relative overflow-auto max-w-7xl h-96`}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Document
        className={"overflow-hidden relative"}
        file={`${fileUrl.toString()}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          height={900}
          renderAnnotationLayer={false}
          pageNumber={pageNumber}
          renderTextLayer={false}
        />
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <button className="cursor-pointer" onClick={onClick}>
            <XMarkIcon className="w-7 h-7 text-black" />
          </button>
          <Link download href={fileUrl.toString()}>
            <ArrowDownTrayIcon className="w-7 h-7 text-black cursor-pointer" />
          </Link>
        </div>

        <div className="absolute top-2 right-3 gap-3 flex items-center">
          <p className=" text-black text-sm ">
            Page {pageNumber} of {numPages}
          </p>
          {pageNumber > 1 && (
            <button
              className="text-black "
              onClick={() => setPageNumber((prev) => prev + -1)}
            >
              이전 페이지
            </button>
          )}
          {pageNumber < numPages && (
            <button
              className="text-black right-0"
              onClick={() => setPageNumber((prev) => prev + +1)}
            >
              다음페이지
            </button>
          )}
        </div>
      </Document>
    </div>
  );
};

export default PDFViewer;
