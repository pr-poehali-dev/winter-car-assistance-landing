import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FaqItem from '@/components/FaqItem';

export default function Index() {
  const whatsappNumber = '79000000000';
  const telegramUsername = 'zabotiks';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    description: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/thanks';
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/f030c04e-eb32-4c72-8fc8-6138307e78fc.jpg" 
            alt="Zabotiks бытовая помощь"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Zabotiks — "Я рядом"<br/>
              Бытовая помощь по району
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light">
              Ростов-на-Дону • Левенцовка + рядом • Машина есть • Выезды 09:00–21:00
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
              {[
                'Цена заранее по фото',
                'Покупки строго по чеку',
                'Приезд по времени',
                'Аккуратно и чисто'
              ].map((marker, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-sm border border-primary/10">
                  <span className="text-primary font-medium text-sm md:text-base">{marker}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Оценить по фото/списку
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 text-base rounded-xl transition-all duration-300"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 text-base rounded-xl transition-all duration-300"
                onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Отвечаю в течение 5–10 минут в рабочее время
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-16">
              Услуги
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Быстро по дому
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Короткие задачи, которые нужно просто закрыть.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Вынос мусора/коробок (10–15 минут) — <strong className="text-primary">490–790 ₽</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Вынос ёлки — <strong className="text-primary">790 / 1190 / 1490 ₽</strong> (по высоте)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Без мусора в подъезде</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Оценить по фото
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Поручения
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Магазин / аптека / ПВЗ — без суеты.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>"Рядом" (до 30 мин) — <strong className="text-primary">790–1290 ₽</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>"Съездить/привезти" (60–90 мин) — <strong className="text-primary">1490–2490 ₽</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span className="font-semibold text-accent">Покупки строго по чеку</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Оценить по списку
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Муж на час
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Монтаж и мелкий ремонт по дому.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Карнизы, полки, ТВ, зеркала</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Сборка мебели, регулировки</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Стоимость согласую заранее по фото</span>
                    </li>
                  </ul>
                  <p className="text-sm font-semibold text-primary mb-4">
                    <strong className="text-lg">2490 ₽</strong> (выезд + 60 минут)<br/>
                    <span className="text-muted-foreground">далее +350 ₽ / 30 мин</span>
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Оценить по фото
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Бытовая техника (лайт)
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Простые работы без тяжёлой электроники.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Подключение, фильтры, шланги, протечки по соединениям</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Электродуховка: петли/уплотнитель/ручки/регулировка дверцы</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="X" className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-muted-foreground">Газ / платы / пайка / фреон и компрессор — не делаю</span>
                    </li>
                  </ul>
                  <p className="text-sm font-semibold text-primary mb-4">
                    Диагностика <strong className="text-lg">990 ₽</strong> (входит при ремонте)<br/>
                    Минималка <strong className="text-lg">2990 ₽</strong> (выезд + 60 минут)<br/>
                    <span className="text-muted-foreground">далее +350 ₽ / 30 мин</span>
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Оценить по фото
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="h-2 bg-secondary"></div>
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Человек рядом
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Спокойно выговориться. Прогулка или кафе.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>60 минут: <strong className="text-primary">1490–2490 ₽</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>2 часа: <strong className="text-primary">2990–3990 ₽</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Info" className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-muted-foreground">Я не психолог. Только публичные места</span>
                    </li>
                  </ul>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
                  >
                    Написать в Telegram
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Стандарт сервиса
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Правила, которые делают работу предсказуемой
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: 'FileText', text: 'Сначала фото/описание — потом точная стоимость' },
                { icon: 'Lock', text: 'Стоимость фиксируем до начала работ' },
                { icon: 'Sparkles', text: 'В квартире работаю аккуратно (перчатки/бахилы по ситуации)' },
                { icon: 'Trash2', text: 'Мусор после работ собираю' },
                { icon: 'Receipt', text: 'Покупки — строго по чеку' },
                { icon: 'Camera', text: 'По запросу пришлю фото "готово" (удобно, если вы в отъезде)' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon name={item.icon} className="text-accent" size={24} />
                  </div>
                  <p className="text-primary font-medium pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Примеры задач
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Вынести ёлку и аккуратно собрать иголки у двери',
                'Вынос коробок после доставки',
                'Забрать ПВЗ и занести пакеты',
                'Повесить карниз / полку / ТВ на кронштейн',
                'Сборка комода/тумбы',
                'Стиралка: фильтр/шланг/протечка по соединениям'
              ].map((task, idx) => (
                <div key={idx} className="bg-secondary/20 rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                  <p className="text-primary text-sm">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Как работаем
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '1', title: 'Пишите задачу', desc: 'В WhatsApp или Telegram' },
                { num: '2', title: 'Присылаете детали', desc: 'Адрес + фото/видео/список' },
                { num: '3', title: 'Я называю цену', desc: 'Стоимость и время приезда' },
                { num: '4', title: 'Приезжаю, делаю', desc: 'Оплата по факту' }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center font-heading text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
              Если на месте выясняется другое — сначала согласуем стоимость. Без сюрпризов.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Цены
            </h2>

            <div className="space-y-4">
              {[
                { service: 'Быстро по дому', price: 'мусор 490–790 ₽ • ёлка 790/1190/1490 ₽' },
                { service: 'Поручения', price: '790–1290 ₽ (рядом) • 1490–2490 ₽ (съездить)' },
                { service: 'Муж на час', price: '2490 ₽ (выезд + 60 минут) • +350 ₽ / 30 мин' },
                { service: 'Техника (лайт)', price: 'диагностика 990 ₽ (входит) • 2990 ₽ (выезд + 60 минут) • +350 ₽ / 30 мин' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl p-6 border border-accent/20">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    {item.service}
                  </h3>
                  <p className="text-muted-foreground">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Частые вопросы
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Сколько стоит выезд?',
                  a: 'Зависит от задачи. По "муж на час" минималка 2490 ₽, по технике 2990 ₽. Остальное — по прайсу. Точную стоимость скажу заранее по фото/описанию.'
                },
                {
                  q: 'Можно срочно?',
                  a: 'Да, если есть окно. Обычно 1–3 часа по возможности.'
                },
                {
                  q: 'Как вы считаете время?',
                  a: 'Есть минималка (первый час), дальше шагом 30 минут, если реально нужно больше времени.'
                },
                {
                  q: 'Как оплачивается магазин/аптека?',
                  a: 'Покупки строго по чеку. Можно предоплату на покупку или вариант, когда вы оплачиваете, а я забираю/привожу.'
                },
                {
                  q: 'Что если на месте окажется сложнее?',
                  a: 'Сначала согласуем стоимость — потом делаем.'
                },
                {
                  q: 'Какие районы?',
                  a: 'Левенцовка + соседние. Напишите адрес — сразу скажу, могу ли выехать.'
                },
                {
                  q: 'Даете гарантию?',
                  a: 'На монтаж/крепёж — 30 дней, если никто не переделывал после меня.'
                },
                {
                  q: 'По технике что не делаете?',
                  a: 'Газ, платы/пайка, холодильники по фреону/компрессору.'
                },
                {
                  q: 'Можно заказать только вынос ёлки/мусора?',
                  a: 'Да, это отдельные услуги.'
                },
                {
                  q: 'Работаете вечером/в выходные?',
                  a: 'Да, в пределах графика 09:00–21:00.'
                },
                {
                  q: 'Нужно ли фото?',
                  a: 'Желательно. Так я быстрее и точнее называю стоимость.'
                },
                {
                  q: 'Как оплатить?',
                  a: 'Наличными или переводом — по факту выполнения.'
                }
              ].map((faq, idx) => (
                <FaqItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Отзывы
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Вынос ёлки — быстро и аккуратно. Приехал вовремя.',
                'Забрал ПВЗ, занёс пакеты. Всё по делу.',
                'Повесили карниз ровно. Стоимость как договорились заранее.',
                'Стиралка — прочистили фильтр, течь ушла.',
                'Собрал комод, мусор собрал, всё аккуратно.',
                'Понравилось: без суеты и без накруток.'
              ].map((review, idx) => (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">"{review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Для арендодателей / суточников
            </h2>
            <h3 className="font-heading text-2xl font-semibold text-accent text-center mb-6">
              Квартира под контролем
            </h3>
            <p className="text-center text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Если вы сдаёте жильё — могу закрывать мелкие бытовые задачи по абонементу: мусор, поручения, простые работы, приём доставок. По запросу — фото "сделано".
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {['4 выезда в месяц', '8 выездов в месяц', '12 выездов в месяц'].map((pack, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <p className="font-heading text-xl font-semibold text-primary">{pack}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg rounded-xl"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Запрос условий абонемента`, '_blank')}
              >
                Запросить условия
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
              Напишите задачу — скажу цену заранее
            </h2>
            <p className="text-center text-white/80 mb-8">
              Можно просто написать в WhatsApp/Telegram и прислать фото/список
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6"
                onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
                Оценить по фото/списку
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent text-primary"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent text-primary"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Район/адрес</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent text-primary"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Выбор услуги</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent text-primary"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Выберите услугу</option>
                    <option value="Быстро по дому">Быстро по дому</option>
                    <option value="Поручения">Поручения</option>
                    <option value="Муж на час">Муж на час</option>
                    <option value="Бытовая техника">Бытовая техника (лайт)</option>
                    <option value="Человек рядом">Человек рядом</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Описание</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent text-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Удобное время</label>
                  <input
                    type="text"
                    required
                    placeholder="Например: завтра после 15:00"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent text-primary"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-3">
          <Button 
            className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-base rounded-xl"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2" size={18} />
            WhatsApp
          </Button>
          <Button 
            variant="outline"
            className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-6 text-base rounded-xl"
            onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
          >
            <Icon name="Send" className="mr-2" size={18} />
            Telegram
          </Button>
        </div>
      </div>
    </div>
  );
}
