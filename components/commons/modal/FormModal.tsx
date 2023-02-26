import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  onClickFormModal: () => void;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const FormModal = ({ onClickFormModal }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:wsc7202@gmail.com?subject=${formData.subject}&body=
     ${formData.name}(${formData.email})님 안녕하세요. ${formData.message}이시군요 의견을 보내주셔서 감사합니다. `);

  return (
    <div className="absolute w-5/6 h-3/4 rounded-xl z-50 flex flex-col   bg-[rgba(0,0,0,0.9)] p-3 m-auto space-y-10 ">
      <XMarkIcon
        onClick={onClickFormModal}
        className="cursor-pointer w-10 h-10 mx-3"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mx-auto "
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
          className="bg-[#F5DF4D] py-5 px-10 rounded-md text-[#DE833A] font-bold text-lg "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormModal;
