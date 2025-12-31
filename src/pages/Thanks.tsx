import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect } from 'react';

export default function Thanks() {
  const whatsappNumber = '79000000000';
  const telegramUsername = 'zabotiks';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" className="text-accent" size={48} />
          </div>
          
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Принято
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Отвечу в ближайшие 5–10 минут в рабочее время
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6"
              onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
            >
              <Icon name="Send" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>

          <Button 
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            onClick={() => window.location.href = '/'}
          >
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
}
