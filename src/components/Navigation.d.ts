import type { Page } from '../types';
type NavigationProps = {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
};
export default function Navigation({ currentPage, setCurrentPage }: NavigationProps): import("react/jsx-runtime").JSX.Element;
export {};
