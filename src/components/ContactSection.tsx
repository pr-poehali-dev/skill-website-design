import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Введите имя';
    if (!form.email.trim()) e.email = 'Введите email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Некорректный email';
    if (!form.message.trim()) e.message = 'Введите сообщение';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => { const n = { ...p }; delete n[field]; return n; });
  };

  const contacts = [
    { icon: 'Mail', label: 'Email', value: 'hello@edupro.ru' },
    { icon: 'Phone', label: 'Телефон', value: '+7 (800) 555-35-35' },
    { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Образования, 1' },
    { icon: 'Clock', label: 'Режим', value: 'Пн–Пт: 9:00 – 21:00' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal opacity-0-init inline-flex items-center gap-2 bg-edu-green/15 text-edu-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="MessageCircle" size={14} />
            Свяжитесь с нами
          </div>
          <h2 className="reveal opacity-0-init section-title mb-4 animate-delay-100">
            Остались вопросы?
          </h2>
          <p className="reveal opacity-0-init text-edu-dark/50 text-lg max-w-xl mx-auto animate-delay-200">
            Напишите нам — ответим в течение 2 часов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: info */}
          <div className="reveal opacity-0-init flex flex-col gap-6 animate-delay-200">
            <div className="bg-gradient-to-br from-edu-dark to-edu-gray rounded-3xl p-8 text-white">
              <h3 className="font-display font-700 text-2xl mb-2"
                  style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>
                Мы на связи
              </h3>
              <p className="text-white/50 mb-8 text-sm leading-relaxed">
                Наша команда поддержки готова помочь вам выбрать курс, ответить на любые вопросы и сопроводить на пути к знаниям.
              </p>

              <div className="flex flex-col gap-4">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Icon name={c.icon} fallback="Info" size={18} className="text-edu-orange" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 font-medium">{c.label}</div>
                      <div className="text-sm font-semibold text-white">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-edu-dark mb-4 text-sm">Мы в соцсетях</h4>
              <div className="flex gap-3">
                {[
                  { icon: '📱', label: 'Telegram', color: 'bg-sky-100 text-sky-600' },
                  { icon: '📸', label: 'Instagram', color: 'bg-pink-100 text-pink-600' },
                  { icon: '▶️', label: 'YouTube', color: 'bg-red-100 text-red-500' },
                  { icon: '💼', label: 'LinkedIn', color: 'bg-blue-100 text-blue-600' },
                ].map((s) => (
                  <button
                    key={s.label}
                    className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl ${s.color} hover:scale-105 transition-transform duration-200 font-medium text-xs`}
                  >
                    <span className="text-xl">{s.icon}</span>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal opacity-0-init animate-delay-300">
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center animate-scale-in">
                <div>
                  <div className="w-20 h-20 rounded-full bg-edu-green/15 flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCircle" size={40} className="text-edu-green" />
                  </div>
                  <h3 className="font-display font-700 text-2xl text-edu-dark mb-3"
                      style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>
                    Спасибо!
                  </h3>
                  <p className="text-edu-dark/50 mb-6">
                    Мы получили ваше сообщение и свяжемся с вами в течение 2 часов.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary text-sm py-3 px-6"
                  >
                    Написать ещё раз
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5"
              >
                <h3 className="font-display font-700 text-xl text-edu-dark"
                    style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>
                  Написать нам
                </h3>

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-edu-dark/60 mb-1.5 block uppercase tracking-wider">
                      Имя *
                    </label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm bg-gray-50 text-edu-dark placeholder:text-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-edu-orange ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-edu-dark/60 mb-1.5 block uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm bg-gray-50 text-edu-dark placeholder:text-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-edu-orange ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs font-semibold text-edu-dark/60 mb-1.5 block uppercase tracking-wider">
                    Тема
                  </label>
                  <input
                    type="text"
                    placeholder="Чем можем помочь?"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm bg-gray-50 text-edu-dark placeholder:text-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-edu-orange"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-edu-dark/60 mb-1.5 block uppercase tracking-wider">
                    Сообщение *
                  </label>
                  <textarea
                    placeholder="Расскажите подробнее..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 text-sm bg-gray-50 text-edu-dark placeholder:text-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-edu-orange resize-none ${
                      errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary flex items-center justify-center gap-2 w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Icon name="Loader2" size={18} className="animate-spin text-white" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={18} className="text-white" />
                      Отправить сообщение
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
