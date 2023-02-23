import React, { useState, useCallback } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Project } from "../../lib/typings";
import { BiUpArrow } from "react-icons/bi";
import Link from "next/link";
import MapModal from "../modal/MapModal";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:wsc7202@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);
  const [isOpen, setisOpen] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setisOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto  ">
      {isOpen && <MapModal onClickToggleModal={onClickToggleModal} />}
      <h3 className="hidden lg:absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col sm:space-y-0 md:space-y-10 gap-10">
        <h4 className=" sm:text-4xl font-semibold text-center">
          I want your coffee chat &nbsp;
          <span className="decoration-[#F5DF4D]/50 underline">
            Let&apos;s Talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F5DF4D] h-7 w-7 animate-pulse " />
            <p
              className="text-2xl cursor-pointer "
              onClick={() => (document.location.href = "tel:01095679971")}
            >
              010-9567-9971
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F5DF4D] h-7 w-7 animate-pulse " />
            <p className="text-2xl">wsc7202@gmail.com</p>
          </div>
          <div
            onClick={onClickToggleModal}
            className="flex items-center space-x-5 justify-center cursor-pointer"
          >
            <MapPinIcon className="text-[#F5DF4D] h-7 w-7 animate-pulse " />
            <p className="text-2xl">South Korea, Hanam</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:flex flex-col space-y-2 hidden  w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F5DF4D] py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
      <div className="absolute right-16 md:right-20 bottom-20  ">
        <Link href={"#about"}>
          <BiUpArrow className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
