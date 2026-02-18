import { useEffect, useRef, useState } from 'react';

export function Partners() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    'HP', 'Dell', 'CISCO', 'GAGAR7N', 'HIKVISION', 'kaspersky',
    'APC', 'Dahua', 'MASTERMANN', 'infotecs', 'UserGate', 'Check Point',
    'IEK', 'Lenovo', 'HUAWEI', 'Legrand', 'Schneider Electric', 'INFOWATCH',
    'hyperline', 'KEHUA TECH', 'ELTEX', 'ONTEK', 'КОД безопасности',
    'DKC', 'LTV', 'EATON', 'CyberPower', 'OSNOVO', 'ELSYS', 'BEWARD',
    'INFERIT', 'Tiandy', 'iCL', 'ISS', 'BASTION 2', 'BOLID', 'EKF',
  ];

  // Duplicate partners for seamless loop
  const allPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll when we've scrolled through one set of partners
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <section id="партнеры" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-[#001F3F] tracking-tight">
            КЛЮЧЕВЫЕ ПАРТНЕРЫ
          </h2>
          <p className="text-lg text-gray-600">
            Мы работаем с ведущими мировыми производителями
          </p>
        </div>

        {/* Partners Slider */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="slider-container flex gap-12 overflow-x-hidden py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:border-[#0055A5] hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center px-4">
                  <span className="text-sm text-gray-700 group-hover:text-[#0055A5] transition-colors">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Partner Logos Grid for Reference */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>И многие другие технологические партнеры</p>
        </div>
      </div>
    </section>
  );
}