import { IUser } from '@/types';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface HeaderProps {
  user: IUser;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <div className="p-4 flex justify-between bg-white">
      <div className="flex items-center justify-center gap-8">
        <h3 className="text-2xl font-semibold">
          <Link href={'/'}>ticktock</Link>
        </h3>
        <Link href="/timesheets" className="text-sm text-gray-900 font-[500]">
          Timesheets
        </Link>
      </div>
      <div className="text-gray-500 font-[500] flex items-center justify-center gap-2">
        <p>{user.name}</p>
        <ChevronDown className="size-4" />
      </div>
    </div>
  );
};

export default Header;
