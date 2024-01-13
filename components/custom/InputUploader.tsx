import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

interface Iprops {
    children:ReactNode
    style?:string
    containerStyle?:string
    register: any;
    name:string,
}

const InputFileUPloader = ({children, style, containerStyle, register, name}:Iprops) => {
  return (
    <div className={twMerge("flex items-center justify-center w-full",containerStyle)}>
      <label
        htmlFor="dropzone-file"
        className={twMerge("flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",style)}
      >
        {children}
        <input id="dropzone-file" type="file"  {...register(name)} className="hidden" />
      </label>
    </div>
  );
};

export default InputFileUPloader;
