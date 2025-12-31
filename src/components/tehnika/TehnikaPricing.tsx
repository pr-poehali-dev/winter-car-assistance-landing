import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function TehnikaPricing() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
              Стоимость услуг
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Называю цену заранее по фото техники. Стоимость не меняется после начала работ.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Search" className="text-accent" size={36} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Диагностика
                  </h3>
                  <div className="text-5xl font-bold text-accent mb-4">490 ₽</div>
                  <p className="text-muted-foreground">
                    Выезд + осмотр техники на дому. Если ремонтирую — бесплатно.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Популярно
                </div>
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Wrench" className="text-accent" size={36} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Простой ремонт
                  </h3>
                  <div className="text-5xl font-bold text-accent mb-4">1490 ₽</div>
                  <p className="text-muted-foreground">
                    Замена шлангов, чистка фильтров, уплотнители — до 1 часа работы.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Cog" className="text-accent" size={36} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Сложный ремонт
                  </h3>
                  <div className="text-5xl font-bold text-accent mb-4">от 2490 ₽</div>
                  <p className="text-muted-foreground">
                    Замена помпы, ремней, амортизаторов. Цену называю после осмотра.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-accent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-primary mb-2">
                    Как формируется цена
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="CircleCheck" className="text-accent flex-shrink-0" size={18} />
                      <span>Фото техники → точная оценка по WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CircleCheck" className="text-accent flex-shrink-0" size={18} />
                      <span>Стоимость деталей + работа сообщается заранее</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CircleCheck" className="text-accent flex-shrink-0" size={18} />
                      <span>Никаких скрытых доплат после начала работ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Как проходит работа
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center font-heading text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                    Вы присылаете фото техники
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Отправляете фото и описание проблемы в WhatsApp. Я оцениваю работу сразу и говорю точную стоимость.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center font-heading text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                    Приезжаю на диагностику
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Выезжаю в течение 1–3 часов. Осматриваю технику, подтверждаю диагноз и стоимость.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center font-heading text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                    Выполняю ремонт на месте
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Если детали есть — делаю сразу. Если нужно заказать — приезжаю повторно после доставки.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center font-heading text-2xl font-bold shadow-lg">
                  4
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                    Проверяю работу и убираю за собой
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    После ремонта тестирую технику, проверяю все функции. Убираю рабочее место и отвечаю на вопросы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
