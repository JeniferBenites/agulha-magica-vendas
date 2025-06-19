
import React from 'react';
import Logo from '@/components/Logo';
import SubscriptionForm from '@/components/SubscriptionForm';
import SewingElements from '@/components/SewingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-costura relative overflow-hidden">
      {/* Elementos decorativos de costura */}
      <SewingElements />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="text-center pt-8">
          <Logo />
        </div>
        
        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Aprenda a costurar do{' '}
            <span className="text-yellow-300 drop-shadow-lg">ZERO</span>{' '}
            sem enrolação!
          </h1>
          
          {/* Subtítulo */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
            <p className="text-xl md:text-2xl text-white font-semibold">
              +10.000 alunas já se beneficiaram deste curso
            </p>
          </div>
          
          {/* Frase de reforço */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6 mb-8 mx-auto max-w-2xl shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-800 font-bold">
              "Todos os meus segredos e +40 anos de experiência só para você"
            </p>
          </div>
          
          {/* Chamada de urgência */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-white font-bold animate-pulse-soft">
              Não perca esta{' '}
              <span className="text-yellow-300 text-3xl md:text-4xl">ÚNICA</span>{' '}
              oportunidade!
            </p>
          </div>
          
          {/* Formulário de inscrição */}
          <div className="mb-8">
            <SubscriptionForm />
          </div>
        </div>
      </div>
      
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default Index;
