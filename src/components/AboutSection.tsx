import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Zap',
    title: 'Учись в своём темпе',
    desc: 'Никаких дедлайнов. Начни сегодня, пройди за неделю или за год — результат важнее скорости.',
    color: 'bg-edu-yellow/20 text-edu-orange',
  },
  {
    icon: 'Award',
    title: 'Сертификаты ценятся',
    desc: 'Наши дипломы признаются ведущими компаниями. Добавь в резюме и LinkedIn.',
    color: 'bg-edu-blue/15 text-edu-blue',
  },
  {
    icon: 'Users',
    title: 'Живое сообщество',
    desc: 'Более 12 000 студентов в закрытом чате. Нетворкинг, помощь и поддержка 24/7.',
    color: 'bg-edu-purple/15 text-edu-purple',
  },
  {
    icon: 'Target',
    title: 'Практика с первого дня',
    desc: 'Каждый урок — это реальная задача. Учимся через делание, а не через теорию.',
    color: 'bg-edu-green/20 text-edu-green',
  },
  {
    icon: 'RefreshCw',
    title: 'Обновляется постоянно',
    desc: 'Материалы обновляются каждый квартал. Следишь за трендами отрасли автоматически.',
    color: 'bg-red-100 text-red-500',
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7',
    desc: 'Преподаватели отвечают в течение 2 часов. Ни один вопрос не остаётся без ответа.',
    color: 'bg-teal-100 text-teal-600',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0-init');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-edu-dark via-edu-gray to-edu-dark" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-edu-orange/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-edu-blue/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="reveal opacity-0-init inline-flex items-center gap-2 bg-white/10 text-white/70 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Icon name="Sparkles" size={14} />
              О платформе
            </div>
            <h2
              className="reveal opacity-0-init font-display font-900 text-4xl md:text-5xl text-white leading-tight animate-delay-100"
              style={{ fontFamily: 'Montserrat', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              Почему выбирают
              <br />
              <span className="gradient-text">Навык 2.0?</span>
            </h2>
          </div>
          <p className="reveal opacity-0-init text-white/50 text-lg max-w-sm animate-delay-200 leading-relaxed">
            Мы создали платформу, где обучение приносит удовольствие и реальные результаты.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal opacity-0-init glass-dark rounded-3xl p-6 group hover:bg-white/10 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={f.icon} fallback="Star" size={22} />
              </div>
              <h3 className="font-display font-700 text-white text-lg mb-2"
                  style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Big quote */}
        <div className="reveal opacity-0-init mt-16 glass-dark rounded-3xl p-8 md:p-12 text-center animate-delay-500">
          <div className="text-5xl mb-6">💡</div>
          <blockquote
            className="font-display font-700 text-2xl md:text-3xl text-white leading-tight mb-4"
            style={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            «Инвестиции в знания приносят
            <span className="gradient-text"> наибольший процент»</span>
          </blockquote>
          <cite className="text-white/40 text-sm not-italic">— Бенджамин Франклин</cite>
        </div>
      </div>
    </section>
  );
}