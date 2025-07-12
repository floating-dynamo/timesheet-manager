import { Loader2Icon } from 'lucide-react';
import React from 'react';

interface LoaderProps {
  text?: string;
}

const Loader = ({ text }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <p>{text}</p>
      <Loader2Icon className="size-5 animate-spin" />
    </div>
  );
};

export default Loader;
