import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ['Главная', 'Решения', 'Проекты', 'Партнеры', 'Контакты'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 border-b transition-all duration-300 ${
      isScrolled ? 'border-gray-200 shadow-lg' : 'border-gray-100'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-3xl tracking-tight" style={{ color: '#0055A5' }}>
            <span className="inline-block transform">К</span>
            <span className="inline-block transform">И</span>
            <span className="inline-block transform">Т</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-700 hover:text-[#0055A5] transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Phone */}
        <div className="flex items-center gap-2 text-[#0055A5]">
          <Phone className="w-4 h-4" />
          <span className="text-sm">+7 (391) 200-12-15</span>
        </div>
      </div>
    </header>
  );
}