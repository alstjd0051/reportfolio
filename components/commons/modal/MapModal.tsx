import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold">여기에 뭘 넣어야할지 생각중...</h1>
          <div className="pt-10">
            <p>GoogleAPI</p>
            <p>KAKAO?...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapModal;
