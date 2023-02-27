import React, { useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Script from "next/script";

interface Props {
  onClickToggleModal: () => void;
}

const MapModal = ({ onClickToggleModal }: Props) => {
  return (
    <>
      <div className="absolute w-2/3 h-2/3 rounded z-50 flex flex-col bg-[rgba(0,0,0,0.7)] p-3">
        <XMarkIcon
          onClick={onClickToggleModal}
          className="cursor-pointer w-10 h-10"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-Mochiy font-normal ">I&apos;m HERE</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.646606149282!2d127.22091131524435!3d37.539826979802925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb2329067e8a9%3A0x5bae4dee2245528f!2z7ZWY64Ko6rKA64uo7IKw!5e0!3m2!1sko!2skr!4v1677466743664!5m2!1sko!2skr"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapModal;
