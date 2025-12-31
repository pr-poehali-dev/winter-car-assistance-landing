import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const phone1 = '88632567025';
  const phone2 = '89034067025';
  const whatsappNumber = '79034067025';

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/4ea7de9f-e676-49f5-99cb-04659ebf71da.jpg" 
            alt="Зимняя подготовка автомобиля"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-6 py-2 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Первый выезд от 300 ₽
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Подготовлю вашу машину к выезду во дворе за 5–10 минут
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Снег и наледь со стекол, зеркал, фар и зоны дворников. Воздуходувкой. Я рядом.
            </p>
            
            <p className="text-sm md:text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
              Без скребка по стеклу. Анти-лед на спиртовой основе. Цена до начала работы.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = `tel:${phone1}`}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-white font-medium px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                WhatsApp
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm text-muted-foreground">
              <a href={`tel:${phone1}`} className="hover:text-primary transition-colors">
                8 863 25 670 25
              </a>
              <span className="hidden sm:inline">•</span>
              <a href={`tel:${phone2}`} className="hover:text-primary transition-colors">
                8 903 406 70 25
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-16">
              Как проходит работа
            </h2>
            
            <div className="grid gap-8 md:gap-12">
              {[
                {
                  num: '1',
                  title: 'Сдуваю снег воздуходувкой',
                  desc: 'Без контакта со стеклом, сопло около 60 см'
                },
                {
                  num: '2',
                  title: 'Размягчаю наледь',
                  desc: 'Спиртовым анти-льдом без агрессивной химии'
                },
                {
                  num: '3',
                  title: 'Очищаю зону обзора',
                  desc: 'Зеркала, фары и зону дворников'
                },
                {
                  num: '4',
                  title: 'Стелю коврик у двери',
                  desc: 'Чтобы не месить снег и не занести грязь в салон'
                },
                {
                  num: '5',
                  title: 'Быстрая проверка',
                  desc: 'Перед выездом'
                }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center font-heading text-2xl font-bold shadow-lg">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 text-base">
              Цена всегда до начала. Без навязывания.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Безопасность и доверие
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Как у дилера: бережно и аккуратно
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'Shield',
                  title: 'Нет металлического скребка',
                  desc: 'Только воздуходувка и мягкие материалы'
                },
                {
                  icon: 'Droplet',
                  title: 'Минимум контакта со стеклом',
                  desc: 'Сопло на расстоянии, нет риска царапин'
                },
                {
                  icon: 'Sparkles',
                  title: 'Спиртовой анти-лед',
                  desc: 'Без агрессивной химии и вреда покрытию'
                },
                {
                  icon: 'Car',
                  title: 'Аккуратно в плотной парковке',
                  desc: 'Работаю внимательно, даже когда места мало'
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon name={item.icon} className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Что входит в очистку
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'Maximize', text: 'Лобовое стекло, зона обзора' },
                { icon: 'RectangleHorizontal', text: 'Боковые стекла по необходимости' },
                { icon: 'ScanEye', text: 'Зеркала' },
                { icon: 'Lightbulb', text: 'Фары' },
                { icon: 'Wind', text: 'Зона дворников и кромки' },
                { icon: 'DoorOpen', text: 'Подход к водительской двери' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-secondary/20 rounded-xl hover:bg-secondary/40 transition-colors duration-300">
                  <Icon name={item.icon} className="text-accent flex-shrink-0" size={24} />
                  <span className="text-primary font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-6">
              Что такое выезд?
            </h2>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/8ebc93ad-dd74-4ffc-b324-10907ea83f77.jpg"
                    alt="Работа во дворе"
                    className="w-full md:w-64 h-48 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Я прихожу <span className="font-semibold text-primary">к вашей машине во дворе</span> с оборудованием 
                    и делаю очистку <span className="font-semibold text-primary">на месте</span>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Выезд — это не поездка куда-то, а <span className="font-semibold text-primary">приход к авто рядом с домом</span>. 
                    Работаем в вашем дворе или рядом по району по договоренности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Цены
            </h2>

            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-accent/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Tag" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                      Первый выезд от 300 ₽
                    </h3>
                    <p className="text-muted-foreground">Специальное предложение для новых клиентов</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Banknote" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                      Обычная подготовка 500–900 ₽
                    </h3>
                    <p className="text-muted-foreground">В зависимости от количества снега и наледи</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="AlertCircle" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                      Сложная наледь
                    </h3>
                    <p className="text-muted-foreground">Только после согласования</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-center text-primary font-semibold text-lg">
                  Стоимость называю до начала, без сюрпризов
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Дополнительные зимние товары и помощь
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-base">
              Предложу только если реально нужно, решение за вами
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Щетка для снега',
                'Тент на авто',
                'Кожухи на дворники',
                'Незамерзайка',
                'Средство от наледи',
                'Помощь с запуском',
                'Зарядка аккумулятора',
                'Силикон для уплотнителей',
                'Подставки под колеса'
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="text-primary font-medium">{item}</span>
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
              Отзывы клиентов
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Мария', text: 'Быстро приехал, всё аккуратно очистил. Утром спокойно уехала на работу, без спешки со скребком!' },
                { name: 'Дмитрий', text: 'Не царапает стекло, это главное. Воздуходувка — отличное решение. Цена честная, сразу сказал сколько.' },
                { name: 'Анна', text: 'Коврик под ноги — мелочь, но приятно. Видно что человек думает о деталях. Буду звонить ещё!' },
                { name: 'Сергей', text: 'Парковка у нас плотная, переживал. Справился аккуратно, ничего не задел. Профессионал.' },
                { name: 'Елена', text: 'В первый раз 300 рублей — вообще огонь! Думала дороже будет. Результат отличный.' },
                { name: 'Игорь', text: 'Удобно что во дворе работает. Не надо никуда ехать или самому час махать щёткой. Рекомендую.' },
                { name: 'Ольга', text: 'После ледяного дождя была такая корка на стекле... Справился без царапин, спасибо!' },
                { name: 'Алексей', text: 'Быстро, качественно, по делу. Никакой воды, всё как договорились. Буду обращаться зимой.' }
              ].map((review, idx) => (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>
                    <p className="font-semibold text-primary">— {review.name}</p>
                  </CardContent>
                </Card>
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

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl px-6 shadow-sm border-none">
                <AccordionTrigger className="font-heading text-lg hover:no-underline">
                  Сколько времени занимает?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Обычно 5–10 минут. Если очень много снега или сильная наледь — до 15 минут. Всегда предупреждаю заранее.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl px-6 shadow-sm border-none">
                <AccordionTrigger className="font-heading text-lg hover:no-underline">
                  Что если мокрый снег или сильная наледь?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Мокрый снег удаляю дольше, но тоже справляюсь. При сильной наледи использую больше анти-льда. Цену всегда называю до начала работы, без сюрпризов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl px-6 shadow-sm border-none">
                <AccordionTrigger className="font-heading text-lg hover:no-underline">
                  Можно ли без владельца?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Да, если машина не в салоне. Я работаю снаружи: стёкла, фары, зеркала, дворники. Внутрь не захожу. Главное — договориться о времени и месте.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl px-6 shadow-sm border-none">
                <AccordionTrigger className="font-heading text-lg hover:no-underline">
                  Что именно чистится?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Лобовое стекло (зона обзора), боковые стёкла при необходимости, зеркала, фары, зона дворников и кромки. Плюс подход к водительской двери — стелю коврик.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl px-6 shadow-sm border-none">
                <AccordionTrigger className="font-heading text-lg hover:no-underline">
                  Безопасно ли для стекла?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Абсолютно. Нет металлического скребка, только воздуходувка на расстоянии и анти-лед на спиртовой основе. Минимум контакта, нет риска царапин.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl px-6 shadow-sm border-none">
                <AccordionTrigger className="font-heading text-lg hover:no-underline">
                  Как работаете при плотной парковке?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Аккуратно и внимательно. Знаю как маневрировать с оборудованием, чтобы не задеть соседние машины. Опыт работы в обычных дворах многоэтажек.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <img 
              src="https://cdn.poehali.dev/projects/09ac0ab7-448a-48f1-949a-029446538ea5/files/e91c2271-af84-4fb2-95f0-f09e1e306ff5.jpg"
              alt="Готовая машина"
              className="w-full h-64 object-cover rounded-2xl mb-8 shadow-2xl"
            />
            
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Я рядом. Помогу спокойно выехать.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-medium px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = `tel:${phone1}`}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                WhatsApp
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-white/90">
              <a href={`tel:${phone1}`} className="hover:text-white transition-colors text-lg">
                8 863 25 670 25
              </a>
              <span className="hidden sm:inline">•</span>
              <a href={`tel:${phone2}`} className="hover:text-white transition-colors text-lg">
                8 903 406 70 25
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-3">
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium py-6 text-base rounded-xl"
            onClick={() => window.location.href = `tel:${phone1}`}
          >
            <Icon name="Phone" className="mr-2" size={18} />
            Позвонить
          </Button>
          <Button 
            variant="outline"
            className="flex-1 border-2 border-accent text-accent hover:bg-accent hover:text-white font-medium py-6 text-base rounded-xl"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2" size={18} />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
