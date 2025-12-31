import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FaqItem from '@/components/FaqItem';

export default function Tehnika() {
  const phoneNumber = '79000000000';
  const whatsappNumber = '79000000000';
  const telegramUsername = 'zabotiks';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    appliance: '',
    description: '',
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
            src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/c82f108d-8d68-4dd0-b119-43bf026251b3.jpg" 
            alt="Ремонт бытовой техники"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ростов-на-Дону • Левенцовка + рядом
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Ремонт бытовой техники
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-3xl mx-auto">
              Диагностика и ремонт крупной бытовой техники на дому.<br/>
              Стоимость заранее по фото. Честная цена.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
              {[
                'Стиральные машины',
                'Холодильники',
                'Духовки',
                'Посудомоечные машины'
              ].map((marker, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-sm border border-primary/10">
                  <span className="text-primary font-medium text-sm md:text-base">{marker}</span>
                </div>
              ))}
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
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Что ремонтирую
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Работы без сложной электроники — всё, что можно починить без платных сертификаций
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Waves" className="text-accent" size={32} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary">
                      Стиральные машины
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Замена шлангов, фильтров, манжет</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Устранение протечек по соединениям</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Чистка помпы и сливной системы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Замена ремня, амортизаторов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Refrigerator" className="text-accent" size={32} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary">
                      Холодильники
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Замена уплотнителя двери</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Регулировка петель и дверцы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Замена лампочек, термостата</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground line-through">Компрессор и фреон — не делаю</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Flame" className="text-accent" size={32} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary">
                      Электродуховки
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Замена уплотнителя дверцы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Регулировка петель и ручек</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Замена лампочек, переключателей</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground line-through">Газовые духовки — не делаю</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Droplets" className="text-accent" size={32} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary">
                      Посудомоечные машины
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Подключение и установка</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Замена шлангов и фильтров</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Устранение протечек</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Чистка распылителей и помпы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Стоимость услуг
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Цена фиксируется до начала работ
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-accent/20 shadow-xl">
                <CardContent className="p-10">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-accent/10 rounded-2xl px-6 py-2 mb-4">
                      <span className="text-accent font-semibold text-sm">Диагностика</span>
                    </div>
                    <div className="font-heading text-5xl font-bold text-primary mb-2">990 ₽</div>
                    <p className="text-muted-foreground">Входит в стоимость при ремонте</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Выезд на дом в удобное время</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Определение неисправности</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Расчёт стоимости ремонта</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 shadow-xl">
                <CardContent className="p-10">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-accent/10 rounded-2xl px-6 py-2 mb-4">
                      <span className="text-accent font-semibold text-sm">Минималка</span>
                    </div>
                    <div className="font-heading text-5xl font-bold text-primary mb-2">2990 ₽</div>
                    <p className="text-muted-foreground">Выезд + первые 60 минут работы</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Простые работы без запчастей</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Далее +350 ₽ каждые 30 минут</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Запчасти оплачиваются отдельно</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
                Как формируется стоимость
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'Camera', title: 'Фото техники', desc: 'Присылаете фото проблемы' },
                  { icon: 'Calculator', title: 'Оценка', desc: 'Называю примерную стоимость' },
                  { icon: 'Lock', title: 'Фиксация', desc: 'Окончательная цена до начала работ' }
                ].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={step.icon} className="text-accent" size={28} />
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
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Что не делаю
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Flame', title: 'Газовое оборудование', desc: 'Требуется сертификация газовых служб' },
                { icon: 'Cpu', title: 'Платы и пайка', desc: 'Сложная электроника с программированием' },
                { icon: 'Snowflake', title: 'Фреон и компрессоры', desc: 'Холодильное оборудование по хладагенту' }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon} className="text-destructive" size={28} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-secondary/30 rounded-2xl p-8 text-center">
              <p className="text-lg text-muted-foreground">
                Если ваша задача не входит в список — напишите, и я порекомендую проверенного специалиста
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
                { num: '1', title: 'Заявка', desc: 'Звонок или сообщение с описанием проблемы' },
                { num: '2', title: 'Фото', desc: 'Присылаете фото техники и неисправности' },
                { num: '3', title: 'Выезд', desc: 'Приезжаю на диагностику в удобное время' },
                { num: '4', title: 'Ремонт', desc: 'Фиксирую цену и делаю работу' }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-accent text-white rounded-2xl flex items-center justify-center font-heading text-3xl font-bold mx-auto mb-6 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
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
                  a: 'Диагностика 990 ₽, входит в стоимость ремонта. Если ремонт делаю — диагностика бесплатно.'
                },
                {
                  q: 'Можете приехать сегодня?',
                  a: 'Да, если есть окно в графике. Обычно могу выехать в течение 1–3 часов.'
                },
                {
                  q: 'Даёте гарантию на ремонт?',
                  a: 'Да, на выполненные работы 30 дней. Если после меня никто не переделывал.'
                },
                {
                  q: 'Что если нужны запчасти?',
                  a: 'Сначала делаю диагностику, называю стоимость с запчастями. Согласовываем — потом везу/заказываю.'
                },
                {
                  q: 'Как оплачивать?',
                  a: 'Наличными или переводом — по факту выполнения работы.'
                },
                {
                  q: 'Работаете в выходные?',
                  a: 'Да, в пределах графика 09:00–21:00, включая выходные.'
                },
                {
                  q: 'Почему не делаете газ и компрессоры?',
                  a: 'Газ требует сертификации служб. Компрессор и фреон — узкая специализация, нужны другие инструменты.'
                },
                {
                  q: 'Можете просто подключить технику?',
                  a: 'Да, подключение без ремонта — входит в минималку 2990 ₽.'
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
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">
              Что говорят о моей работе
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Стиралка текла — поменяли шланг и фильтр. Быстро и по делу.',
                'Дверца холодильника плохо закрывалась. Отрегулировали петли — теперь отлично.',
                'Посудомойку подключили, всё объяснили. Стоимость как договорились.',
                'Духовка: поменяли уплотнитель и лампочку. Работа аккуратная.',
                'Понравилось, что цену сказали заранее. Без накруток на месте.',
                'Приехали быстро, за час всё починили. Рекомендую.'
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
              Оставьте заявку
            </h2>
            <p className="text-center text-white/80 text-lg mb-12">
              Опишите проблему — перезвоню в течение 5–10 минут
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
                  <label className="block text-sm font-semibold text-primary mb-2">Район/адрес</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Тип техники</label>
                  <select
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.appliance}
                    onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                  >
                    <option value="">Выберите технику</option>
                    <option value="Стиральная машина">Стиральная машина</option>
                    <option value="Холодильник">Холодильник</option>
                    <option value="Духовка">Духовка электрическая</option>
                    <option value="Посудомоечная машина">Посудомоечная машина</option>
                    <option value="Другое">Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Описание проблемы</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Опишите, что не работает или какая неисправность"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent text-primary text-base transition-all"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
