import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FaqItem from '@/components/FaqItem';

export default function Musor() {
  const phoneNumber = '79000000000';
  const whatsappNumber = '79000000000';
  const telegramUsername = 'zabotiks';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    description: '',
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
            src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/00e2bea7-a996-4a1e-98f9-da12607067aa.jpg" 
            alt="Вынос мусора"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ростов-на-Дону • Левенцовка + рядом
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Вынос мусора<br/>
              и крупногабарита
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-3xl mx-auto">
              Заберём мусор, коробки, старую мебель.<br/>
              Быстро, аккуратно, без грязи в подъезде.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-accent/20 max-w-2xl mx-auto mb-12">
              <div className="text-4xl font-heading font-bold text-accent mb-3">490–790 ₽</div>
              <p className="text-primary font-medium text-lg">Стоимость зависит от объёма</p>
              <p className="text-sm text-muted-foreground mt-2">Точную цену назову по фото</p>
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
              Что вынесем
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Мусор любого типа — бытовой, строительный, крупногабарит
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'Package', title: 'Коробки после доставки', desc: 'От мебели, техники, покупок — любое количество' },
                { icon: 'Trash2', title: 'Бытовой мусор', desc: 'Пакеты, мешки, всё что накопилось' },
                { icon: 'Sofa', title: 'Старая мебель', desc: 'Диваны, шкафы, столы, стулья' },
                { icon: 'Box', title: 'Стройматериалы', desc: 'Остатки после ремонта: упаковки, обрезки' },
                { icon: 'Wrench', title: 'Старая техника', desc: 'Холодильники, стиралки, что не работает' },
                { icon: 'Layers', title: 'Крупногабарит', desc: 'Всё что не влезает в обычный мешок' }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
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
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Делаем как для себя — быстро и чисто
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: 'Camera', title: 'Цена заранее по фото', desc: 'Пришлите фото мусора — назову точную стоимость до выезда. Никаких сюрпризов на месте.' },
                { icon: 'Sparkles', title: 'Без грязи в подъезде', desc: 'Аккуратно упакуем и вынесем. Если что-то просыпалось — уберём.' },
                { icon: 'Clock', title: 'Быстрый выезд', desc: 'Обычно приезжаем в течение 1–3 часов. Можно договориться на удобное время.' },
                { icon: 'Shield', title: 'Надёжно и честно', desc: 'Фиксированная цена. Оплата по факту. Без навязывания допуслуг.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon} className="text-accent" size={32} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Как это работает
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Три шага до чистой квартиры
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: '1', title: 'Фото мусора', desc: 'Присылаете фото или описание объёма' },
                { num: '2', title: 'Называю цену', desc: 'Сразу говорю стоимость и время выезда' },
                { num: '3', title: 'Выносим', desc: 'Приезжаем, забираем всё до контейнера' }
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

            <div className="mt-16 bg-secondary/30 rounded-2xl p-8 text-center">
              <p className="text-lg text-primary font-semibold mb-2">
                Время работы: 10–15 минут на стандартный объём
              </p>
              <p className="text-muted-foreground">
                Оплата по факту — наличными или переводом
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Частые вопросы
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Как вы считаете стоимость?',
                  a: 'По объёму мусора. Обычно клиенты присылают фото — я сразу называю цену. Диапазон 490–790 ₽ для стандартных объёмов.'
                },
                {
                  q: 'Можно вызвать сегодня?',
                  a: 'Да, если есть окно. Обычно выезжаем в течение 1–3 часов.'
                },
                {
                  q: 'Вы выносите строительный мусор?',
                  a: 'Да, но не в огромных объёмах. Если после ремонта остались обрезки, упаковки — заберём. Если несколько машин — это уже другая услуга.'
                },
                {
                  q: 'Нужны мешки или пакеты?',
                  a: 'Нет, упакуем сами если нужно. Главное — чтобы было собрано в одном месте.'
                },
                {
                  q: 'Вы убираете после выноса?',
                  a: 'Да, если что-то просыпалось по дороге — подметём/уберём.'
                },
                {
                  q: 'Работаете в выходные?',
                  a: 'Да, семь дней в неделю, 09:00–21:00.'
                },
                {
                  q: 'Можно вынести старый диван?',
                  a: 'Да, любую мебель. Главное — она должна пройти в дверь и лифт. Если нужно разобрать — скажите заранее.'
                }
              ].map((faq, idx) => (
                <FaqItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Отзывы клиентов
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Вынесли коробки от мебели. Быстро и аккуратно, в подъезде чисто.',
                'Цену назвали заранее по фото. Без торга на месте — удобно.',
                'Старый диван забрали за 15 минут. Всё как договорились.',
                'Приехали в течение часа. Мусор вынесли, ничего не просыпали.',
                'Понравилось, что сами упаковали. Я только показал что вынести.',
                'Рекомендую — честные ребята, без накруток.'
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
              Заказать вынос мусора
            </h2>
            <p className="text-center text-white/80 text-lg mb-12">
              Пришлите фото — назову цену. Или позвоните прямо сейчас
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
                  <label className="block text-sm font-semibold text-primary mb-2">Что вынести</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Опишите что нужно вынести или прикрепите фото в WhatsApp"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
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
