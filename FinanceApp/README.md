# 💰 FinanceApp

🌐🇧🇷 [Versão em Português do README](README.md)  
🌐🇺🇸 [English Version of README](README_EN.md)

Aplicativo de controle financeiro pessoal desenvolvido em React Native com TypeScript, permitindo gerenciar receitas e despesas de forma simples e eficiente.

## 🔨 Funcionalidades do Projeto

- **Autenticação de Usuário**: Sistema completo de login e cadastro com tokens JWT
- **Dashboard Financeiro**: Visualização de saldo, entradas e saídas do dia
- **Registro de Movimentações**: Cadastro de receitas e despesas com descrição e valor
- **Histórico**: Listagem de todas as movimentações com possibilidade de exclusão
- **Filtro por Data**: Calendário interativo para filtrar movimentações por período
- **Navegação por Drawer**: Menu lateral com navegação entre telas
- **Persistência de Dados**: Armazenamento local do token de autenticação

## ✔️ Técnicas e Tecnologias Utilizadas

- **React Native 0.84.1**: Framework para desenvolvimento mobile multiplataforma
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **React Navigation**: Navegação com Drawer e Stack Navigator
- **Styled Components**: Estilização com CSS-in-JS
- **Axios**: Cliente HTTP para requisições à API
- **AsyncStorage**: Persistência local de dados
- **Date-fns**: Manipulação e formatação de datas
- **React Native Calendars**: Componente de calendário
- **Vector Icons**: Ícones Feather e MaterialIcons
- **Context API**: Gerenciamento de estado global
- **Jest**: Framework de testes unitários

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis
│   ├── BalanceItem/
│   ├── CalendarModal/
│   ├── CustomDrawer/
│   ├── Header/
│   ├── HistoricoList/
│   └── RegisterTypes/
├── contexts/        # Contextos do React (AuthContext)
├── pages/           # Telas da aplicação
│   ├── Home/
│   ├── New/
│   ├── Profile/
│   ├── SignIn/
│   └── SignUp/
├── routes/          # Configuração de rotas
└── services/        # Serviços (API)
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js >= 22.11.0
- npm ou yarn
- React Native CLI
- Android Studio (para Android) ou Xcode (para iOS)
- Backend da aplicação rodando (veja seção Backend)

### Passos de Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure o IP do backend em `src/services/api.ts`:
```typescript
baseURL: 'http://SEU_IP:3333'
```

4. Execute o aplicativo:

**Android:**
```bash
npm run android
```

**iOS:**
```bash
cd ios && pod install && cd ..
npm run ios
```

## 🌐 Backend

O projeto utiliza um backend Node.js com Prisma e SQLite.

**Repositório do Backend:**  
https://github.com/devfraga/backend-financas

### Executar o Backend

1. Navegue até a pasta `backend-financas`
2. Instale as dependências: `npm install`
3. Execute as migrations: `npx prisma migrate dev`
4. Inicie o servidor: `npm run dev`

O backend estará disponível em `http://localhost:3333`

## 🗄️ Banco de Dados

Para visualizar e gerenciar o banco de dados SQLite, recomenda-se o **Beekeeper Studio**:

**Download:**  
https://github.com/beekeeper-studio/beekeeper-studio/releases

## 🎨 Design

O design do aplicativo está disponível no Figma:

**Figma do Projeto:**  
https://www.figma.com/design/O7hp0vwYIswS6xfKC51TFj/App-Finan%C3%A7as?node-id=0-1&p=f

## 📱 Telas do Aplicativo

- **Login**: Autenticação do usuário
- **Cadastro**: Registro de novos usuários
- **Home**: Dashboard com saldo e movimentações
- **Registrar**: Cadastro de novas receitas/despesas
- **Perfil**: Informações do usuário e opção de logout

## 🧪 Testes

Execute os testes unitários:

```bash
npm test
```

Execute o linter:

```bash
npm run lint
```

## 📄 Licença

Este projeto é open source e está disponível para uso educacional.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo em React Native e TypeScript.
