import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-6">
      <h1>Developed by Sridhar Maskeri</h1>
      <div className="flex gap-8">
        <a
          href="https://twitter.com/sridhar_maskeri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter size={28} />
        </a>
        <a
          href="https://linkedin.com/in/sridhar_maskeri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/floating-dynamo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
      </div>
    </div>
  );
}
