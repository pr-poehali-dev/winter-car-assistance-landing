import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MasterHeroProps {
  phoneNumber: string;
  whatsappNumber: string;
  onCall: () => void;
}

export default function MasterHero({ phoneNumber, whatsappNumber, onCall }: MasterHeroProps) {
  return (
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
              onClick={onCall}
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
  );
}
