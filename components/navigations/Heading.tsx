import React from 'react';
import { sidebareLinkes } from '.';
import Link from 'next/link';
import { IconDeviceTv } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { axiosClient } from '@/services/axios';
function Heading() {
  const router = useRouter();

  async function logOut() {
    const response = await axiosClient.post('/api/v1/user/logout');
    if (response.status === 200) {
      router.push('/login');
    }
  }

  return (
    <div className="bg-indigo-600 text-white flex justify-between items-center px-2">
      <div className="flex gap-2 p-5">
        <IconDeviceTv />
        <h1 className="text-xl">TwansWaiana</h1>
      </div>
      <div className="flex items-center gap-3">
        {sidebareLinkes.map((item) => (
          <Link
            className="flex gap-2 ml-6 text-base"
            href={item.navLink}
            key={item.title}
          >
            <span>{item.icon}</span> {item.title}
          </Link>
        ))}
      </div>

      <span
        onClick={() => logOut()}
        className=" bg-blue-50 text-gray-600 p-2 rounded cursor-pointer"
      >
        Log out
      </span>
    </div>
  );
}

export default Heading;
