import React, { useCallback, useEffect } from "react";
import Modal from "./MainModal";
import useOpenModal from "../../lib/store";

const Body = () => {
  return (
    <div className="">
      <h1 className="text-black">body</h1>
      <div></div>
    </div>
  );
};

const NaverModal = () => {
  const openModal = useOpenModal();

  return (
    <>
      <Modal
        isOpen={openModal.isOpen}
        title="NaverModal"
        onClose={openModal.onClose}
        body={<Body />}
      />
    </>
  );
};

export default NaverModal;
