import { Factory, Wrench, Database, Truck, Building2, Hospital } from 'lucide-react';

export function InfrastructureObjects() {
  const objects = [
    {
      icon: Factory,
      title: 'Промышленные объекты',
    },
    {
      icon: Wrench,
      title: 'Содержание объектов',
    },
    {
      icon: Database,
      title: 'Центры обработки данных',
    },
    {
      icon: Truck,
      title: 'Транспортные и коммунальные инфраструктуры',
    },
    {
      icon: Building2,
      title: 'Объекты',
    },
    {
      icon: Hospital,
      title: 'Медучреждения',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50" id="infrastructure">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-[#001F3F] tracking-tight">
            ОБЪЕКТЫ ИНЖЕНЕРНОЙ ИНФРАСТРУКТУРЫ
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            создает и обеспечивает надежную работу инфраструктуры зданий и сооружений, в том числе с повышенными требованиями к работе инженерных систем
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objects.map((obj, index) => {
            const Icon = obj.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#0055A5] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0055A5]/10 to-[#003366]/10 flex items-center justify-center group-hover:from-[#0055A5]/20 group-hover:to-[#003366]/20 transition-all">
                  <Icon className="w-8 h-8 text-[#0055A5]" />
                </div>
                <h3 className="text-lg text-gray-900 leading-snug">
                  {obj.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}