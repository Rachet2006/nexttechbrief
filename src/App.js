// Landing page in React + Tailwind CSS
// Use `vercel` or `netlify` to deploy, and add subscribe API separately

import { useState } from 'react';

export default function NewsletterLandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <img src="/logo.png" alt="NTB Logo" className="w-32 mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        The <span className="text-[#F59E0B]">NextTech Brief</span>
      </h1>
      <p className="text-center text-lg text-gray-300 mt-4 max-w-xl">
        Keeping you up-to-date with technology, <span className="text-[#F59E0B]">concisely.</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-md bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-xl"
      >
        <label className="block text-sm mb-1">Name</label>
        <input
          className="w-full p-2 rounded bg-[#1E1E1E] text-white border border-gray-700 mb-4"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full p-2 rounded bg-[#1E1E1E] text-white border border-gray-700 mb-6"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#14B8A6] text-white rounded hover:bg-[#0ea5e9] transition"
        >
          Subscribe
        </button>
        {submitted && (
          <p className="text-green-400 mt-4 text-sm">Thank you for subscribing!</p>
        )}
      </form>

      <div className="flex gap-4 mt-8">
        <a href="https://linkedin.com/in/rishitjain70" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" className="w-8 h-8" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com/rishitjain70" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" className="w-8 h-8" alt="Instagram" />
        </a>
      </div>

      <footer className="text-xs text-gray-500 mt-12">© 2025 The NextTech Brief</footer>
    </div>
  );
}
