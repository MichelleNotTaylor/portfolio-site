import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
const PortfolioWebsite = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const projects = [
        {
            title: "Dojo Blog",
            description: "This project was part of an effort to master Typescript so I could apply my knowledge to my professional work.",
            githubUrl: "https://github.com/MichelleNotTaylor/net-ninja-react",
            tags: ["React", "TypeScript", "Node.js"]
        },
        {
            title: "Alien Image Generator",
            description: "An art generator that creates pixel images in random colors.",
            githubUrl: "https://github.com/MichelleNotTaylor/shiny-image-generator",
            tags: ["Python"]
        },
        {
            title: "Billing App",
            description: "A basic billing application to create and save bills for a cafe.",
            githubUrl: "https://github.com/MichelleNotTaylor/net-ninja-golang",
            tags: ["Golang"]
        }
    ];
    const Navigation = () => (_jsx("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`, children: _jsxs("div", { className: "max-w-6xl mx-auto px-6 py-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("button", { onClick: () => setCurrentPage('home'), className: "text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform", children: "MT" }), _jsx("div", { className: "hidden md:flex space-x-8", children: ['home', 'projects', 'about', 'contact'].map((page) => (_jsx("button", { onClick: () => setCurrentPage(page), className: `capitalize font-medium transition-all duration-300 hover:text-pink-500 ${currentPage === page ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-700'}`, children: page }, page))) }), _jsx("button", { className: "md:hidden text-gray-700", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isMenuOpen && (_jsx("div", { className: "md:hidden mt-4 pb-4 space-y-4 animate-fadeIn", children: ['home', 'projects', 'about', 'contact'].map((page) => (_jsx("button", { onClick: () => {
                            setCurrentPage(page);
                            setIsMenuOpen(false);
                        }, className: `block w-full text-left capitalize font-medium py-2 transition-colors ${currentPage === page ? 'text-pink-500' : 'text-gray-700'}`, children: page }, page))) }))] }) }));
    const HomePage = () => (_jsx("div", { className: "min-h-screen flex items-center justify-center px-6 animate-fadeIn", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("div", { className: "mb-8 animate-slideDown", children: _jsx("div", { className: "w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-pink-200 hover:scale-105 transition-transform duration-300", children: _jsx("img", { src: 'https://avatars.githubusercontent.com/u/46630676?v=4https://avatars.githubusercontent.com/u/46630676?s=400&u=594ae3d9b2587d9c9d635184a883e718bdbdac37&v=4', alt: "Michelle Taylor", className: "w-full h-full object-cover" }) }) }), _jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-4 animate-slideUp", children: _jsx("span", { className: "bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent", children: "Hi, I'm Michelle" }) }), _jsx("p", { className: "text-xl md:text-2xl text-gray-600 mb-8 animate-slideUp", style: { animationDelay: '0.1s' }, children: "Software Engineer based in Iowa" }), _jsx("p", { className: "text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slideUp", style: { animationDelay: '0.2s' }, children: "Crafting elegant solutions to complex problems. Passionate about clean code, continuous learning, and building things that make a difference." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-slideUp", style: { animationDelay: '0.3s' }, children: [_jsx("button", { onClick: () => setCurrentPage('projects'), className: "px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300", children: "View My Work" }), _jsx("button", { onClick: () => setCurrentPage('contact'), className: "px-8 py-4 bg-white text-pink-500 border-2 border-pink-500 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300", children: "Get In Touch" })] })] }) }));
    const ProjectsPage = () => (_jsx("div", { className: "min-h-screen pt-32 pb-20 px-6 animate-fadeIn", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-center mb-4 animate-slideDown", children: _jsx("span", { className: "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent", children: "My Projects" }) }), _jsx("p", { className: "text-center text-gray-600 mb-16 animate-slideUp", children: "Here are some of my recent works and experiments" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index) => (_jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slideUp border border-pink-100", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx("h3", { className: "text-2xl font-bold mb-4 text-gray-800", children: project.title }), _jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.tags.map((tag, i) => (_jsx("span", { className: "px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium", children: tag }, i))) }), _jsxs("a", { href: project.githubUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-purple-500 transition-colors group", children: ["View on GitHub", _jsx(ExternalLink, { size: 18, className: "group-hover:translate-x-1 transition-transform" })] })] }, index))) })] }) }));
    const AboutPage = () => (_jsx("div", { className: "min-h-screen pt-32 pb-20 px-6 animate-fadeIn", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-center mb-16 animate-slideDown", children: _jsx("span", { className: "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent", children: "About Me" }) }), _jsx("div", { className: "bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-slideUp border border-pink-100", children: _jsxs("div", { className: "prose prose-lg max-w-none", children: [_jsx("p", { className: "text-gray-700 leading-relaxed mb-6 text-lg", children: "Hi there! I'm Michelle, a software engineer living in Iowa. I'm passionate about creating elegant, efficient solutions to complex problems and bringing ideas to life through code." }), _jsx("p", { className: "text-gray-700 leading-relaxed mb-6 text-lg", children: "When I'm not coding, you'll find me spending time with my two wonderful kiddos, who keep life exciting and full of surprises! I love to read\u2014there's nothing quite like getting lost in a good book. I'm also an avid crocheter and knitter, finding joy in creating cozy blankets, scarves, and all sorts of handmade treasures." }), _jsx("p", { className: "text-gray-700 leading-relaxed mb-6 text-lg", children: "I believe in continuous growth and learning. Technology is always evolving, and so am I. Every day brings new opportunities to learn something new, whether it's a programming language, a design pattern, or a life lesson from my kids." }), _jsx("p", { className: "text-gray-700 leading-relaxed text-lg font-medium text-pink-600", children: "Always learning, ever changing. \uD83C\uDF38" })] }) })] }) }));
    const ContactPage = () => (_jsx("div", { className: "min-h-screen pt-32 pb-20 px-6 animate-fadeIn", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-center mb-4 animate-slideDown", children: _jsx("span", { className: "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent", children: "Let's Connect" }) }), _jsx("p", { className: "text-center text-gray-600 mb-16 animate-slideUp", children: "I'd love to hear from you! Reach out through any of these channels." }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-16 text-nowrap", children: [_jsxs("a", { href: "mailto:hiremichelletaylor@gmail.com", className: "bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group animate-slideUp border border-pink-100", children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform", children: _jsx(Mail, { size: 32, className: "text-white" }) }), _jsx("h3", { className: "text-xl font-bold mb-2 text-gray-800", children: "Email" }), _jsx("p", { className: "text-pink-500 break-all", children: "hiremichelletaylor@gmail.com" })] }), _jsxs("a", { href: "https://www.linkedin.com/in/michelle-m-taylor/", target: "_blank", rel: "noopener noreferrer", className: "bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group animate-slideUp border border-pink-100", style: { animationDelay: '0.1s' }, children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform", children: _jsx(Linkedin, { size: 32, className: "text-white" }) }), _jsx("h3", { className: "text-xl font-bold mb-2 text-gray-800", children: "LinkedIn" }), _jsx("p", { className: "text-pink-500", children: "michelle-m-taylor" })] }), _jsxs("a", { href: "https://github.com/MichelleNotTaylor", target: "_blank", rel: "noopener noreferrer", className: "bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group animate-slideUp border border-pink-100", style: { animationDelay: '0.2s' }, children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform", children: _jsx(Github, { size: 32, className: "text-white" }) }), _jsx("h3", { className: "text-xl font-bold mb-2 text-gray-800", children: "GitHub" }), _jsx("p", { className: "text-pink-500", children: "MichelleNotTaylor" })] })] }), _jsxs("div", { className: "bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-slideUp border border-pink-100", style: { animationDelay: '0.3s' }, children: [_jsx("h3", { className: "text-2xl font-bold mb-8 text-gray-800 text-center", children: "Send Me a Message" }), _jsxs("form", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 font-medium mb-2", children: "Name" }), _jsx("input", { type: "text", className: "w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors", placeholder: "Your name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 font-medium mb-2", children: "Email" }), _jsx("input", { type: "email", className: "w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors", placeholder: "your.email@example.com" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 font-medium mb-2", children: "Message" }), _jsx("textarea", { rows: 6, className: "w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors resize-none", placeholder: "Tell me about your project or just say hi!" })] }), _jsx("button", { type: "submit", className: "w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300", children: "Send Message" })] })] })] }) }));
    const renderPage = () => {
        switch (currentPage) {
            case 'home': return _jsx(HomePage, {});
            case 'projects': return _jsx(ProjectsPage, {});
            case 'about': return _jsx(AboutPage, {});
            case 'contact': return _jsx(ContactPage, {});
            default: return _jsx(HomePage, {});
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50", children: [_jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
          animation-fill-mode: both;
        }
      ` }), _jsx(Navigation, {}), renderPage()] }));
};
export default PortfolioWebsite;
