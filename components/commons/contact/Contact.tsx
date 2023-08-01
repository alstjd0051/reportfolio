import React, { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import { BiUpArrow } from "react-icons/bi";
import Link from "next/link";
import { PageInfo } from "../../lib/typings";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../items/RichTextComponents";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MyResume = dynamic(() => import("../items/MyResume"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const SendModal = dynamic(() => import("../modal/SendModal"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openSendModal, setOpenSendModal] = useState(false);
  const [hover, setHover] = useState<boolean>(false);

  const onClickSendModal = () => {
    setOpenSendModal(!openSendModal);
  };

  const onClickResumeModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto  ">
      <h3 className="hidden md:block absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col sm:space-y-0 md:space-y-10 ">
        <div className="sm:text-4xl  h-10  text-center">
          <PortableText
            components={RichTextComponents}
            value={pageInfo.footerComments}
          />
        </div>

        <div className="space-y-10 pt-10">
          <div
            onClick={() => (document.location.href = "tel:01095679971")}
            className="flex items-center space-x-5 justify-center"
          >
            <PhoneIcon className="text-[#F5DF4D] h-7 w-7 animate-pulse " />
            <p className="text-2xl cursor-pointer ">
              {pageInfo.phoneNumber
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                .replace(/\-{1,2}$/g, "")}
            </p>
          </div>
          <div
            className="flex items-center space-x-5 justify-center cursor-pointer "
            onClick={onClickSendModal}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <EnvelopeIcon className="text-[#F5DF4D] h-7 w-7 animate-pulse  " />
            <p
              className={`text-2xl ${
                hover &&
                " text-red-600 text-4xl lg:text-7xl font-bold duration-1000 transition ease-out"
              }`}
            >
              {hover ? "Send Me" : pageInfo.email}
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:flex items-center space-x-5 hidden  justify-center"
          >
            <DocumentIcon className="text-[#F5DF4D]  lg:block h-7 w-7 animate-pulse " />
            <p className="text-2xl cursor-pointer" onClick={onClickResumeModal}>
              SHOW PDF
            </p>
          </motion.div>
        </div>
        {openSendModal && (
          <div className="fixed top-1/4 right-1/4 ">
            <SendModal onClose={onClickSendModal} />
          </div>
        )}

        {modalOpen && (
          <div className="absolute hidden lg:block p-5 rounded-lg top-1/4 right-1/4   ">
            <MyResume onClick={onClickResumeModal} />
          </div>
        )}
      </div>
      <div className="absolute  right-16 md:right-20 bottom-28  ">
        <Link href={"#about"}>
          <BiUpArrow className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
