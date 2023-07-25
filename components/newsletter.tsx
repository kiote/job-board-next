"use client";
import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = { email };

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const content = await response.json();

    console.log(content);

    setEmail('');
  }

  return (
    <div className="relative text-center px-4 py-6 group">
      <div
        className="absolute inset-0 rounded-xl bg-gray-50 border border-gray-200 -rotate-1 group-hover:rotate-0 transition duration-150 ease-in-out -z-10"
        aria-hidden="true"
      />
      <div className="font-nycd text-xl text-indigo-500 mb-1">Sign up now and let our referral system work for you!</div>
      <div className="text-2xl font-bold mb-5">We will notify you when we are open</div>
      <form className="inline-flex max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-input py-1.5 w-full mb-2 sm:mb-0 sm:mr-2" placeholder="Your email" aria-label="Your email" />
          <button className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm whitespace-nowrap" type="submit">
            Notify me
          </button>
        </div>
        {/* Success message */}
        <p className="font-medium text-emerald-600 text-center sm:text-left sm:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p>
      </form>
    </div>
  )
}
