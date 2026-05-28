import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#courses', label: 'Курсы' },
  { href: '#about', label: 'О нас' },
  { href: '#teachers', label: 'Преподаватели' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'courses', 'about', 'teachers', 'reviews', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-3 group"
        >
          <img
            src="https://cdn.poehali.dev/projects/90b19190-9052-4574-8bf9-c0a68b0e224d/bucket/1a270972-0dae-4e88-a2da-699ff77c4f78.jpg"
            alt="Навык 2.0"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-edu-orange text-white shadow-md shadow-edu-orange/30'
                    : 'text-edu-dark/70 hover:text-edu-dark hover:bg-white/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-semibold text-edu-dark/70 hover:text-edu-dark transition-colors">
            Войти
          </button>
          <button
            onClick={() => handleNavClick('#courses')}
            className="btn-primary text-sm py-2.5 px-6"
          >
            Начать бесплатно
          </button>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-edu-dark transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-edu-dark transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-edu-dark transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass border-t border-white/30 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-edu-orange text-white'
                    : 'text-edu-dark/70 hover:bg-white/50 hover:text-edu-dark'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('#courses')}
            className="mt-2 btn-primary text-sm py-3 text-center"
          >
            Начать бесплатно
          </button>
        </div>
      </div>
    </header>
  );
}