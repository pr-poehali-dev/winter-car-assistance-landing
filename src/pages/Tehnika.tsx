import { useState } from 'react';
import TehnikaHero from '@/components/tehnika/TehnikaHero';
import TehnikaServices from '@/components/tehnika/TehnikaServices';
import TehnikaPricing from '@/components/tehnika/TehnikaPricing';
import TehnikaFaqAndForm from '@/components/tehnika/TehnikaFaqAndForm';

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
      <TehnikaHero 
        phoneNumber={phoneNumber} 
        whatsappNumber={whatsappNumber}
        onCall={handleCall}
      />
      <TehnikaServices />
      <TehnikaPricing />
      <TehnikaFaqAndForm
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
