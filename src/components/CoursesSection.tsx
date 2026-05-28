import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Разработка', 'Дизайн', 'Бизнес', 'Маркетинг', 'Аналитика'];

const courses = [
  {
    id: 1,
    category: 'Разработка',
    title: 'React & TypeScript с нуля',
    description: 'Современная веб-разработка: от основ до продвинутых паттернов и архитектуры.',
    duration: '40 часов',
    level: 'Новичок',
    students: '3 240',
    rating: 4.9,
    price: '4 900 ₽',
    color: 'from-blue-500 to-indigo-600',
    emoji: '⚛️',
    tag: 'Хит',
    tagColor: 'bg-edu-orange text-white',
  },
  {
    id: 2,
    category: 'Дизайн',
    title: 'UI/UX Design: Figma Pro',
    description: 'Создавай красивые интерфейсы. Принципы дизайна, прототипирование, пользовательский опыт.',
    duration: '32 часа',
    level: 'Средний',
    students: '2 100',
    rating: 4.8,
    price: '3 900 ₽',
    color: 'from-purple-500 to-pink-600',
    emoji: '🎨',
    tag: 'Популярный',
    tagColor: 'bg-edu-purple text-white',
  },
  {
    id: 3,
    category: 'Маркетинг',
    title: 'Digital-маркетинг 360°',
    description: 'SMM, SEO, контекстная реклама, email-маркетинг — полный арсенал инструментов.',
    duration: '28 часов',
    level: 'Новичок',
    students: '4 500',
    rating: 4.7,
    price: '2 900 ₽',
    color: 'from-orange-400 to-red-500',
    emoji: '📣',
    tag: 'Новинка',
    tagColor: 'bg-edu-green text-white',
  },
  {
    id: 4,
    category: 'Аналитика',
    title: 'Data Science & Python',
    description: 'Анализ данных, машинное обучение, визуализация. Профессия будущего.',
    duration: '60 часов',
    level: 'Продвинутый',
    students: '1 800',
    rating: 4.9,
    price: '6 900 ₽',
    color: 'from-green-500 to-teal-600',
    emoji: '📊',
    tag: 'Топ',
    tagColor: 'bg-edu-orange text-white',
  },
  {
    id: 5,
    category: 'Бизнес',
    title: 'Запуск стартапа с нуля',
    description: 'От идеи до MVP. Бизнес-модели, привлечение инвестиций, масштабирование.',
    duration: '24 часа',
    level: 'Средний',
    students: '1 600',
    rating: 4.6,
    price: '5 500 ₽',
    color: 'from-yellow-400 to-orange-500',
    emoji: '🚀',
    tag: '',
    tagColor: '',
  },
  {
    id: 6,
    category: 'Разработка',
    title: 'Python Backend Development',
    description: 'FastAPI, базы данных, REST API, Docker — создавай серверные приложения.',
    duration: '50 часов',
    level: 'Средний',
    students: '2 700',
    rating: 4.8,
    price: '5 900 ₽',
    color: 'from-sky-500 to-blue-700',
    emoji: '🐍',
    tag: 'Популярный',
    tagColor: 'bg-edu-blue text-white',
  },
];

const levelColor: Record<string, string> = {
  'Новичок': 'text-edu-green bg-edu-green/10',
  'Средний': 'text-edu-orange bg-edu-orange/10',
  'Продвинутый': 'text-edu-purple bg-edu-purple/10',
};

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [enrolled, setEnrolled] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'Все'
    ? courses
    : courses.filter(c => c.category === activeCategory);

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

  const handleEnroll = (id: number) => {
    setEnrolled(id);
    setTimeout(() => setEnrolled(null), 3000);
  };

  return (
    <section id="courses" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal opacity-0-init inline-flex items-center gap-2 bg-edu-blue/10 text-edu-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="BookOpen" size={14} />
            180+ курсов в каталоге
          </div>
          <h2 className="reveal opacity-0-init section-title mb-4 animate-delay-100">
            Популярные курсы
          </h2>
          <p className="reveal opacity-0-init text-edu-dark/50 text-lg max-w-2xl mx-auto animate-delay-200">
            Выбирай из широкого каталога курсов по актуальным направлениям
          </p>
        </div>

        {/* Category Filter */}
        <div className="reveal opacity-0-init flex flex-wrap gap-2 justify-center mb-10 animate-delay-300">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-edu-dark text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-edu-dark/60 hover:bg-gray-200 hover:text-edu-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course, i) => (
            <div
              key={course.id}
              className="card-hover bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card top */}
              <div className={`relative h-40 bg-gradient-to-br ${course.color} p-6 flex items-end`}>
                <span className="text-5xl absolute top-5 right-5 group-hover:scale-125 transition-transform duration-300">
                  {course.emoji}
                </span>
                {course.tag && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${course.tagColor}`}>
                    {course.tag}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {course.category}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${levelColor[course.level]}`}>
                    {course.level}
                  </span>
                </div>

                <h3 className="font-display font-700 text-lg text-edu-dark mb-2 leading-tight group-hover:text-edu-orange transition-colors"
                    style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>
                  {course.title}
                </h3>
                <p className="text-sm text-edu-dark/50 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-edu-dark/50 mb-5">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={12} />
                    {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Star" size={12} className="text-edu-yellow fill-edu-yellow" />
                    {course.rating}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="font-display font-800 text-xl text-edu-dark"
                        style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
                    {course.price}
                  </span>
                  <button
                    onClick={() => handleEnroll(course.id)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      enrolled === course.id
                        ? 'bg-edu-green text-white scale-95'
                        : 'bg-edu-orange text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 active:scale-95'
                    }`}
                  >
                    {enrolled === course.id ? (
                      <span className="flex items-center gap-1">
                        <Icon name="Check" size={14} />
                        Записан!
                      </span>
                    ) : (
                      'Записаться'
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-edu-dark/10 text-edu-dark font-semibold hover:bg-edu-dark hover:text-white hover:border-edu-dark transition-all duration-300">
            Смотреть все курсы
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </div>

      {/* Notification */}
      {enrolled !== null && (
        <div className="fixed bottom-8 right-8 z-50 glass rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3 animate-scale-in">
          <div className="w-10 h-10 rounded-xl bg-edu-green flex items-center justify-center">
            <Icon name="Check" size={20} className="text-white" />
          </div>
          <div>
            <div className="font-semibold text-edu-dark text-sm">Вы записаны на курс!</div>
            <div className="text-xs text-muted-foreground">Письмо отправлено на вашу почту</div>
          </div>
        </div>
      )}
    </section>
  );
}
