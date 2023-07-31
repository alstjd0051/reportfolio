import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CreateSend } from "../../../sanity";
import { PostContact } from "../../lib/typings";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  onClose: () => void;
};

const SendModal = ({ onClose }: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostContact>({ mode: "onChange" });
  const [isSaving, setIsSaving] = useState(false);
  const errorNotify = () =>
    toast.error(
      errors.author?.message ||
        errors.comments?.message ||
        errors.email?.message ||
        ""
    );

  const onSubmit = async (data: PostContact) => {
    try {
      const { author } = data;
      setIsSaving(true);
      CreateSend(data);
      setIsSaving(false);
      reset();
      toast.success(`${author}님 메시지가 성공적으로 보내졌습니다.`, {
        position: "bottom-left",
      });
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      () => toast.error(`${error}`);
    }
  };
  return (
    <>
      <div className="relative px-2 py-3 w-full bg-white text-black md:px-8 md:py-7 lg:px-16 lg:pt-14 pb-5 rounded-lg z-50 mx-auto">
        <div className="absolute right-5 top-5" onClick={onClose}>
          <XMarkIcon className=" w-5 h-5  lg:w-10 lg:h-10 cursor-pointer" />
        </div>
        <form
          className="flex flex-col items-center justify-center w-full h-full gap-y-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center gap-x-5">
            <div className="flex flex-col">
              <p className="text-start">Name</p>
              <Controller
                name="author"
                rules={{
                  required: "이름을 입력해주세요",
                  minLength: {
                    value: 2,
                    message: "최소 2글자 이상 적어주세요",
                  },
                }}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    className={`border  rounded-lg w-32 md:w-full h-4 md:h-full px-3  py-3 md:px-6 ${
                      errors.author?.message && "border-red-500 border-2 "
                    } `}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-start">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "이메일을 입력해주세요",
                  minLength: {
                    value: 2,
                    message: "최소 2글자 이상 적어주세요",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    message: "이메일 형식이 아닙니다.",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="email"
                    className={`border  rounded-lg w-32 md:w-full h-4 md:h-full px-3  py-3 md:px-6 ${
                      errors.email?.message && "border-red-500 border-2"
                    }`}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex w-full justify-center  ">
            <label className="pr-2">Comment</label>
            <Controller
              name="comments"
              rules={{
                required: "내용을 입력해주세요",
                minLength: {
                  value: 2,
                  message: "최소 2글자 이상 적어주세요",
                },
              }}
              control={control}
              render={({ field }) => (
                <input
                  className={`flex-1 h-32 border pl-3 rounded-lg ${
                    errors.comments?.message && "border-red-500 border-2"
                  }`}
                  {...field}
                />
              )}
            />
          </div>
          <button
            className={`${
              isSaving ? "bg-blue-600 " : "bg-red-600"
            } px-10  rounded-lg py-3 text-white `}
            type="submit"
            disabled={isSaving}
            onClick={errors && errorNotify}
          >
            {isSaving ? "Saving..." : "Submit"}
          </button>
        </form>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default SendModal;
