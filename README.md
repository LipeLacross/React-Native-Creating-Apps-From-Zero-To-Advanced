## 📱 React Native - Guia Completo do Zero ao Avançado

Este guia foi desenvolvido baseado no curso de React Native do Professor Matheus Fraga, focado na criação de apps nativos para Android e iOS utilizando JavaScript, React Native e Flexbox. O objetivo é criar aplicativos mobile de alta performance com aparência nativa e publicá-los nas lojas de aplicativos.

---

## 🔧 Configuração Inicial do Ambiente

### Pré-requisitos

Antes de começar, você precisará instalar:

- **Node.js** (versão LTS)
- **JDK 17** (Java Development Kit)
- **Android Studio** com SDK configurado
- **Chocolatey** (gerenciador de pacotes para Windows - opcional)

### Instalação no Windows (com Chocolatey)

```bash
choco install -y nodejs-lts microsoft-openjdk17
```

**⚠️ Importante:** Após instalar o JDK, verifique se o caminho está configurado corretamente:
```
C:\Program Files\microsoft\ (pasta do openjdk17)
```

### Configuração do Android SDK

A variável de ambiente `ANDROID_HOME` deve apontar para:
```
C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk
```

### Links Úteis para Configuração

- [Ambiente Linux](https://sujeitoprogramador.com/ambiente-linux/)
- [React Native no macOS](https://sujeitoprogramador.com/react-native-macos/)
- [Documentação Oficial React Native](https://reactnative.dev/docs/environment-setup)
- [Documentação Expo](https://docs.expo.dev/)

---

## 🚀 Criando e Executando Projetos

### React Native CLI (Projeto Puro)

A partir da versão 0.71, o React Native já cria projetos com TypeScript configurado automaticamente.

```bash
# Criar novo projeto
npx @react-native-community/cli@latest init MeuApp

# Executar no Android (com emulador aberto)
npx react-native run-android

# Executar com log detalhado
npx react-native run-android --verbose > build-log.txt

# Executar no iOS (apenas Mac)
npx react-native run-ios
```

### Expo (Alternativa para desenvolvimento rápido)

```bash
# Criar novo projeto
npx create-expo-app MeuApp

# Listar templates disponíveis
npx create-expo-app MeuApp -t

# Iniciar o projeto
npx expo start

# Iniciar limpando cache
npx expo start -c

# Gerar pastas nativas (para projetos que precisam de código nativo)
npx expo prebuild
npx expo run:android
```

### Diferença entre npm run android e npm run start

| Comando | O que faz | Quando usar |
|---------|-----------|-------------|
| **`npm run android`** | Compila, instala e abre o app | Quando quer testar o app agora |
| **`npm run start`** | Inicia o Metro Bundler (servidor JS) | Durante o desenvolvimento (deixa rodando) |

---

## 🛠️ Gerenciamento de Dependências

### Comandos npm para resolver conflitos

| Comando | O que faz | Quando usar |
|---------|-----------|-------------|
| `npm install` | Instala dependências respeitando peerDependencies | Padrão recomendado |
| `npm install --legacy-peer-deps` | Ignora conflitos de peerDependencies | Para instalações rápidas com conflitos |
| `npm install --force` | Força instalação ignorando conflitos | Último recurso |
| `npm update` | Atualiza pacotes dentro das versões permitidas | Para manter dependências atualizadas |

### Diagnóstico do Projeto

```bash
# Verificar problemas no projeto Expo
npx expo doctor

# Corrigir dependências automaticamente
npx expo install --fix

# Verificar problemas no React Native CLI
npx react-native doctor
npx react-native doctor --fix
```

---

## 📱 Comandos Gradle (Build Android)

### Principais Comandos

```bash
# Navegar até a pasta android
cd android

# Limpar builds anteriores (mais usado)
./gradlew clean

# Limpar tudo (builds, caches, arquivos temporários)
./gradlew cleanBuildCache

# Apenas compilar (mais rápido para verificar erros)
./gradlew assembleDebug

# Compilar e instalar (mas não abre)
./gradlew installDebug

# Compilar para release
./gradlew assembleRelease

# Gerar bundle para Play Store
./gradlew bundleRelease
```

### Otimização do Gradle

| Comando | Usa daemon? | Processo fica rodando? | Próximo build |
|---------|-------------|------------------------|---------------|
| `./gradlew assembleDebug` | ✅ Sim | ✅ Sim (fica na memória) | Mais rápido |
| `./gradlew assembleDebug --no-daemon` | ❌ Não | ❌ Não | Mais lento |

### Limpeza de Cache

| Caminho | O que é | Pode apagar? |
|---------|---------|--------------|
| `C:\Users\SEU_USUARIO\.gradle` | Cache global do Gradle | ✅ SIM (recria automaticamente) |
| `C:\Users\SEU_USUARIO\.android\cache` | Cache do Android | ✅ SIM |

---

## 📁 Arquivos Importantes do Projeto

### Estrutura de Configuração

| Arquivo | Frequência | Casos Comuns |
|---------|:----------:|--------------|
| **`android/app/build.gradle`** | 🔥 Alta | Versões, dependências, configuração de assinatura |
| **`android/gradle.properties`** | 🟡 Média | Performance, flags de features |
| **`android/build.gradle`** | 🟢 Baixa | Atualizar SDK, versão do Kotlin |
| **`android/settings.gradle`** | ⚪ Rara | Problemas de linking de módulos |

---

## 🎨 Ícones e Navegação

### React Native Vector Icons

- [Repositório GitHub](https://github.com/oblador/react-native-vector-icons)
- [Biblioteca de Ícones](https://oblador.github.io/react-native-vector-icons/)

### React Navigation

- [Documentação Oficial](https://reactnavigation.org/docs/getting-started/)

---

## 📱 Dicas para Emulador

### Escolhendo o Perfil Ideal

Para um emulador mais leve, escolha um perfil com:
- **Resolução menor** (ex: 720×1280)
- **Densidade de pixels (dpi) menor**
- Perfil **Small Phone** (recomendado)

---

## ✅ Resumo do Fluxo de Trabalho

1. **Configurar ambiente** (Node.js, JDK 17, Android Studio)
2. **Criar projeto** (`npx react-native init MeuApp`)
3. **Abrir emulador** pelo Android Studio
4. **Executar app** (`npm run android` ou `npx react-native run-android`)
5. **Desenvolver** com recarregamento rápido (mantenha `npm start` rodando)
6. **Gerar APK** para teste (`./gradlew assembleDebug`)
7. **Gerar bundle** para publicação (`./gradlew bundleRelease`)

---

## 🔍 Solução de Problemas Comuns

### Problema: Emulador não detectado
**Solução:** Verifique se o ANDROID_HOME está configurado corretamente e se o emulador está aberto antes de rodar `run-android`.

### Problema: Erro de versão do Java
**Solução:** Certifique-se de que o JDK 17 está instalado e configurado no PATH.

### Problema: Build lento
**Solução:** Mantenha o daemon do Gradle rodando (`./gradlew assembleDebug` sem `--no-daemon`) e evite limpar o cache desnecessariamente.

📱 Guia Resumido: Gerar Keystore e Publicar na Play Store
1️⃣ Gerar a Keystore (Chave de Upload)
Windows (como admin):

bash
cd "C:\Program Files\Java\jdk-17.x.x_x\bin"
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
macOS:

bash
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
O que vai pedir:

Senha do keystore

Senha da chave

Nome, unidade, cidade, estado, país

Resultado: Arquivo my-upload-key.keystore gerado.

2️⃣ Configurar no Projeto
Mover o arquivo:

text
my-upload-key.keystore → android/app/
Editar android/gradle.properties (adicionar no final):

properties
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=suasenha
MYAPP_UPLOAD_KEY_PASSWORD=suasenha
Editar android/app/build.gradle (dentro de android { ... }):

gradle
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
}

buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}
3️⃣ Gerar o AAB (Android App Bundle)
bash
npx react-native build-android --mode=release
Arquivo gerado: android/app/build/outputs/bundle/release/app-release.aab

gradlew bundle release

4️⃣ Testar antes de publicar
bash
npm run android -- --mode="release"