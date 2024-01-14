import ImageInupt from "@/components/custom/ImageInupt";
import Input from "@/components/custom/Input";
import InputFileUPloader from "@/components/custom/InputUploader";
import { axiosClient } from "@/services/axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data: any) => {
    try {
      const formData = {
        videoFile: data?.video[0],
        title: data?.textInput,
        description: data?.textareaField,
        cover:data?.cover[0]
      };

      const response = await axiosClient.post(
        "/api/v1/video-upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      console.log(data);
    } catch (error) {
      toast.error("An Error Happen");
    }
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="bg-white shadow min-w-xl w-fit h-fit items-center justify-center p-5 flex flex-col rounded">
        <h2 className="text-2xl text-center">upload video</h2>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2 w-full">
          <InputFileUPloader name="video" register={register}>
            <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          </InputFileUPloader>
          <Input
            placeholder="Enter video title"
            register={register}
            label="Title"
          />
          <ImageInupt register={register} label="Upload Cover" />
          <label className="flex flex-col">
            Descriptions
            <textarea
              {...register("textareaField")}
              className="block p-2  w-full text-sm text-gray-900 border  border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:hover:bg-bray-800 hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600" placeholder="Descriptions" />
          </label>
          <button
            type="submit"
            className="w-full px-6 py-3.5 text-gray-700 border rounded-lg duration-100 hover:border-indigo-600 active:shadow-lg "
          >
            Button
          </button>
        </form>
      </div>
    </div>
  );
}
export default index;
