import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-primary sticky top-0 z-50 animate-navbar-slide shadow-2xl">
        <div className="group text-2xl font-bold tracking-widest transition-all duration-300 transform cursor-pointer">
          <a href="#top" className="outline-none focus:ring-2 focus:ring-accent">
            <span className="text-secondary transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500">
              Priyansh
            </span>
          </a>
        </div>
        {/* Hamburger button for small screens */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Nav links */}
        <ul
          className={`hidden md:flex gap-8 text-lg`}
        >
          {navLinks.map(({ label, href }) => (
            <li key={label} className="relative cursor-pointer">
              <a
                href={href}
                className="transition-all duration-300 hover:text-accent inline-block nav-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu: block in flow, centered, pushes content down */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full h-full overflow-hidden transition-all duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'} flex flex-col items-start bg-primary/50 backdrop-blur-md shadow-2xl`}
        style={{ zIndex: 40 }}
      >
        <ul className="flex flex-col gap-6 text-lg items-start w-full p-6">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="relative cursor-pointer">
              <a
                href={href}
                className="transition-all duration-300 hover:text-accent inline-block nav-underline"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;