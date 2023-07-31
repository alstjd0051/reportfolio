import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Modal from "react-modal";
import { CreateSend, sanityClient } from "../../../sanity";
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
  const [success, setSuccess] = useState();
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
      onClose();
    } catch (error) {
      () => toast.error(`${error}`);
    }
  };
  return (
    <>
      <div className="relative bg-white text-black  px-16 pt-14 pb-5 rounded-lg z-50 mx-auto">
        <div className="absolute right-5 top-5" onClick={() => onClose}>
          <XMarkIcon className="w-10 h-10 cursor-pointer" />
        </div>
        <form
          className="flex  flex-col items-center justify-center w-full h-full gap-y-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center gap-x-5">
            <div>
              <label>Name</label>
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
                    className={`border ml-5 rounded-lg p-3 ${
                      errors.author?.message && "border-red-500 border-2 "
                    } `}
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <label>Email</label>
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
                    className={`border ml-5 rounded-lg p-3 ${
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
