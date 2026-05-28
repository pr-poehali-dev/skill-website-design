import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '12 000+', label: 'студентов' },
  { value: '180+', label: 'курсов' },
  { value: '98%', label: 'довольных' },
  { value: '50+', label: 'экспертов' },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const els = heroRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-edu-light via-white to-orange-50" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-edu-orange/10 to-edu-yellow/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-edu-blue/10 to-edu-purple/10 blur-3xl pointer-events-none" />
      
      {/* Floating elements */}
      <div className="absolute top-32 right-[12%] animate-float">
        <div className="glass rounded-2xl p-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-edu-green/20 flex items-center justify-center">
              <Icon name="TrendingUp" size={20} className="text-edu-green" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Прогресс</div>
              <div className="font-bold text-edu-dark text-sm">+84% за месяц</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-56 right-[6%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass rounded-2xl p-3 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <div>
              <div className="text-xs text-muted-foreground">Сертификат</div>
              <div className="font-bold text-edu-dark text-xs">Получен!</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-[15%] animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass rounded-2xl p-3 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['🧑', '👩', '👨'].map((e, i) => (
                <span key={i} className="text-xl">{e}</span>
              ))}
            </div>
            <div>
              <div className="font-bold text-edu-dark text-xs">+24 сегодня</div>
              <div className="text-xs text-muted-foreground">новых студентов</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="reveal opacity-0-init inline-flex items-center gap-2 bg-edu-orange/10 border border-edu-orange/20 text-edu-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-edu-orange animate-pulse" />
            Платформа №1 для онлайн-обучения
          </div>

          {/* Headline */}
          <h1
            className="reveal opacity-0-init font-display font-900 text-5xl md:text-7xl leading-[1.05] text-edu-dark mb-6 animate-delay-100"
            style={{ fontFamily: 'Montserrat', fontWeight: 900, letterSpacing: '-0.03em' }}
          >
            Учись{' '}
            <span className="gradient-text">быстрее</span>
            {' '}&{' '}
            <br className="hidden md:block" />
            расти{' '}
            <span className="gradient-text">умнее</span>
          </h1>

          {/* Subtitle */}
          <p className="reveal opacity-0-init text-lg md:text-xl text-edu-dark/60 leading-relaxed mb-10 max-w-xl animate-delay-200">
            Современные курсы от практикующих экспертов. Получай знания, которые реально работают — в удобное время, в своём темпе.
          </p>

          {/* CTA buttons */}
          <div className="reveal opacity-0-init flex flex-wrap gap-4 mb-16 animate-delay-300">
            <button onClick={scrollToCourses} className="btn-primary flex items-center gap-2 text-base">
              <Icon name="Play" size={18} className="text-white" />
              Начать обучение
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-edu-dark/15 text-edu-dark font-semibold text-base hover:bg-edu-dark/5 hover:border-edu-dark/30 transition-all duration-300"
            >
              Узнать больше
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="reveal opacity-0-init flex flex-wrap gap-8 animate-delay-400">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-display font-900 text-3xl text-edu-dark"
                  style={{ fontFamily: 'Montserrat', fontWeight: 900 }}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-edu-dark/50 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-edu-dark/30">
        <span className="text-xs font-medium tracking-widest uppercase">Скролл</span>
        <div className="w-5 h-8 rounded-full border-2 border-edu-dark/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-edu-orange animate-bounce" />
        </div>
      </div>
    </section>
  );
}
