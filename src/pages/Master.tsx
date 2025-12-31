import { useState } from 'react';
import MasterHero from '@/components/master/MasterHero';
import MasterServices from '@/components/master/MasterServices';
import MasterPricing from '@/components/master/MasterPricing';
import MasterFaqAndForm from '@/components/master/MasterFaqAndForm';

export default function Master() {
  const phoneNumber = '79000000000';
  const whatsappNumber = '79000000000';
  const telegramUsername = 'zabotiks';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    task: '',
    time: '',
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
      <MasterHero 
        phoneNumber={phoneNumber}
        whatsappNumber={whatsappNumber}
        onCall={handleCall}
      />
      <MasterServices />
      <MasterPricing />
      <MasterFaqAndForm
        phoneNumber={phoneNumber}
        whatsappNumber={whatsappNumber}
        telegramUsername={telegramUsername}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
