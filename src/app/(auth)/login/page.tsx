'use client';

import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) router.push('/timesheets');
    else {
      toast.error('Invalid credentials');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className="min-h-screen flex items-stretch bg-gray-100 font-[family-name:var(--font-inter)]">
      {/* Left Side */}
      <div className="flex-1 flex flex-col bg-white text-gray-900">
        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="max-w-sm w-full mx-auto flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-8">Welcome back</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="current-password"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition cursor-pointer"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 pt-12 pb-4">
          © 2024 tentwenty
        </div>
      </div>
      {/* Right Side */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-blue-600 text-white px-12">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">ticktock</h1>
          <p className="text-base leading-relaxed">
            Introducing ticktock, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours. With
            ticktock, you can effortlessly track and monitor employee attendance
            and productivity from anywhere, anytime, using any
            internet-connected device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
