import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Мария Степанова',
    role: 'Frontend разработчик',
    company: 'Работает в Lamoda',
    text: 'После курса по React сразу получила оффер! Материал структурирован так, что даже сложные концепции воспринимаются легко. Преподаватель объясняет на реальных примерах.',
    rating: 5,
    course: 'React & TypeScript',
    emoji: '👩',
    months: '3 месяца назад',
  },
  {
    name: 'Денис Фролов',
    role: 'UX Designer',
    company: 'Фриланс',
    text: 'Прошёл курс по Figma — теперь зарабатываю в 2 раза больше. Платформа удобная, уроки короткие и ёмкие. Сообщество студентов очень помогает.',
    rating: 5,
    course: 'UI/UX & Figma',
    emoji: '👨',
    months: '1 месяц назад',
  },
  {
    name: 'Анна Белова',
    role: 'Product Manager',
    company: 'Работает в Авито',
    text: 'Курс по Digital-маркетингу дал системные знания, которых не хватало. Практические задания — огонь. Преподаватель на связи в чате, всё объясняет.',
    rating: 5,
    course: 'Digital Marketing',
    emoji: '👩',
    months: '2 месяца назад',
  },
  {
    name: 'Сергей Козлов',
    role: 'Data Analyst',
    company: 'Работает в Сбере',
    text: 'Python и ML — именно то, что мне нужно было. Курс ведётся практиком с реальными кейсами. Вложения окупились через месяц после трудоустройства.',
    rating: 5,
    course: 'Data Science & Python',
    emoji: '🧑',
    months: '5 месяцев назад',
  },
  {
    name: 'Ольга Морозова',
    role: 'SMM Специалист',
    company: 'Работает в агентстве',
    text: 'Давно хотела систематизировать знания в маркетинге. EduPro помог! Удобный интерфейс, живые уроки, реальные кейсы. Рекомендую всем!',
    rating: 5,
    course: 'Digital Marketing',
    emoji: '👩',
    months: '4 месяца назад',
  },
  {
    name: 'Кирилл Захаров',
    role: 'Backend Developer',
    company: 'Работает в Ozon',
    text: 'Python Backend — лучший курс по бэкенду, который я проходил. FastAPI, Docker, деплой — всё актуально и применимо сразу. Отдельное спасибо за менторство!',
    rating: 5,
    course: 'Python Backend',
    emoji: '👨',
    months: '2 месяца назад',
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal opacity-0-init inline-flex items-center gap-2 bg-edu-yellow/30 text-edu-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="Star" size={14} className="fill-edu-orange text-edu-orange" />
            Отзывы студентов
          </div>
          <h2 className="reveal opacity-0-init section-title mb-4 animate-delay-100">
            12 000+ историй успеха
          </h2>
          <p className="reveal opacity-0-init text-edu-dark/50 text-lg max-w-xl mx-auto animate-delay-200">
            Реальные люди, реальные результаты
          </p>
        </div>

        {/* Cards */}
        <div className="reveal opacity-0-init grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 animate-delay-300">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`relative bg-white rounded-3xl p-6 border-2 transition-all duration-500 cursor-default ${
                i === active
                  ? 'border-edu-orange shadow-xl shadow-orange-100 scale-[1.02]'
                  : 'border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md'
              }`}
              onClick={() => setActive(i)}
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-4xl text-edu-orange/10 font-display font-900 leading-none select-none"
                   style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 64 }}>
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Icon key={j} name="Star" size={14} className="text-edu-yellow fill-edu-yellow" />
                ))}
              </div>

              <p className="text-edu-dark/70 text-sm leading-relaxed mb-5">
                {r.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center text-2xl">
                  {r.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-edu-dark truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{r.role} · {r.company}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs bg-orange-50 text-edu-orange font-medium px-2 py-1 rounded-lg">
                    {r.course}
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs text-muted-foreground">{r.months}</div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'w-8 h-2 bg-edu-orange' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Trust badges */}
        <div className="reveal opacity-0-init mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-delay-400">
          {[
            { icon: '⭐', value: '4.9/5', label: 'средний рейтинг' },
            { icon: '🎓', value: '12 000+', label: 'выпускников' },
            { icon: '💼', value: '89%', label: 'нашли работу' },
            { icon: '🏆', value: '180+', label: 'курсов доступно' },
          ].map((b) => (
            <div key={b.label} className="bg-gray-50 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">{b.icon}</div>
              <div className="font-display font-800 text-2xl text-edu-dark"
                   style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
                {b.value}
              </div>
              <div className="text-sm text-muted-foreground">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
