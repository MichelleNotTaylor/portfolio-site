import { useState, useEffect, useId } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import type { Page } from '../types';

const PAGES: Page[] = ['home', 'projects', 'about', 'contact'];

type NavigationProps = {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isDark: boolean;
  toggleDark: () => void;
};

export default function Navigation({ currentPage, setCurrentPage, isDark, toggleDark }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const scrolledCls = isScrolled
    ? 'bg-white/90 dark:bg-[#0A0F1C]/90 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70 shadow-sm'
    : '';

  const navItemCls = (page: Page) =>
    page === currentPage
      ? 'px-3 py-2 rounded-md text-sm font-medium capitalize bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400'
      : 'px-3 py-2 rounded-md text-sm font-medium capitalize text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors duration-150';

  const iconBtnCls =
    'p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors duration-150';

  return (
    <header role="banner" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledCls}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            aria-label="Go to home page"
            className="font-mono text-sm font-bold text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 px-2.5 py-1.5 rounded-md transition-colors duration-150"
          >
            MT
          </button>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-0.5" role="list">
              {PAGES.map((page) => (
                <li key={page} role="listitem">
                  <button
                    onClick={() => navigate(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                    className={navItemCls(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDark}
              className={iconBtnCls}
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>

            <button
              className={`md:hidden ${iconBtnCls}`}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              onClick={() => setIsMenuOpen((o) => !o)}
            >
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id={menuId} hidden={!isMenuOpen}>
          <nav aria-label="Mobile navigation">
            <ul
              className="md:hidden py-3 border-t border-slate-200 dark:border-slate-800 space-y-0.5"
              role="list"
            >
              {PAGES.map((page) => (
                <li key={page} role="listitem">
                  <button
                    onClick={() => navigate(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                    className={`block w-full text-left ${navItemCls(page)}`}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
