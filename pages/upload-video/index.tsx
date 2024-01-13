import Input from '@/components/custom/Input';
import InputFileUPloader from '@/components/custom/InputUploader';
import { IconUpload } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data:any) =>{ 
     console.log(data)
  }
  return (
    <div className="flex  w-full h-screen ">
      <div className="bg-white shadow w-full h-full p-5 flex flex-col rounded">
        <h2 className="text-2xl text-center">upload video</h2>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2">
          <InputFileUPloader name='video' register={register}>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
          {/* <div>
            <h4>Cover</h4>
            <InputFileUPloader name='image' register={register} style="w-40 h-20" containerStyle="justify-start m-5 ml-5">
              <Image
                className="h-auto max-w-lg rounded-lg"
                src="/assets/image-1@2x.jpg"
                width={200}
                height={200}
                alt="image description"
              />
            </InputFileUPloader>
          </div> */}
          <Input placeholder="Enter video title"  register={register}  label="title" />
          <label className="flex flex-col">
            Descriptions
            <textarea  {...register('textareaField')} className="border hover:border-indigo-600 mt-4 rounded shadow text-gray-400 p-2"/>
      
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
