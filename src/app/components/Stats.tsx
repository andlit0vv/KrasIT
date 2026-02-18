import { Award, Users, Briefcase, Clock } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Award,
      value: '15+',
      label: 'Лет опыта',
    },
    {
      icon: Briefcase,
      value: '200+',
      label: 'Реализованных проектов',
    },
    {
      icon: Users,
      value: '50+',
      label: 'Ключевых партнеров',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Техническая поддержка',
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-default"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0055A5]/10 to-[#003366]/10 mb-4 group-hover:from-[#0055A5]/20 group-hover:to-[#003366]/20 transition-all">
                  <Icon className="w-8 h-8 text-[#0055A5]" />
                </div>
                <div className="text-4xl text-[#001F3F] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
