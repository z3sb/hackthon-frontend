import React, { ReactNode } from 'react';

interface Iprops {
  label?: ReactNode;
  placeholder?: string;
  register: any;
}

function ImageInupt({ placeholder, label, register }: Iprops) {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        {label}
      </label>
      <input
        className="block p-2  w-full text-sm text-gray-900 border  border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:hover:bg-bray-800 hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        {...register('file')}
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        {placeholder ? placeholder : <span className='text-gray-900'>SVG, PNG, JPG or GIF (MAX. 800x400px)</span>}
      </p>
    </div>
  );
}

export default ImageInupt;
