import React from 'react';
import { sidebareLinkes } from '.';
import Link from 'next/link';
import { IconDeviceTv } from '@tabler/icons-react';

function Sidebar() {
  return (
    <div className="bg-indigo-600 text-white w-[20%] h-screen flex flex-col">
      <div className="flex gap-2 p-5">
        <IconDeviceTv />
        <h1 className="text-xl">TwansWaiana</h1>
      </div>
      <div className="flex flex-col gap-3 mt-9">
        {sidebareLinkes.map((item) => (
          <Link className="flex gap-2 ml-6 text-base" href={item.navLink}>
            <span>{item.icon}</span> {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
