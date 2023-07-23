import React from "react";
import useSWR from "swr";
import { Contact } from "../../lib/typings";
import PDFViewer from "./pdfViewer";
import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
};

const MyResume = ({ onClick }: Props) => {
  const { data } = useSWR<Contact>("/api/contact");

  return (
    <div className="relative overflow-hidden">
      <PDFViewer onClick={onClick} fileUrl={`${data?.fileUrl}`} />
    </div>
  );
};

export default MyResume;
