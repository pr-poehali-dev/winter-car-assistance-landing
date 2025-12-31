import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FaqItem from '@/components/FaqItem';

export default function Porucheniya() {
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
            src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/3adda042-a31f-4b95-8cd0-4fee6e0f0de0.jpg" 
            alt="Поручения и доставка"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ростов-на-Дону • Левенцовка + рядом
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Поручения<br/>
              и доставка
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-3xl mx-auto">
              Магазин • Аптека • ПВЗ • Документы<br/>
              Покупки строго по чеку. Без суеты.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-accent/20">
                <div className="inline-block bg-accent/10 rounded-xl px-4 py-1 mb-3">
                  <span className="text-accent font-semibold text-sm">Рядом</span>
                </div>
                <div className="text-4xl font-heading font-bold text-primary mb-3">790–1290 ₽</div>
                <p className="text-muted-foreground">Задачи до 30 минут в радиусе района</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-accent/20">
                <div className="inline-block bg-accent/10 rounded-xl px-4 py-1 mb-3">
                  <span className="text-accent font-semibold text-sm">Съездить</span>
                </div>
                <div className="text-4xl font-heading font-bold text-primary mb-3">1490–2490 ₽</div>
                <p className="text-muted-foreground">Доставка 60–90 минут, дальше района</p>
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
              Покупки строго по чеку • Отвечаю за 5–10 минут
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
              Любые задачи, которые можно закрыть быстро и просто
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'ShoppingBag', title: 'Магазины', desc: 'Покупки по списку. Оплата строго по чеку, без наценок.' },
                { icon: 'Pill', title: 'Аптеки', desc: 'Лекарства по рецепту или списку. Чек обязательно.' },
                { icon: 'Package', title: 'ПВЗ и посылки', desc: 'Забрать с Wildberries, Ozon, почты. Занести домой.' },
                { icon: 'FileText', title: 'Документы', desc: 'Отвезти/забрать документы, справки, бумаги.' },
                { icon: 'Briefcase', title: 'Офисные задачи', desc: 'Курьерская доставка по городу.' },
                { icon: 'MoreHorizontal', title: 'Другие поручения', desc: 'Напишите — обсудим возможность.' }
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
              Как мы работаем
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Прозрачная схема без сюрпризов
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { 
                  icon: 'Receipt', 
                  title: 'Покупки строго по чеку', 
                  desc: 'Присылаете список и деньги заранее (или я покупаю, вы возвращаете по чеку). Никаких наценок — только реальная стоимость товаров.' 
                },
                { 
                  icon: 'Shield', 
                  title: 'Фото подтверждение', 
                  desc: 'Могу прислать фото товаров до покупки или чека после — для вашего спокойствия.' 
                },
                { 
                  icon: 'MapPin', 
                  title: 'Удобная зона', 
                  desc: 'Левенцовка + ближайшие районы. Если нужно дальше — обсудим отдельно.' 
                },
                { 
                  icon: 'Clock', 
                  title: 'Гибкое время', 
                  desc: 'Можем договориться на конкретное время или «как будет окно». График 09:00–21:00.' 
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

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-accent/10">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
                Процесс выполнения
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { num: '1', title: 'Список', desc: 'Присылаете что купить/забрать' },
                  { num: '2', title: 'Оценка', desc: 'Называю стоимость услуги' },
                  { num: '3', title: 'Делаем', desc: 'Покупаем, забираем, привозим' },
                  { num: '4', title: 'Чек', desc: 'Показываю чеки, получаю оплату' }
                ].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="font-heading text-2xl font-bold text-accent">{step.num}</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Примеры задач
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Что мы уже делали для клиентов
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Купить продукты по списку в «Пятёрочке» — 790 ₽',
                'Забрать посылку с ПВЗ Wildberries — 790 ₽',
                'Отвезти документы в МФЦ и вернуть готовые — 1490 ₽',
                'Купить лекарства в трёх аптеках (по списку) — 1290 ₽',
                'Забрать заказ из мастерской на другом конце города — 2490 ₽',
                'Купить стройматериалы в Леруа и привезти домой — 1990 ₽'
              ].map((task, idx) => (
                <div key={idx} className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl p-6 border border-accent/20">
                  <p className="text-primary font-medium">{task}</p>
                </div>
              ))}
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
                  a: 'По времени и расстоянию. «Рядом» (до 30 минут) — 790–1290 ₽. «Съездить» (60–90 минут) — 1490–2490 ₽. Точную цену называю после описания задачи.'
                },
                {
                  q: 'Как оплачивать покупки?',
                  a: 'Три варианта: 1) Вы даёте деньги заранее, я покупаю и показываю чек. 2) Я покупаю, вы возвращаете по чеку. 3) Вы сами оплачиваете онлайн, я только забираю.'
                },
                {
                  q: 'Можно ли увидеть чек до оплаты?',
                  a: 'Да, пришлю фото чека перед тем как вернуть покупки.'
                },
                {
                  q: 'Что если товара нет в наличии?',
                  a: 'Позвоню и спрошу, что делать — искать аналог или вернуться без покупки.'
                },
                {
                  q: 'Можно срочно?',
                  a: 'Да, если есть окно. Обычно в течение 1–3 часов могу выехать.'
                },
                {
                  q: 'Работаете в выходные?',
                  a: 'Да, семь дней в неделю, 09:00–21:00.'
                },
                {
                  q: 'Что если список большой?',
                  a: 'Не проблема. Главное — заранее обсудим время и стоимость.'
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
                'Купили продукты по списку. Всё по чеку, без накруток. Удобно.',
                'Забрали посылку с ПВЗ и занесли домой. Быстро и аккуратно.',
                'Отвезли документы в МФЦ. Цену назвали заранее — так и вышло.',
                'Понравилось, что прислали фото чека. Всё честно.',
                'Купили лекарства в трёх аптеках. Сэкономили моё время.',
                'Рекомендую — надёжно и без суеты.'
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
              Заказать поручение
            </h2>
            <p className="text-center text-white/80 text-lg mb-12">
              Опишите задачу — назову цену и время
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
                  <label className="block text-sm font-semibold text-primary mb-2">Адрес доставки</label>
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
                    placeholder="Опишите задачу: что купить/забрать/отвезти"
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
