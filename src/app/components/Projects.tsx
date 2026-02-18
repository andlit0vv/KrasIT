import { ArrowRight } from 'lucide-react';
import project1 from 'figma:asset/96428283e27c355238669f0e2db27c69a4704936.png';

export function Projects() {
  const projects = [
    {
      title: 'ЗИМНЯЯ УНИВЕРСИАДА 2019',
      description: 'Реализация комплексной инфраструктуры для международного спортивного мероприятия',
      image: project1,
    },
    {
      title: 'ДОМ СПОРТА ИМ. МИХАИЛА ДВОРОВНА',
      description: 'Инженерные системы спортивного комплекса',
      image: project1,
    },
    {
      title: 'БТС-Мост (Метро и город Красноярск)',
      description: 'Системы безопасности и диспетчеризации транспортной инфраструктуры',
      image: project1,
    },
    {
      title: 'Многофункциональный центр в Луганской области',
      description: 'Комплексное оснащение современного административного здания',
      image: project1,
    },
  ];

  return (
    <section id="проекты" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl mb-4 text-[#001F3F] tracking-tight">
            РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0055A5] to-[#003366]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-white/40 text-4xl">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl mb-3 text-gray-900 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0055A5] text-white rounded-lg text-sm hover:bg-[#003366] transition-colors group/btn">
                  <span>Подробнее</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}