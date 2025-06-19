
import React from 'react';
import { Button } from '@/components/ui/button';

const Confirmation = () => {
  const handleWhatsAppClick = () => {
    // Aqui você pode colocar o link real do WhatsApp
    window.open('https://chat.whatsapp.com/EGGnozfoYJB0B2BV0hozKz?text=Olá! Quero participar do curso de costura!', '_blank');
  };

  const handleSupportClick = () => {
    // Link para atendimento
    window.open('https://wa.me/5566981121004?text=Preciso de ajuda para entrar noooo grupo!', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-soft relative">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 uppercase">
            Falta um passo!
          </h1>
          
          {/* Card principal */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            {/* Ícone de sucesso */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-600"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Texto explicativo */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Entre no grupo oficial do WhatsApp para receber os materiais, 
              tirar dúvidas e garantir seu certificado de participação.
            </p>
            
            {/* Botão do WhatsApp */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full h-16 text-xl font-bold bg-whatsapp-green hover:bg-green-600 text-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 mb-6"
            >
              📱 ENTRAR NO GRUPO DO WHATSAPP
            </Button>
            
            {/* Texto menor */}
            <p className="text-sm text-gray-600 mb-6">
              Fique atenta ao seu e-mail, acabamos de enviar uma mensagem para você com mais informações.
            </p>
            
            {/* Botão de suporte */}
            <Button
              onClick={handleSupportClick}
              variant="outline"
              className="w-full h-12 text-lg font-semibold border-2 border-warning-orange text-warning-orange hover:bg-warning-orange hover:text-white rounded-xl transition-all duration-300"
            >
              NÃO CONSIGO ENTRAR NO GRUPO
            </Button>
          </div>
          
          {/* Elementos decorativos sutis */}
          <div className="flex justify-center space-x-4 opacity-30">
            <div className="w-3 h-3 bg-costura-lilac rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-costura-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-costura-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
