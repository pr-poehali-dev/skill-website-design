import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const teachers = [
  {
    name: 'Александра Ким',
    role: 'Senior Frontend Dev',
    subject: 'React & TypeScript',
    exp: '8 лет опыта',
    students: '4 200',
    courses: 6,
    emoji: '👩‍💻',
    color: 'from-blue-400 to-indigo-600',
    tags: ['React', 'TypeScript', 'Node.js'],
    company: 'ex-Яндекс',
  },
  {
    name: 'Максим Орлов',
    role: 'Lead UX Designer',
    subject: 'UI/UX & Figma',
    exp: '10 лет опыта',
    students: '3 800',
    courses: 4,
    emoji: '🎨',
    color: 'from-purple-400 to-pink-600',
    tags: ['Figma', 'UX Research', 'Design Systems'],
    company: 'ex-Тинькофф',
  },
  {
    name: 'Дарья Соколова',
    role: 'Data Scientist',
    subject: 'Python & ML',
    exp: '7 лет опыта',
    students: '2 900',
    courses: 5,
    emoji: '🔬',
    color: 'from-green-400 to-teal-600',
    tags: ['Python', 'ML', 'TensorFlow'],
    company: 'ex-Сбер',
  },
  {
    name: 'Иван Петров',
    role: 'Growth Marketer',
    subject: 'Digital Marketing',
    exp: '9 лет опыта',
    students: '5 100',
    courses: 7,
    emoji: '📊',
    color: 'from-orange-400 to-red-500',
    tags: ['SEO', 'SMM', 'Reachability'],
    company: 'ex-VK',
  },
  {
    name: 'Елена Новикова',
    role: 'Business Analyst',
    subject: 'Бизнес & Стартапы',
    exp: '12 лет опыта',
    students: '2 200',
    courses: 3,
    emoji: '🚀',
    color: 'from-yellow-400 to-orange-500',
    tags: ['Strategy', 'Lean', 'OKR'],
    company: 'ex-Mail.ru',
  },
  {
    name: 'Артём Волков',
    role: 'Backend Engineer',
    subject: 'Python & DevOps',
    exp: '6 лет опыта',
    students: '3 400',
    courses: 5,
    emoji: '⚙️',
    color: 'from-sky-400 to-blue-600',
    tags: ['Python', 'Docker', 'AWS'],
    company: 'ex-Авито',
  },
];

export default function TeachersSection() {
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
    <section id="teachers" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal opacity-0-init inline-flex items-center gap-2 bg-edu-purple/10 text-edu-purple px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="GraduationCap" size={14} />
            Наши эксперты
          </div>
          <h2 className="reveal opacity-0-init section-title mb-4 animate-delay-100">
            Преподаватели
          </h2>
          <p className="reveal opacity-0-init text-edu-dark/50 text-lg max-w-xl mx-auto animate-delay-200">
            Практики из ведущих технологических компаний России
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((t, i) => (
            <div
              key={t.name}
              className="reveal opacity-0-init group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm card-hover cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top colored band */}
              <div className={`h-24 bg-gradient-to-r ${t.color} relative`}>
                <div className="absolute -bottom-8 left-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl">
                    {t.emoji}
                  </div>
                </div>
                <div className="absolute top-3 right-4">
                  <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                    {t.company}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="pt-12 pb-6 px-6">
                <div className="mb-1 flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-700 text-lg text-edu-dark leading-tight"
                        style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>
                      {t.name}
                    </h3>
                    <p className="text-sm text-edu-orange font-semibold">{t.role}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-edu-yellow/20 px-2 py-1 rounded-lg">
                    <Icon name="Star" size={12} className="text-edu-orange fill-edu-orange" />
                    <span className="text-xs font-bold text-edu-dark">4.9</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-4 mt-1">{t.exp} · {t.subject}</p>

                {/* Stats */}
                <div className="flex gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="text-center">
                    <div className="font-display font-800 text-lg text-edu-dark"
                         style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
                      {t.students}
                    </div>
                    <div className="text-xs text-muted-foreground">студентов</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display font-800 text-lg text-edu-dark"
                         style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
                      {t.courses}
                    </div>
                    <div className="text-xs text-muted-foreground">курсов</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-edu-dark/60 px-3 py-1 rounded-lg font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover overlay info */}
                <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-xs text-edu-dark/50 italic border-t border-gray-100 pt-3">
                    Куратор направления · Отвечает в течение 2 часов
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
