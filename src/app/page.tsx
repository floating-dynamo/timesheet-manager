import { Twitter, Linkedin, Github, MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-8 font-[family-name:var(--font-inter)]">
      <h1 className="text-3xl font-bold">Developed by Sridhar Maskeri</h1>
      <div className="flex gap-8">
        <a
          href="https://x.com/sridharmaskeri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={28} />
        </a>
        <a
          href="https://linkedin.com/in/sridhar_maskeri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/floating-dynamo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={28} />
        </a>
      </div>
      <div>
        <Link href={'/timesheets'} className='flex items-center justify-center gap-4 hover:underline'>
          Go to TimeSheet Listing <MoveRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
}
