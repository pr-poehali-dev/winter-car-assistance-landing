import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function TehnikaServices() {
  return (
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
                    Духовки и плиты
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Замена резинок и уплотнителей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Регулировка дверцы духовки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Замена стекла дверцы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground line-through">Газовое оборудование — не делаю</span>
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
                    Посудомойки
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Чистка форсунок и фильтров</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Замена уплотнителей дверцы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Устранение протечек</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Замена шлангов подачи воды</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
