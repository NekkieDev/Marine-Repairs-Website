# Marine-Repairs-Website

Website profissional para empresa de reparos marítimos com formulário de contato integrado ao EmailJS.

## 🚀 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Menu de navegação com submenus
- ✅ Slider de imagens automático
- ✅ Modal de contato elegante
- ✅ Validação de formulários
- ✅ Máscara automática para telefone
- ✅ Notificações toast personalizadas
- ✅ Integração com EmailJS
- ✅ Envio de emails em tempo real

## 📋 Pré-requisitos

- Conta no [EmailJS](https://emailjs.com)
- Navegador moderno com suporte a ES6

## ⚙️ Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/NekkieDev/Marine-Repairs-Website.git
cd Marine-Repairs-Website
```

### 2. Configure o EmailJS
1. Crie uma conta em [emailjs.com](https://emailjs.com)
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Anote suas credenciais:
   - Public Key
   - Service ID
   - Template ID

### 3. Configure o arquivo de configuração
```bash
# Copie o arquivo de exemplo
cp src/config.example.js src/config.js

# Edite o arquivo com suas credenciais reais
```

No arquivo `src/config.js`, substitua os valores:
```javascript
const CONFIG = {
  emailjs: {
    publicKey: "SUA_PUBLIC_KEY_AQUI",
    serviceId: "SEU_SERVICE_ID_AQUI", 
    templateId: "SEU_TEMPLATE_ID_AQUI"
  },
  contact: {
    email: "seu-email@exemplo.com"
  }
};
```

### 4. Abra o site
Abra o arquivo `src/main.html` no navegador ou configure um servidor local.

## 🎨 Personalização

### Cores
As cores principais estão definidas no CSS:
- Azul primário: `#00008B`
- Azul secundário: `#4169E1`

### Template de Email
Configure seu template EmailJS com estas variáveis:
- `{{from_name}}` - Nome do cliente
- `{{from_email}}` - Email do cliente
- `{{phone}}` - Telefone do cliente
- `{{date}}` - Data do envio
- `{{time}}` - Hora do envio

## 📁 Estrutura do Projeto

```
Marine-Repairs-Website/
├── src/
│   ├── main.html          # Página principal
│   ├── style.css          # Estilos CSS
│   ├── config.js          # Configurações (não commitado)
│   └── config.example.js  # Exemplo de configuração
├── .gitignore
└── README.md
```

## 🔒 Segurança

- O arquivo `config.js` está no `.gitignore` para proteger suas credenciais
- Use o arquivo `config.example.js` como base
- Em produção, considere usar variáveis de ambiente

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Se precisar de ajuda, entre em contato através do formulário do site ou abra uma issue no GitHub.