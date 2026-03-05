## 📱 React Native - Guia Completo do Zero ao Avançado

Este projeto foi desenvolvido baseado no curso de React Native do Professor Matheus Fraga, focado na criação de apps nativos para Android e iOS. Utiliza tecnologias como JavaScript, React Native e Flexbox. O objetivo é criar aplicativos mobile de alta performance com aparência nativa e publicá-los nas lojas de aplicativos.

---

## 🔧 Guias de Instalação

### Links Úteis:
- [Ambiente Linux](https://sujeitoprogramador.com/ambiente-linux/)
- [Ambiente Linux (alternativo)](https://sujeitoprogramador.com/ambiente-linux/)
- [React Native no macOS](https://sujeitoprogramador.com/react-native-macos/)
- [Documentação Oficial React Native](https://reactnative.dev/docs/environment-setup)
- [Documentação Expo](https://docs.expo.dev/)

### Instalação no Windows (com Chocolatey):
```bash
choco install -y nodejs-lts microsoft-openjdk17
```

**⚠️ Atenção na variável ambiente openjdk17:**
Caso não encontre a pasta onde está instalada, ela também pode estar em:
```
C:\Program Files\microsoft\ (Aqui deve estar a pasta do openjdk17)
```

### Configuração do ANDROID_HOME:
```
C:\Users\felip\AppData\Local\Android\Sdk
```

---

## 🚀 Comandos React Native

### Criar Novo Projeto:

```bash
# Comando padrão
npx @react-native-community/cli@latest init nomeapp

# Com template específico
npx react-native init NomeDoProjeto --template <nome-do-template>

# Exemplo com TypeScript
npx react-native init MeuApp --template react-native-template-typescript
```

### Executar o Projeto:

**Android:**
```bash
# Após acessar a pasta do projeto
npx react-native run-android

# Com log detalhado
npx react-native run-android --verbose > build-log.txt
```

**iOS (Mac):**
```bash
npx react-native run-ios
```

*💡 Lembre-se: Antes de rodar o comando, o emulador precisa estar aberto!*


No diretório do projeto Expo:

bash
npx expo doctor
Se usar a expo-cli antiga e receber mensagem de incompatibilidade, tente:
npx expo install --fix
bash
expo-cli doctor --fix-dependencies
Se npx expo doctor não resolver, instale/execute o pacote:

bash
npx expo-doctor --help
Para React Native puro:

bash
npx react-native doctor
npx react-native doctor --fix

## ⚡ Projetos com Expo

### Criar App com Expo:
```bash
# Criar novo projeto
npx create-expo-app nomeapp

# Listar templates disponíveis
npx create-expo-app nomeapp -t
```

Na lista de templates, selecione a opção desejada:
- Default - includes tools recommended for most app developers
- **Blank** (recomendado)
- Blank (TypeScript)
- Navigation (TypeScript)
- Blank (Bare)

### Executar App Expo:
```bash
# Iniciar o projeto
npx expo start

#pastas nativas
npx expo prebuild

npx expo prebuild --platform android
npx expo prebuild --platform ios
npx expo prebuild --platform web
npx expo prebuild --platform all


#
npx expo prebuild:ios
npx expo prebuild:android
npx expo prebuild:web
npx expo prebuild:all

npx expo run:android
npx expo run:ios


# Ou via npm
npm run android
```

---

## 📱 npm run android vs npm run start

### 1. **`npm run android`** 🏃‍♂️
```bash
npm run android
```
**O que faz:**
- Compila o app **E** instala no dispositivo/emulador **E** abre
- É um atalho para `react-native run-android`
- Já faz tudo de uma vez: compila + instala + abre

**Quando usar:**
- Quando você quer testar o app no celular agora
- Quando fez mudanças e quer ver funcionando

### 2. **`npm run start`** 🚀
```bash
npm run start
```
**O que faz:**
- Inicia o Metro Bundler (servidor que empacota o JavaScript)
- Mostra um QR Code no terminal
- Fica esperando o app conectar nele

**Quando usar:**
- Quando você já tem o app instalado no celular e quer desenvolver com recarregamento rápido
- Você roda isso **uma vez** e deixa rodando enquanto desenvolve

---
enhuma	npm tenta resolver peerDependencies estritamente	Preferível; força correção de versões
--legacy-peer-deps	Ignora conflitos de peerDependencies (comportamento antigo)	Quando você precisa instalar rápido e não consegue resolver versões; use temporariamente.
--force	Força instalação mesmo com conflitos e possíveis quebras	Último recurso; pode instalar versões incompatíveis.
npm update
## 🛠️ Comandos Gradle (Build Android)

```bash
# Só compila (mais rápido para verificar erros)
.\gradlew.bat assembleDebug

# Compila e instala (mas não abre)
.\gradlew.bat installDebug

# Compila, instala e abre (igual ao run-android)
react-native run-android

# Limpa builds anteriores (útil se tiver problemas de cache)
.\gradlew.bat clean
📊 Comparação:
Comando	Usa daemon?	Processo fica rodando?	Próximo build
.\gradlew.bat clean	✅ Sim	✅ Sim (fica na memória)	Mais rápido
.\gradlew.bat clean --no-daemon	❌ Não	❌ Não (morre ao terminar)	Mais lento

---

## 📁 Onde Mexer Mais? (Arquivos Importantes)

| Arquivo | Frequência | Casos Comuns |
|---------|------------|--------------|
| **app/build.gradle** | 🔥 Alta | Versões, dependências, signing |
| **gradle.properties** | 🟡 Média | Performance, features flags |
| **build.gradle** | 🟢 Baixa | Atualizar SDK, Kotlin |
| **settings.gradle** | ⚪ Rara | Problemas de linking |

---

## 📱 Dicas de Emulador

Se você quer o emulador mais leve, escolha um perfil com **resolução menor e densidade (dpi) menor** — por exemplo **Small Phone** ou um perfil genérico de **720×1280**.

---

## 🎨 Ícones e Navegação

### React Native Vector Icons:
- [Repositório GitHub](https://github.com/oblador/react-native-vector-icons)
- [Biblioteca de Ícones](https://oblador.github.io/react-native-vector-icons/)

### React Navigation:
- [Documentação Oficial](https://reactnavigation.org/docs/getting-started/)

---

## ✅ Resumo do Fluxo de Trabalho

1. **Instalar ambiente** (Node.js, JDK, Android Studio)
2. **Criar projeto** (`npx react-native init MeuApp`)
3. **Abrir emulador** (Android Studio)
4. **Executar app** (`npm run android` ou `npx react-native run-android`)
5. **Desenvolver** com recarregamento rápido
6. **Gerar APK** (`.\gradlew.bat assembleDebug`)

