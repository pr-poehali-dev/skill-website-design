import Icon from '@/components/ui/icon';

const footerLinks = {
  'Платформа': ['Курсы', 'О нас', 'Преподаватели', 'Блог', 'Карьера'],
  'Поддержка': ['Помощь', 'FAQ', 'Политика', 'Условия', 'Контакты'],
  'Направления': ['Разработка', 'Дизайн', 'Маркетинг', 'Аналитика', 'Бизнес'],
};

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-edu-dark text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="font-display font-900 text-3xl md:text-4xl mb-2"
              style={{ fontFamily: 'Montserrat', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              Готов начать?
            </h3>
            <p className="text-white/50 text-lg">Первый месяц — бесплатно для всех новых студентов</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => scrollToSection('courses')}
              className="btn-primary text-sm"
            >
              Начать бесплатно
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-2xl border-2 border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Связаться
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/projects/90b19190-9052-4574-8bf9-c0a68b0e224d/bucket/1a270972-0dae-4e88-a2da-699ff77c4f78.jpg"
                alt="Навык 2.0"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Современная образовательная платформа для тех, кто хочет расти профессионально и достигать новых высот.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: 'Send', label: 'Telegram' },
                { icon: 'Youtube', label: 'YouTube' },
                { icon: 'Instagram', label: 'Instagram' },
                { icon: 'Linkedin', label: 'LinkedIn' },
              ].map((s) => (
                <button
                  key={s.label}
                  title={s.label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-edu-orange hover:scale-110 transition-all duration-200"
                >
                  <Icon name={s.icon} fallback="Globe" size={16} className="text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-white/40 text-sm hover:text-edu-orange transition-colors duration-200">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <span>© 2025 Навык 2.0. Все права защищены.</span>
          <div className="flex gap-4">
            <button className="hover:text-white transition-colors">Политика конфиденциальности</button>
            <button className="hover:text-white transition-colors">Условия использования</button>
          </div>
        </div>
      </div>
    </footer>
  );
}