import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function MasterServices() {
  return (
    <>
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
    </>
  );
}
