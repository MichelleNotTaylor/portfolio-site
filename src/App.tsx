import { useState } from 'react';
import type { Page } from './types';
import { useDarkMode } from './hooks/useDarkMode';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDark, toggleDark] = useDarkMode();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-300">
      {/* Skip navigation for keyboard/screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium focus:text-sm focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDark={isDark}
        toggleDark={toggleDark}
      />

      <main id="main-content">
        {renderPage()}
      </main>
    </div>
  );
}
