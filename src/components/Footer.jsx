import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Full Throttle Journal</p>
        <nav className="flex gap-4">
          <a href="#read" className="hover:text-neutral-200">Read</a>
          <a href="#highlights" className="hover:text-neutral-200">Highlights</a>
          <a href="#top" className="hover:text-neutral-200">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}
