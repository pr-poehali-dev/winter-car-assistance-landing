import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import FaqItem from '@/components/FaqItem';

interface FormData {
  name: string;
  phone: string;
  address: string;
  task: string;
  time: string;
}

interface MasterFaqAndFormProps {
  phoneNumber: string;
  whatsappNumber: string;
  telegramUsername: string;
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function MasterFaqAndForm({
  phoneNumber,
  whatsappNumber,
  telegramUsername,
  formData,
  setFormData,
  onSubmit,
}: MasterFaqAndFormProps) {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-primary/5 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Частые вопросы
            </h2>
            
            <div className="space-y-4">
              <FaqItem
                question="Вы работаете с газовым оборудованием?"
                answer="Нет, газовые работы требуют лицензии. Делаю только электрику и монтаж без газа."
              />
              <FaqItem
                question="Есть ли гарантия на работы?"
                answer="Да, на все монтажные работы даю гарантию 30 дней при условии, что никто не переделывал после меня."
              />
              <FaqItem
                question="Сколько стоит выезд без работы?"
                answer="Если приехал, а работу делать нельзя (например, стена не выдержит) — беру только за выезд: 490 ₽."
              />
              <FaqItem
                question="Если задача займёт больше часа?"
                answer="Называю примерное время заранее. Если выходит дольше — доплата +350 ₽ за каждые полчаса сверх первого часа."
              />
              <FaqItem
                question="Вы привозите материалы?"
                answer="Мелкие расходники (саморезы, дюбели) включены в стоимость. Крупные детали (кронштейн, смеситель) покупаете вы заранее или по договорённости."
              />
              <FaqItem
                question="Работаете в выходные?"
                answer="Да, работаю без выходных. Выезжаю в течение 1–3 часов после заявки."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary"></div>
              <CardContent className="p-10 md:p-14">
                <div className="text-center mb-10">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                    Оставьте заявку
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Опишите задачу — отвечу в течение 5–10 минут
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Ваше имя
                    </label>
                    <Input
                      type="text"
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (900) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Адрес
                    </label>
                    <Input
                      type="text"
                      placeholder="Город, улица, дом"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Что нужно сделать
                    </label>
                    <Input
                      type="text"
                      placeholder="Например: повесить карниз 2 метра"
                      value={formData.task}
                      onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Удобное время
                    </label>
                    <Textarea
                      placeholder="Когда вам удобно? (день, время)"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                      rows={3}
                      className="text-base resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Или свяжитесь со мной напрямую
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-14 border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                      onClick={() => window.location.href = `tel:${phoneNumber}`}
                    >
                      <Icon name="Phone" className="mr-2" size={18} />
                      Позвонить
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-14 border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                    >
                      <Icon name="MessageCircle" className="mr-2" size={18} />
                      WhatsApp
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-14 border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                      onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
                    >
                      <Icon name="Send" className="mr-2" size={18} />
                      Telegram
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Муж на час в Ростове-на-Дону
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 hover:text-accent transition-colors text-lg"
              >
                <Icon name="Phone" size={20} />
                <span>+7 (900) 000-00-00</span>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors text-lg"
              >
                <Icon name="MessageCircle" size={20} />
                <span>WhatsApp</span>
              </a>
              <a 
                href={`https://t.me/${telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors text-lg"
              >
                <Icon name="Send" size={20} />
                <span>Telegram</span>
              </a>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-white/80">
                Работаю без выходных • Левенцовка и ближайшие районы
              </p>
              <p className="text-white/60 text-sm mt-2">
                © 2024 Муж на час — мелкий ремонт и монтаж
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-lg">
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold py-6 rounded-xl"
            onClick={() => window.location.href = `tel:${phoneNumber}`}
          >
            <Icon name="Phone" className="mr-2" size={20} />
            Позвонить
          </Button>
          <Button 
            variant="outline"
            className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white py-6 rounded-xl"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}
