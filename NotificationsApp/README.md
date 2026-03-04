# 🔔 NotificationsApp

🌐🇧🇷 [Versão em Português do README](README.md) ← Você está aqui  
🌐🇺🇸 [English Version of README](README_EN.md)

Aplicativo de demonstração de notificações desenvolvido em **Expo** com **React Native** e **TypeScript**, utilizando a biblioteca **Notifee** para gerenciar notificações em tempo real e agendadas.

## 🔨 Funcionalidades do Projeto

✅ **Notificações em Tempo Real** - Exibir notificações imediatas  
✅ **Notificações Agendadas** - Agendar notificações para horários específicos  
✅ **Notificações Recorrentes** - Agendar notificações que se repetem semanalmente  
✅ **Gerenciamento de Canais** - Criar canais Android com importância configurável  
✅ **Manipulação de Eventos** - Detectar quando usuário interage com notificação  
✅ **Listagem de Notificações** - Visualizar IDs das notificações agendadas  
✅ **Cancelamento de Notificações** - Remover notificações específicas  
✅ **Permissões** - Solicitar e validar permissões do sistema  

## ✔️ Tecnologias Utilizadas

- **Expo ~55.0.4**: Plataforma para desenvolvimento React Native
- **React Native 0.83.2**: Framework mobile multiplataforma
- **TypeScript ~5.9.2**: Tipagem estática para maior segurança
- **Notifee ^9.1.8**: Biblioteca robusta para gerenciar notificações
- **React 19.2.0**: Biblioteca UI
- **Expo Status Bar ~55.0.4**: Barra de status personalizável

## 📁 Estrutura do Projeto

```
NotificationsApp/
├── App.tsx                 # Componente principal
├── index.ts                # Entry point
├── app.json                # Configuração Expo
├── package.json            # Dependências
├── tsconfig.json           # Configuração TypeScript
└── assets/                 # Imagens e ícones
    ├── icon.png
    ├── splash-icon.png
    ├── favicon.png
    ├── android-icon-*.png
    └── android-icon-monochrome.png
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js >= 18
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`

### Passos de Instalação

1. Navegue até a pasta do projeto:
```bash
cd NotificationsApp
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor Expo:
```bash
npm start
```

4. Execute em diferentes plataformas:

**Android:**
```bash
npm run android
```

**iOS:**
```bash
npm run ios
```

**Web:**
```bash
npm run web
```

## 📱 Como Usar a Aplicação

### Enviar Notificação
1. Toque no botão **"Enviar notificação"**
2. A notificação aparecerá imediatamente na barra de notificação

### Agendar Notificação
1. Toque no botão **"Agendar notificaçao"**
2. Uma notificação será agendada para 1 minuto à frente
3. O ID da notificação será exibido no console

### Agendar Notificação Semanal (Recorrente)
1. Toque no botão **"Agendar Semanal"**
2. Uma notificação será agendada para se repetir a cada 7 dias
3. O ID da notificação será exibido no console
4. A notificação aparecerá automaticamente todas as semanas no mesmo horário

### Listar Notificações Agendadas
1. Toque no botão **"Listar notificacoes"**
2. Os IDs das notificações ativas aparecerão no console

### Cancelar Notificação
1. Toque no botão **"Cancelar Notificaçao"**
2. A notificação será removida do sistema

## 🎯 Funcionalidades Detalhadas

### Permissões
O app solicita permissão ao iniciar:
- Verifica se o usuário autorizou notificações
- Define `statusNotification` como `true` se autorizado
- Exibe mensagem se o usuário negou

### Canais Android
As notificações usam um canal chamado `"lembrete"` com:
- Vibração ativada
- Importância: HIGH (interrompe a tela do usuário)

### Eventos de Notificação
- **Foreground**: Detecta interações enquanto app está aberto
- **Background**: Detecta interações enquanto app está minimizado
- **PRESS**: Acionado quando usuário toca na notificação
- **DISMISSED**: Acionado quando usuário descarta a notificação

## 🧪 Testes

Para testar as notificações:

1. Coloque o app em background (pressione home)
2. Envie uma notificação
3. Verifique se aparece na barra de notificação
4. Toque para abrir e confirme a interação

## 📝 Notas Importantes

⚠️ **Permissões Android**: Notificações requerem `android.permission.POST_NOTIFICATIONS`  
⚠️ **iOS**: Requer configuração de certificados push  
⚠️ **Versão Notifee**: A versão instalada é `9.1.8` (compatível com Expo)  

## 📄 Licença

Este projeto é open source e está disponível para uso educacional.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo em React Native com Notifee e Expo.

