
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const SubscriptionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e e-mail.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes('@')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      console.log('Dados enviados:', { name, email });
      toast({
        title: "Inscrição realizada!",
        description: "Redirecionando para o próximo passo...",
      });
      
      // Redirecionar para página de confirmação
      navigate('/confirmacao');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 text-lg border-2 border-gray-200 focus:border-costura-purple rounded-xl"
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-lg border-2 border-gray-200 focus:border-costura-purple rounded-xl"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 text-lg font-bold bg-gradient-to-r from-costura-purple to-costura-rose hover:from-costura-rose hover:to-costura-purple text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50"
        >
          {isLoading ? 'ENVIANDO...' : 'QUERO APRENDER AGORA'}
        </Button>
        
        <p className="text-center text-sm text-gray-600 mt-4">
          As informações serão enviadas diretamente no seu e-mail.
        </p>
      </form>
    </div>
  );
};

export default SubscriptionForm;
