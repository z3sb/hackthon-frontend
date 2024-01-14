import Image from 'next/image';
import React from 'react';
import { IconBrandTelegram } from '@tabler/icons-react';

type Props = {};

function ChatBubble({}: Props) {
  return (
    <div className="flex flex-end flex-col gap-4 dark:bg-gray-400 w-1/4 p-5 relative">
      <div className="flex  items-start gap-2.5">
        <Image
          className="w-8 h-8 rounded-full"
          src="/assets/background_form.jpg"
          alt="Jese image"
          width={100}
          height={100}
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            That's awesome. I think our users will really appreciate the
            improvements.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <Image
          className="w-8 h-8 rounded-full"
          src="/assets/background_form.jpg"
          alt="Jese image"
          width={100}
          height={100}
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            That's awesome. I think our users will really appreciate the
            improvements.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <Image
          className="w-8 h-8 rounded-full"
          src="/assets/background_form.jpg"
          alt="Jese image"
          width={100}
          height={100}
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            That's awesome. I think our users will really appreciate the
            improvements.
          </p>
        </div>
      </div>

      
        <div className="absolute w-xxl left-5 bottom-2">
          <input
            type="search"
            id="default-search"
            className="block outline-none w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Start Chat Now"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          >
            <IconBrandTelegram/>
          </button>
        </div>
  
    </div>
  );
}

export default ChatBubble;
