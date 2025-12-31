import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FaqItem from '@/components/FaqItem';

export default function Elka() {
  const phoneNumber = '79000000000';
  const whatsappNumber = '79000000000';
  const telegramUsername = 'zabotiks';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    height: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/thanks';
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/033f3ebe-2f48-4cbd-918c-aa77527466e1.jpg" 
            alt="Вынос ёлки"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ростов-на-Дону • Левенцовка + рядом
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Вынос ёлки<br/>
              быстро и аккуратно
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-3xl mx-auto">
              Заберём ёлку из квартиры, уберём иголки.<br/>
              Цена по высоте, фиксированная заранее.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border-2 border-accent/20">
                <div className="text-3xl font-heading font-bold text-accent mb-2">790 ₽</div>
                <p className="text-primary font-medium">до 1.5 метра</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border-2 border-accent/20">
                <div className="text-3xl font-heading font-bold text-accent mb-2">1190 ₽</div>
                <p className="text-primary font-medium">1.5–2 метра</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border-2 border-accent/20">
                <div className="text-3xl font-heading font-bold text-accent mb-2">1490 ₽</div>
                <p className="text-primary font-medium">выше 2 метров</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold px-12 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={handleCall}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-10 py-6 text-base rounded-xl transition-all duration-300"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Выезд в течение 1–3 часов • Отвечаю за 5–10 минут
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Что входит в услугу
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Всё делаем за вас — от квартиры до контейнера
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'TreePine', title: 'Забираем ёлку', desc: 'Из любой комнаты, даже если стоит у окна' },
                { icon: 'Sparkles', title: 'Убираем иголки', desc: 'Аккуратно собираем у двери и в коридоре' },
                { icon: 'Package', title: 'Упаковываем', desc: 'При необходимости укутываем, чтобы не сорить' },
                { icon: 'Trash2', title: 'Выносим', desc: 'До контейнера, без мусора в подъезде' }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon} className="text-accent" size={32} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Как это работает
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Три простых шага до чистой квартиры
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: '1', title: 'Звоните', desc: 'Называете адрес и высоту ёлки' },
                { num: '2', title: 'Приезжаем', desc: 'Обычно в течение 1–3 часов' },
                { num: '3', title: 'Готово', desc: 'Забираем ёлку, убираем иголки' }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-accent text-white rounded-2xl flex items-center justify-center font-heading text-3xl font-bold mx-auto mb-6 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
              <p className="text-lg text-muted-foreground mb-4">
                <strong className="text-primary">Оплата по факту</strong> — наличными или переводом
              </p>
              <p className="text-sm text-muted-foreground">
                Время работы: 10–15 минут в среднем
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Частые вопросы
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Как вы определяете высоту ёлки?',
                  a: 'По фото или вашим словам. Обычно клиенты знают примерную высоту или могут сказать «по пояс», «до потолка» и т.д.'
                },
                {
                  q: 'Можно вызвать сегодня?',
                  a: 'Да, если есть свободное окно. Обычно выезжаем в течение 1–3 часов.'
                },
                {
                  q: 'Вы убираете все иголки?',
                  a: 'Собираем иголки у двери и по маршруту выноса. Если нужна полная уборка — это отдельная услуга.'
                },
                {
                  q: 'Нужны ли мне мешки или упаковка?',
                  a: 'Нет, при необходимости упакуем сами, чтобы не сорить в подъезде.'
                },
                {
                  q: 'Работаете в выходные?',
                  a: 'Да, выезжаем семь дней в неделю, 09:00–21:00.'
                },
                {
                  q: 'Что если ёлка очень большая?',
                  a: 'Вынесем любую. Главное — она должна проходить в дверные проёмы и лифт.'
                }
              ].map((faq, idx) => (
                <FaqItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Отзывы клиентов
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Приехали быстро, вынесли ёлку за 10 минут. Иголки собрали.',
                'Удобно, что цена заранее известна. Без торга на месте.',
                'Ёлка 2.5 метра — справились легко. Рекомендую.',
                'Аккуратно упаковали, в подъезде ничего не просыпалось.',
                'Позвонил утром — к обеду уже забрали. Всё чисто.',
                'Понравилось, что сами всё сделали. Я только дверь открыл.'
              ].map((review, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">"{review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-24 bg-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">
              Заказать вынос ёлки
            </h2>
            <p className="text-center text-white/80 text-lg mb-12">
              Позвоните или оставьте заявку — перезвоню за 5–10 минут
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 font-semibold px-10 py-7 text-lg rounded-xl shadow-lg"
                onClick={handleCall}
              >
                <Icon name="Phone" className="mr-2" size={22} />
                Позвонить сейчас
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-10 py-7 text-lg rounded-xl shadow-lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={22} />
                WhatsApp
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h3 className="font-heading text-2xl font-bold text-primary mb-8 text-center">
                Или заполните форму
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Адрес</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Высота ёлки</label>
                  <select
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  >
                    <option value="">Выберите высоту</option>
                    <option value="до 1.5 м (790 ₽)">до 1.5 м (790 ₽)</option>
                    <option value="1.5–2 м (1190 ₽)">1.5–2 м (1190 ₽)</option>
                    <option value="выше 2 м (1490 ₽)">выше 2 м (1490 ₽)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Удобное время</label>
                  <input
                    type="text"
                    required
                    placeholder="Например: сегодня после 15:00"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-7 text-lg rounded-xl shadow-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">
              Zabotiks — "Я рядом"
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 rounded-xl"
                onClick={handleCall}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (900) 000-00-00
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 rounded-xl"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 rounded-xl"
                onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </Button>
            </div>
            <p className="text-muted-foreground">
              Ростов-на-Дону • Левенцовка + соседние районы • 09:00–21:00
            </p>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl p-4 md:hidden z-50">
        <div className="flex gap-3">
          <Button 
            className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold py-7 text-base rounded-xl shadow-lg"
            onClick={handleCall}
          >
            <Icon name="Phone" className="mr-2" size={20} />
            Позвонить
          </Button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-7 text-base rounded-xl shadow-lg"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
