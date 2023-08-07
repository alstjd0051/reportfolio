import React from "react";
import useSWR from "swr";
import { Contact } from "../../lib/typings";
import PDFViewer from "./pdfViewer";
import { motion } from "framer-motion";
import { MoonLoader } from "react-spinners";

type Props = {
  onClick: () => void;
};

const MyResume = ({ onClick }: Props) => {
  const { data, isLoading } = useSWR<Contact>("/api/contact");

  if (isLoading) {
    <MoonLoader color="red" />;
  }

  return (
    <div className="relative overflow-hidden rounded-lg ">
      <PDFViewer onClick={onClick} fileUrl={`${data?.fileUrl}`} />
    </div>
  );
};

export default MyResume;
