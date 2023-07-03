import React, { useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { BiUpArrow } from "react-icons/bi";
import Link from "next/link";
import MapModal from "../modal/MapModal";
import FormModal from "../modal/FormModal";
import { PageInfo } from "../../lib/typings";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../items/RichTextComponents";

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  const [OpenForm, setOpenForm] = useState<boolean>(false);

  const onClickFormModal = () => {
    setOpenForm(!OpenForm);
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto  ">
      {OpenForm && (
        <>
          <div
            className="w-full h-full absolute"
            onClick={onClickFormModal}
          ></div>
          <FormModal onClickFormModal={onClickFormModal} />
        </>
      )}
      <h3 className="hidden lg:absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col sm:space-y-0 md:space-y-10 ">
        <div className=" sm:text-4xl font-semibold text-center">
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
            onClick={onClickFormModal}
            className="flex items-center space-x-5 justify-center"
          >
            <EnvelopeIcon className="text-[#F5DF4D] h-7 w-7 animate-pulse " />
            <p className="text-2xl cursor-pointer">{pageInfo.email}</p>
          </div>
        </div>
      </div>
      <div className="absolute right-16 md:right-20 bottom-28  ">
        <Link href={"#about"}>
          <BiUpArrow className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
