# ⛽ Fuel Calculator

## 🌐 Idiomas
- **🇧🇷 [Versão em Português](README.md)** ← Você está aqui
- **🇺🇸 [English Version](README_EN.md)**

## 📋 Sobre o Projeto

**Fuel Calculator** é um aplicativo móvel desenvolvido em **React Native** que ajuda o motorista a descobrir qual combustível é mais econômico: álcool ou gasolina. O cálculo é baseado na proporção de preço por litro entre os dois combustíveis.

### 🎯 O que a App Faz?

O aplicativo compara os preços do álcool e da gasolina para determinar qual oferece o melhor custo-benefício. A regra é simples: se o preço do álcool for **até 70% do preço da gasolina**, vale a pena usar álcool.

---

## 🔨 Funcionalidades

✅ **Cálculo Automático** - Compara preços de álcool vs gasolina  
✅ **Validação de Entrada** - Valida valores numéricos inseridos  
✅ **Interface Intuitiva** - Design limpo e responsivo  
✅ **Navegação Fluida** - Transição entre telas com React Navigation  
✅ **Suporte Android e iOS** - Funciona em ambas as plataformas  
✅ **Formatação de Valores** - Exibe preços em formato brasileiro (R$)  

---

## 🏗️ Arquitetura

```
FuelCalculator/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.tsx      # Tela de entrada de dados
│   │   └── ResultScreen.tsx    # Tela de resultado
│   ├── navigation/
│   │   └── types.ts            # Tipos de navegação
├── assets/
│   ├── logo.png                # Logo da aplicação
│   └── gas.png                 # Ícone de gasolina
├── App.tsx                     # Componente raiz
└── package.json                # Dependências do projeto
```

---

## 📱 Telas

### 🏠 HomeScreen
- Campo para inserir preço do **álcool por litro**
- Campo para inserir preço da **gasolina por litro**
- Botão "Calcular" para processar os dados
- Validação de entrada com feedback visual

### 📊 ResultScreen
- Exibe qual combustível é mais econômico
- Mostra os valores inseridos formatados
- Botão para recalcular com novos valores

---

## 🚀 Como Rodar

### Pré-requisitos
- Node.js >= 22.11.0
- React Native CLI
- Android Studio (para Android) ou Xcode (para iOS)

### Instalação

```bash
# Clone ou acesse o diretório do projeto
cd FuelCalculator

# Instale as dependências
npm install

# Para iOS, instale as dependências nativas
bundle install
bundle exec pod install
```

### Executar no Android
```bash
npm run android
```

### Executar no iOS
```bash
npm run ios
```

### Modo Desenvolvimento
```bash
npm start
```

---

## 📦 Dependências Principais

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| `react` | 19.2.3 | Biblioteca React |
| `react-native` | 0.84.0 | Framework para mobile |
| `@react-navigation/native` | ^7.1.28 | Navegação básica |
| `@react-navigation/native-stack` | ^7.13.0 | Stack Navigator |
| `typescript` | ^5.8.3 | Tipagem estática |

---

## 🛠️ Scripts Disponíveis

```bash
npm start                # Inicia Metro (dev server)
npm run android          # Compila e executa no Android
npm run ios              # Compila e executa no iOS
npm run lint             # Verifica problemas de código
npm test                 # Executa testes Jest
```

---

## 💡 Lógica de Cálculo

A aplicação utiliza a seguinte regra de negócio:

```
Se (Preço Álcool / Preço Gasolina) ≤ 0.70
  → Compensa usar Álcool
Caso contrário
  → Compensa usar Gasolina
```

**Exemplo:**
- Álcool: R$ 4,00
- Gasolina: R$ 6,00
- Proporção: 4,00 / 6,00 = 0,667 ✅ (≤ 0,70)
- **Resultado:** Compensa usar Álcool

---

## 🎨 Design

- **Tema:** Dark Mode (background escuro #101010)
- **Cores principais:** Verde (#18d86b) para sucesso, Vermelho (#ff3b30) para ações
- **Tipografia:** FontWeight 800 para títulos, 700 para conteúdo
- **Layout:** Centralizado com espaçamento responsivo

---

## ✅ Testes

O projeto inclui testes unitários em Jest. Execute com:

```bash
npm test
```

---

## 📄 Licença

Este projeto está sob a licença especificada no arquivo `LICENSE`.

---

## 👨‍💻 Desenvolvimento

Desenvolvido como projeto de aprendizado em **React Native** com **TypeScript**, demonstrando boas práticas em componentização e navegação.

**Versão:** 0.0.1  
**Última atualização:** 2026-03-03

