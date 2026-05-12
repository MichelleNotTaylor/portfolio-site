import type { Page } from '../types';
type NavigationProps = {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    isDark: boolean;
    toggleDark: () => void;
};
export default function Navigation({ currentPage, setCurrentPage, isDark, toggleDark }: NavigationProps): import("react/jsx-runtime").JSX.Element;
export {};
