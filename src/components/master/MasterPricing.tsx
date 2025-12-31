export default function MasterPricing() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6">
            Примеры работ и цены
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Реальные задачи с ценами
          </p>

          <div className="space-y-4">
            {[
              { task: 'Повесить карниз 2 метра', price: '2490 ₽', time: '45 минут' },
              { task: 'Повесить ТВ на кронштейн', price: '2490 ₽', time: '40 минут' },
              { task: 'Собрать комод ИКЕА (3 ящика)', price: '2490 ₽', time: '50 минут' },
              { task: 'Повесить 4 полки ИКЕА', price: '2840 ₽', time: '75 минут' },
              { task: 'Заменить смеситель на кухне', price: '2490 ₽', time: '35 минут' },
              { task: 'Повесить люстру + бра в спальне', price: '2840 ₽', time: '70 минут' },
              { task: 'Отрегулировать 3 двери (петли, ручки)', price: '2840 ₽', time: '80 минут' },
              { task: 'Собрать письменный стол (большой)', price: '3190 ₽', time: '100 минут' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-primary/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-primary text-lg mb-1">{item.task}</h3>
                    <p className="text-sm text-muted-foreground">Ориентировочно: {item.time}</p>
                  </div>
                  <div className="text-2xl font-bold text-accent">{item.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/5 border-l-4 border-accent rounded-lg p-6">
            <p className="text-muted-foreground">
              <strong className="text-primary">Важно:</strong> Это примерные цены. Итоговая стоимость зависит от сложности задачи. 
              Пришлите фото — назову точную цену до выезда.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
