
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SalesPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutos em segundos
  const [timeExpired, setTimeExpired] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Contagem regressiva
  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Formatação do tempo
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && !timeExpired) {
      setShowConfirmation(true);
    }
  };

  const resetTimer = () => {
    setTimeLeft(180);
    setTimeExpired(false);
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 relative overflow-hidden">
      {/* Elementos decorativos de costura */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">✂️</div>
        <div className="absolute top-40 right-20 text-4xl">🧵</div>
        <div className="absolute bottom-40 left-20 text-5xl">📐</div>
        <div className="absolute top-60 left-1/2 text-3xl">🪡</div>
        <div className="absolute bottom-20 right-10 text-4xl">👗</div>
        <div className="absolute top-32 right-1/3 text-3xl">🧷</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Seção 1 - Cabeçalho */}
        <header className="text-center mb-12">
          <div className="mb-4">
            {/* INSIRA SUA LOGO AQUI */}
            <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
              <span className="text-4xl">✨</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white/90 font-serif">
            Segredos de Cassia Medeiros
          </h2>
        </header>

        {/* Seção 2 - Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Aprenda a costurar do{' '}
            <span className="text-yellow-300">ZERO</span>{' '}
            sem enrolação!
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            +10.000 alunas já se beneficiaram deste curso
          </p>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/30">
            <p className="text-lg font-semibold text-white">
              Todos os meus segredos e +40 anos de experiência só para você
            </p>
          </div>

          <p className="text-2xl font-bold text-yellow-300 mb-6">
            Não perca esta ÚNICA oportunidade!
          </p>

          {/* Contagem Regressiva */}
          <div className="bg-red-600 text-white p-6 rounded-2xl inline-block shadow-2xl mb-8">
            <p className="text-sm uppercase tracking-wide mb-2">
              ATENÇÃO: Essa oportunidade se encerra em:
            </p>
            {timeExpired ? (
              <div>
                <p className="text-2xl font-bold mb-4">
                  O TEMPO ACABOU!
                </p>
                <p className="text-sm mb-4">
                  A oportunidade foi encerrada. Atualize a página para tentar novamente.
                </p>
                <Button 
                  onClick={resetTimer}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                >
                  TENTAR NOVAMENTE
                </Button>
              </div>
            ) : (
              <p className="text-4xl font-mono font-bold">
                {formatTime(timeLeft)}
              </p>
            )}
          </div>
        </section>

        {/* Seção 3 - Formulário */}
        {!showConfirmation && !timeExpired && (
          <section className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-semibold">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-2 bg-white/80 border-white/30"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white font-semibold">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-2 bg-white/80 border-white/30"
                    placeholder="Digite seu melhor e-mail"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  🎯 QUERO APRENDER AGORA
                </Button>

                <p className="text-center text-white/80 text-sm">
                  As informações serão enviadas diretamente no seu e-mail.
                </p>
              </div>
            </form>
          </section>
        )}

        {/* Seção 4 - Confirmação */}
        {showConfirmation && (
          <section className="max-w-md mx-auto text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <h3 className="text-3xl font-bold text-white mb-6">
                FALTA UM PASSO!
              </h3>
              
              <p className="text-white mb-8 leading-relaxed">
                Entre no grupo oficial do WhatsApp para receber os materiais, 
                tirar dúvidas e garantir seu certificado de participação.
              </p>

              <a 
                href="#" 
                /* INSIRA AQUI O LINK DO GRUPO DO WHATSAPP */
                className="inline-block w-full"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 rounded-xl shadow-2xl mb-4">
                  📱 ENTRAR NO GRUPO DO WHATSAPP
                </Button>
              </a>

              <p className="text-white/80 text-sm mb-6">
                Fique atenta ao seu e-mail, acabamos de enviar uma mensagem para você com mais informações.
              </p>

              <a 
                href="#" 
                /* INSIRA AQUI O LINK DE SUPORTE (WhatsApp ou e-mail) */
                className="inline-block"
              >
                <Button 
                  variant="outline" 
                  className="bg-orange-500 hover:bg-orange-600 text-white border-orange-400"
                >
                  ❓ NÃO CONSIGO ENTRAR NO GRUPO
                </Button>
              </a>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SalesPage;
