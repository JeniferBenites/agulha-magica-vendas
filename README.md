
# 🧵 Site de Vendas - Curso de Costura

Site de vendas de página única (One Page) para curso de costura, com design feminino, elegante e profissional.

## ✨ Características

- **Design Feminino**: Visual elegante com degradê rosa, lilás e roxo
- **Página Única**: Todo conteúdo em uma só página (apresentação, formulário e confirmação)
- **Contagem Regressiva**: Timer de 3 minutos que reinicia a cada acesso
- **Responsivo**: Funciona perfeitamente em celular, tablet e desktop
- **Elementos Decorativos**: Ícones sutis de costura (tesouras, linhas, agulhas, etc.)

## 🚀 Como Publicar no GitHub Pages

### 1. Fazer Upload do Projeto
```bash
git add .
git commit -m "Site de vendas - curso de costura"
git push origin main
```

### 2. Configurar GitHub Pages
1. Acesse seu repositório no GitHub
2. Vá em **Settings** (Configurações)
3. Role até a seção **Pages**
4. Em **Source**, selecione **GitHub Actions**
5. O deploy será automático através do workflow já configurado

### 3. Acessar o Site
Após alguns minutos, seu site estará disponível em:
```
https://seunome.github.io/nome-do-repositorio/
```

## 🔧 Personalização

### Logo
Substitua o placeholder da logo no arquivo `src/pages/SalesPage.tsx`:
```jsx
{/* INSIRA SUA LOGO AQUI */}
```

### Link do WhatsApp
Adicione o link do grupo no arquivo `src/pages/SalesPage.tsx`:
```jsx
/* INSIRA AQUI O LINK DO GRUPO DO WHATSAPP */
```

### Link de Suporte
Adicione o link de suporte no arquivo `src/pages/SalesPage.tsx`:
```jsx
/* INSIRA AQUI O LINK DE SUPORTE (WhatsApp ou e-mail) */
```

## 📱 Funcionalidades

- ✅ Contagem regressiva de 3 minutos
- ✅ Formulário de captura (nome + e-mail)
- ✅ Seção de confirmação que aparece após envio
- ✅ Botões verdes chamativos
- ✅ Design responsivo
- ✅ Elementos decorativos de costura
- ✅ Senso de urgência

## 🛠️ Tecnologias Utilizadas

- React + TypeScript
- Tailwind CSS
- Vite
- GitHub Actions (para deploy automático)

## 📝 Estrutura do Projeto

```
/
├── src/
│   ├── pages/
│   │   └── SalesPage.tsx    → Página principal de vendas
│   ├── components/          → Componentes reutilizáveis
│   └── App.tsx             → Configuração principal
├── index.html              → Página base
└── README.md               → Este arquivo
```

## 🎨 Cores Utilizadas

- **Fundo**: Degradê rosa → lilás → roxo
- **Botões**: Verde vibrante (#16a34a)
- **Urgência**: Vermelho (#dc2626)
- **Suporte**: Laranja (#ea580c)
- **Texto**: Branco com transparências

---

**Desenvolvido para máxima conversão e experiência do usuário!** 🚀
