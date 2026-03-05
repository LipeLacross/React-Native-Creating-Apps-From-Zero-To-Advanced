# 🔔 NotificationsApp

🌐🇧🇷 [Versão em Português do README](README.md) ← Você está aqui  
🌐🇺🇸 [English Version of README](README_EN.md)

Aplicativo de demonstração de notificações com **Expo**, **React Native** e **TypeScript**, usando **expo-notifications** para envio imediato e agendamento local.

## 🔨 Funcionalidades

- Notificação imediata
- Notificação agendada (1 minuto)
- Notificação recorrente semanal
- Listener de recebimento em foreground
- Listener de resposta ao toque na notificação
- Listagem de IDs agendados (estado local)
- Cancelamento da última notificação agendada

## ✔️ Tecnologias

- Expo `~55.0.4`
- React Native `0.83.2`
- React `19.2.0`
- TypeScript `~5.9.2`
- expo-notifications `~55.0.10`
- expo-constants `~55.0.7`

## 📁 Estrutura

```text
NotificationsApp/
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── tsconfig.json
└── android/ (gerado via prebuild)
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+
- Android Studio (emulador) ou dispositivo Android

### Rodar local com build nativa (recomendado)

```bash
cd NotificationsApp
npm install
npx expo prebuild --platform android
npx expo run:android
```

### Rodar somente bundler

```bash
cd NotificationsApp
npm start
```

## 📱 Como usar

- **ENVIAR NOTIFICAÇÃO**: envia imediatamente (`trigger: null`)
- **AGENDAR NOTIFICAÇÃO**: agenda para 60 segundos
- **AGENDAR SEMANAL**: agenda recorrência a cada 7 dias
- **LISTAR NOTIFICAÇÕES**: mostra IDs mantidos no estado local
- **CANCELAR NOTIFICAÇÃO**: cancela a última notificação da lista local

## 🎯 Detalhes técnicos

### Permissões

Ao iniciar, o app chama `requestPermissionsAsync` e valida autorização com base em:
- `ios.status` (`AUTHORIZED` ou `PROVISIONAL`)
- presença de `android` no retorno

### Handler de foreground

O app configura:
- `shouldShowBanner: true`
- `shouldShowList: true`
- `shouldPlaySound: true`
- `shouldSetBadge: true`

### Triggers de agendamento (API atual)

```ts
trigger: {
  type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
  seconds: 60,
}
```

```ts
trigger: {
  type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
  seconds: 7 * 24 * 60 * 60,
  repeats: true,
}
```

## 🧪 Teste rápido

1. Abra o app
2. Toque em **ENVIAR NOTIFICAÇÃO**
3. Verifique o log de recebimento em foreground
4. Agende uma notificação e valide o ID no console
5. Cancele e confirme remoção da lista local

## 📝 Observações

- A lista exibida no botão **LISTAR NOTIFICAÇÕES** vem do estado local (`notificationIds`).
- Após reload do app, essa lista local zera.
- Dependendo da versão do Android, permissões e comportamento visual podem variar.

## 📄 Licença

Uso educacional.
