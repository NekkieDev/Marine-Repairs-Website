// Arquivo de exemplo das configurações do EmailJS
// COPIE este arquivo para 'config.js' e substitua os valores pelos seus dados reais

const CONFIG = {
  emailjs: {
    publicKey: "SUA_PUBLIC_KEY_AQUI",
    serviceId: "SEU_SERVICE_ID_AQUI", 
    templateId: "SEU_TEMPLATE_ID_AQUI"
  },
  
  // Email para onde as mensagens serão enviadas
  contact: {
    email: "seu-email@exemplo.com"
  }
};

// Exportar configurações
window.CONFIG = CONFIG;
