export function EngineeringSolutions() {
  const solutions = [
    {
      number: '1',
      title: 'ИНФРАСТРУКТУРА ЦОД',
      description: 'Проектирование и реализация комплексной инфраструктуры центров обработки данных с повышенной надежностью и т.д.',
      features: [
        'Системы бесперебойного электропитания',
        'Системы кондиционирования',
        'Структурированные кабельные системы',
        'Системы организации безопасности',
        'Системы диспетчеризации и управления',
      ],
    },
    {
      number: '2',
      title: 'СЛАБОТОЧНЫЕ СИСТЕМЫ',
      description: 'Полный комплекс услуг по проектированию, монтажу, наладке и дальнейшему обслуживанию и координированию оборудования слаботочных систем',
      features: [
        'Системы контроля доступа',
        'Системы видеонаблюдения',
        'Системы безопасности',
        'Сети АСУ ТП, технологии',
      ],
    },
    {
      number: '3',
      title: 'ПРОТИВОПОЖАРНЫЕ СИСТЕМЫ',
      description: 'Комплекс услуг от проектирования до ввода в эксплуатацию и последующего сервисного обслуживания специальной работы',
      features: [
        'Системы пожарной сигнализации',
        'Системы оповещения при угрозах различной при пожаре',
        'Системы автоматизации',
      ],
    },
    {
      number: '4',
      title: 'СИСТЕМЫ ВЕНТИЛЯЦИИ И КОНДИЦИОНИРОВАНИЯ',
      description: 'Полный спектр услуг по созданию и обеспечению распределению тепло- и энергоснабжения систем вентиляции и кондиционирования',
      features: [
        'Вентиляционные установки, воздуховоды и вытяжные вентиляторы для тепла',
        'Системы воздушного отопления, тепло- и термогенераторы',
        'Сплит- и мульти-сплит-системы',
        'Системы кондиционирования для центров',
      ],
    },
    {
      number: '5',
      title: 'СИСТЕМЫ ЭЛЕКТРОСНАБЖЕНИЯ И РЕЗЕРВНОГО ПИТАНИЯ',
      description: 'Услуги по созданию систем комплексного электроснабжения зданий и сооружений',
      features: [
        'Системы бесперебойного электропитания',
        'Системы вне-гарантированного и резервного',
        'Электрощитовые помещения',
        'Системы молниезащиты и заземления',
      ],
    },
  ];

  return (
    <section id="решения" className="py-32 bg-gradient-to-b from-[#001F3F] to-[#003366]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl mb-4 text-white tracking-tight">
            РЕАЛИЗУЕМЫЕ ИНЖЕНЕРНЫЕ РЕШЕНИЯ
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="group relative p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#0055A5] flex items-center justify-center text-white text-xl shadow-lg">
                {solution.number}
              </div>

              <div className="mb-4 pt-2">
                <h3 className="text-2xl text-white mb-3 tracking-wide">
                  {solution.title}
                </h3>
                <p className="text-blue-200 leading-relaxed mb-6">
                  {solution.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0055A5] mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}