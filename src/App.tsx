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

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            MT
          </button>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'projects', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize font-medium transition-all duration-300 hover:text-pink-500 ${
                  currentPage === page ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            {['home', 'projects', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left capitalize font-medium py-2 transition-colors ${
                  currentPage === page ? 'text-pink-500' : 'text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center px-6 animate-fadeIn">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-slideDown">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-pink-200 hover:scale-105 transition-transform duration-300">
            <img
              src='https://avatars.githubusercontent.com/u/46630676?v=4https://avatars.githubusercontent.com/u/46630676?s=400&u=594ae3d9b2587d9c9d635184a883e718bdbdac37&v=4'
              alt="Michelle Taylor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slideUp">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm Michelle
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slideUp" style={{animationDelay: '0.1s'}}>
          Software Engineer based in Iowa
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slideUp" style={{animationDelay: '0.2s'}}>
          Crafting elegant solutions to complex problems. Passionate about clean code, 
          continuous learning, and building things that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{animationDelay: '0.3s'}}>
          <button
            onClick={() => setCurrentPage('projects')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 bg-white text-pink-500 border-2 border-pink-500 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-slideDown">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-16 animate-slideUp">
          Here are some of my recent works and experiments
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slideUp border border-pink-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-purple-500 transition-colors group"
              >
                View on GitHub
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slideDown">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-slideUp border border-pink-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Hi there! I'm Michelle, a software engineer living in Iowa. I'm passionate about 
              creating elegant, efficient solutions to complex problems and bringing ideas to life 
              through code.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              When I'm not coding, you'll find me spending time with my two wonderful kiddos, who 
              keep life exciting and full of surprises! I love to read—there's nothing quite like 
              getting lost in a good book. I'm also an avid crocheter and knitter, finding joy in 
              creating cozy blankets, scarves, and all sorts of handmade treasures.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              I believe in continuous growth and learning. Technology is always evolving, and so am I. 
              Every day brings new opportunities to learn something new, whether it's a programming 
              language, a design pattern, or a life lesson from my kids.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg font-medium text-pink-600">
              Always learning, ever changing. 🌸
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-slideDown">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-16 animate-slideUp">
          I'd love to hear from you! Reach out through any of these channels.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-nowrap">
          <a
            href="mailto:hiremichelletaylor@gmail.com"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group animate-slideUp border border-pink-100"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
            <p className="text-pink-500 break-all">hiremichelletaylor@gmail.com</p>
          </a>
          
          <a
            href="https://www.linkedin.com/in/michelle-m-taylor/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group animate-slideUp border border-pink-100"
            style={{animationDelay: '0.1s'}}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">LinkedIn</h3>
            <p className="text-pink-500">michelle-m-taylor</p>
          </a>
          
          <a
            href="https://github.com/MichelleNotTaylor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group animate-slideUp border border-pink-100"
            style={{animationDelay: '0.2s'}}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">GitHub</h3>
            <p className="text-pink-500">MichelleNotTaylor</p>
          </a>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-slideUp border border-pink-100" style={{animationDelay: '0.3s'}}>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Send Me a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
                placeholder="hiremichelletaylor@gmail.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project or just say hi!"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'projects': return <ProjectsPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <style>{`
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
      `}</style>
      
      <Navigation />
      {renderPage()}
    </div>
  );
};

export default PortfolioWebsite;