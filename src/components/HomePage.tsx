import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import type { Page } from '../types';

type HomePageProps = {
  setCurrentPage: (page: Page) => void;
};

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0d0914]" aria-hidden="true" />
      <div className="absolute inset-0 hero-dot-grid" aria-hidden="true" />
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />

      <div className="relative max-w-2xl mx-auto text-center space-y-8 py-32">

        {/* Availability badge */}
        <div className="flex justify-center animate-fadeIn">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/80 text-xs font-medium text-slate-600 dark:text-slate-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" aria-hidden="true" />
            Open to new opportunities
          </span>
        </div>

        {/* Avatar */}
        <div className="flex justify-center animate-slideDown" aria-hidden="true">
          <div className="relative inline-block">
            <img
              src="https://avatars.githubusercontent.com/u/46630676?s=400&u=594ae3d9b2587d9c9d635184a883e718bdbdac37&v=4"
              alt=""
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-white dark:ring-slate-900 shadow-xl shadow-slate-300/50 dark:shadow-slate-950/50"
            />
            <div className="absolute -inset-1.5 rounded-full border-2 border-pink-200/60 dark:border-pink-800/40" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3 animate-slideUp" style={{ animationDelay: '0.05s' }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
            Michelle Taylor
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 font-normal">
            Software Engineer
            <span className="mx-2.5 text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
            Iowa
          </p>
        </div>

        {/* Bio */}
        <p
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto animate-slideUp"
          style={{ animationDelay: '0.1s' }}
        >
          Building elegant, reliable software. Passionate about clean architecture,
          continuous learning, and shipping things that matter.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center animate-slideUp"
          style={{ animationDelay: '0.15s' }}
        >
          <button
            onClick={() => setCurrentPage('projects')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-600 dark:hover:bg-pink-500 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-pink-500/20 transition-all duration-200"
          >
            View My Work
            <ArrowRight size={15} aria-hidden="true" />
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/60 shadow-sm transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-6 pt-2 animate-slideUp"
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href="https://github.com/MichelleNotTaylor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-150"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <span className="w-px h-4 bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
          <a
            href="https://www.linkedin.com/in/michelle-m-taylor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-150"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
          <span className="w-px h-4 bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
          <a
            href="mailto:hiremichelletaylor@gmail.com"
            aria-label="Send email"
            className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-150"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
