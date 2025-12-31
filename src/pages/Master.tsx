import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FaqItem from '@/components/FaqItem';

export default function Master() {
  const phoneNumber = '79000000000';
  const whatsappNumber = '79000000000';
  const telegramUsername = 'zabotiks';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    task: '',
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
            src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/9d987083-a69c-4316-a4a6-5c1549b7f7d0.jpg" 
            alt="Муж на час"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ростов-на-Дону • Левенцовка + рядом
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Муж на час
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-3xl mx-auto">
              Монтаж и мелкий ремонт по дому.<br/>
              Стоимость согласую заранее по фото.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-accent/20 max-w-2xl mx-auto mb-12">
              <div className="text-4xl font-heading font-bold text-accent mb-3">2490 ₽</div>
              <p className="text-primary font-medium text-lg mb-2">Выезд + первые 60 минут работы</p>
              <p className="text-sm text-muted-foreground">Далее +350 ₽ за каждые 30 минут</p>
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
              Стоимость заранее по фото • Выезд в течение 1–3 часов
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Что делаем
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Монтаж, сборка и мелкий ремонт для дома
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'Frame', title: 'Монтаж на стены', desc: 'Карнизы, полки, зеркала, ТВ на кронштейн, рейлинги' },
                { icon: 'Box', title: 'Сборка мебели', desc: 'Комоды, тумбы, столы, стулья, шкафы (кроме встроенных)' },
                { icon: 'Lightbulb', title: 'Электрика (простая)', desc: 'Замена розеток, выключателей, люстр, бра' },
                { icon: 'Droplet', title: 'Сантехника (лайт)', desc: 'Смесители, сифоны, подводки, мелкие протечки' },
                { icon: 'Settings', title: 'Регулировки', desc: 'Двери, петли, ручки, мебельная фурнитура' },
                { icon: 'Wrench', title: 'Мелкий ремонт', desc: 'Что-то закрепить, подтянуть, отрегулировать' }
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
              Честная работа без накруток
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  icon: 'Camera', 
                  title: 'Стоимость заранее', 
                  desc: 'Присылаете фото задачи — называю точную цену до выезда. Если что-то изменилось — согласуем на месте.' 
                },
                { 
                  icon: 'Wrench', 
                  title: 'Свои инструменты', 
                  desc: 'Приезжаю с полным набором инструмента. Расходники (дюбели, саморезы) входят в стоимость.' 
                },
                { 
                  icon: 'Sparkles', 
                  title: 'Аккуратная работа', 
                  desc: 'Бахилы, перчатки при необходимости. Мусор после работ собираю и выношу.' 
                },
                { 
                  icon: 'Shield', 
                  title: 'Гарантия 30 дней', 
                  desc: 'На монтаж и крепёж — 30 дней гарантии, если никто не переделывал после меня.' 
                }
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
              Примеры работ и цены
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Реальные задачи с ценами
            </p>

            <div className="space-y-4">
              {[
                { task: 'Повесить карниз 2 метра', price: '2490 ₽', time: '45 минут' },
                { task: 'Повесить ТВ на кронштейн', price: '2490 ₽', time: '40 минут' },
                { task: 'Собрать комод ИКЕА', price: '2490 ₽', time: '50 минут' },
                { task: 'Повесить 3 полки + зеркало', price: '2840 ₽', time: '80 минут' },
                { task: 'Заменить 2 смесителя', price: '2840 ₽', time: '75 минут' },
                { task: 'Собрать шкаф + регулировка дверей', price: '3190 ₽', time: '110 минут' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl p-6 border border-accent/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                      {item.task}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                  <div className="font-heading text-2xl font-bold text-accent">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-secondary/30 rounded-2xl p-8 text-center">
              <p className="text-lg text-primary font-semibold mb-2">
                Расходники включены в стоимость
              </p>
              <p className="text-muted-foreground">
                Дюбели, саморезы, мелочёвка — за мой счёт. Крупные материалы согласуем отдельно.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Как работаю
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Простой процесс без сюрпризов
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '1', title: 'Фото задачи', desc: 'Присылаете фото и описание работы' },
                { num: '2', title: 'Оценка', desc: 'Называю стоимость и время выполнения' },
                { num: '3', title: 'Выезд', desc: 'Приезжаю с инструментом в удобное время' },
                { num: '4', title: 'Работа', desc: 'Делаю задачу, убираю мусор, получаю оплату' }
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
              <p className="text-lg text-muted-foreground">
                Если на месте выясняется, что работы больше — сначала согласуем стоимость, потом продолжим
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
                  q: 'Сколько стоит выезд мастера?',
                  a: 'Минималка 2490 ₽ — это выезд плюс первый час работы. Если задача займёт больше времени, каждые следующие 30 минут +350 ₽.'
                },
                {
                  q: 'Нужны ли материалы?',
                  a: 'Расходники (дюбели, саморезы, мелочёвка) включены. Если нужны крупные материалы — скажу заранее, купите сами или я привезу.'
                },
                {
                  q: 'Можете приехать сегодня?',
                  a: 'Да, если есть окно. Обычно выезжаю в течение 1–3 часов.'
                },
                {
                  q: 'Даёте гарантию?',
                  a: 'На монтаж и крепёж — 30 дней, если после меня никто не переделывал.'
                },
                {
                  q: 'Что если времени ушло больше?',
                  a: 'Сначала скажу сколько ещё нужно и сколько это будет стоить. Согласуем — продолжу. Без сюрпризов.'
                },
                {
                  q: 'Вы собираете кухни и встроенные шкафы?',
                  a: 'Нет, это сложная работа на несколько дней. Но могу порекомендовать мебельщика.'
                },
                {
                  q: 'Работаете в выходные?',
                  a: 'Да, семь дней в неделю, 09:00–21:00.'
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
                'Повесили карниз ровно. Всё быстро и по цене как договорились.',
                'ТВ на стену — справились за 40 минут. Аккуратно, мусор убрали.',
                'Собрали комод ИКЕА. Приехали со своим инструментом.',
                'Поменяли смесители на кухне и в ванной. Цену назвали заранее.',
                'Понравилось, что без накруток. Сколько сказали — столько и вышло.',
                'Рекомендую — надёжный мастер, делает качественно.'
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
              Вызвать мастера
            </h2>
            <p className="text-center text-white/80 text-lg mb-12">
              Пришлите фото задачи — назову цену заранее
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
                  <label className="block text-sm font-semibold text-primary mb-2">Что нужно сделать</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Опишите задачу: что повесить/собрать/починить"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.task}
                    onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Удобное время</label>
                  <input
                    type="text"
                    required
                    placeholder="Например: завтра после 15:00"
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
