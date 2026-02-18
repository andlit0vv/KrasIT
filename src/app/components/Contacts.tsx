import { MapPin, Phone, Mail } from 'lucide-react';

export function Contacts() {
  return (
    <section id="контакты" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-[#001F3F] tracking-tight">
            КОНТАКТЫ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#0055A5] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                  Телефон
                </h3>
                <p className="text-xl text-gray-900">
                  +7 (391) 200-12-15
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#0055A5] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                  Электронная почта
                </h3>
                <p className="text-xl text-gray-900">
                  office@kras-it.ru
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#0055A5] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                  Наш адрес
                </h3>
                <p className="text-xl text-gray-900 leading-relaxed">
                  Красноярск, ул. Ады Лебедевой, д. 18<br />
                  пом. 54
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0055A5] to-[#003366] flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-40" />
                <p className="text-lg opacity-60">Карта</p>
                <p className="text-sm opacity-40 mt-2">
                  Красноярск, ул. Ады Лебедевой, д. 18
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}