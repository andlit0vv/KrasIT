import { ArrowUp } from 'lucide-react';

export function Footer() {
  const menuItems = ['Главная', 'Решения', 'Проекты', 'Партнеры', 'Контакты'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001F3F] text-white py-16 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0055A5] hover:bg-[#003366] flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Company */}
          <div>
            <div className="text-3xl mb-4 tracking-tight">
              <span className="inline-block">К</span>
              <span className="inline-block">И</span>
              <span className="inline-block">Т</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              ООО "Красноярск ИТ"
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400">
              Меню
            </h4>
            <nav className="space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400">
              Наш адрес:
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Красноярск, ул. Ады Лебедевой, д. 18 пом. 54</p>
              <p>
                <span className="text-gray-400">Телефон:</span> +7 (391) 200-12-15
              </p>
              <p>
                <span className="text-gray-400">Электронная почта:</span> office@kras-it.ru
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ООО "Красноярск ИТ". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}