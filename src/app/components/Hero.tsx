import { Mail, Phone, ArrowRight } from 'lucide-react';
import heroImage from 'figma:asset/86a17e48616ac11fe7c4830f8c616f957e833cca.png';

export function Hero() {
  return (
    <section id="главная" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#001F3F] via-[#003366] to-[#0055A5] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-8 py-24 mt-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-sm tracking-wider text-blue-300 uppercase">
              Профессиональные IT решения
            </span>
          </div>
          
          <h1 className="text-6xl mb-6 text-white leading-tight">
            ООО "Красноярск ИТ"
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
            Создаем комплексные решения для государственных и корпоративных клиентов
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-300 mb-1">Email</div>
                <div className="text-sm">office@kras-it.ru</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-300 mb-1">Телефон</div>
                <div className="text-sm">+7 (391) 200-12-15</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0055A5] rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl animate-pulse-subtle">
            <span className="tracking-wide">Обсудить проект</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-tl-full" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}