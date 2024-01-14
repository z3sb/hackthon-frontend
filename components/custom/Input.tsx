import {  ReactNode } from 'react';

interface Iprops {
  label?: ReactNode;
  placeholder: string;
  register: any;
  name?: string;
}

const Input = ({ placeholder, label, register, name }: Iprops) => {
  return (
    <div className="relative max-w-xs">
      <label>{label}</label>
      <input
        type="text"
        {...register(name ? name : 'textInput')}
        placeholder={placeholder}
        className="block p-2  w-full text-sm text-gray-900 border  border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:hover:bg-bray-800 hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600"      />
    </div>
  );
};

export default Input;
