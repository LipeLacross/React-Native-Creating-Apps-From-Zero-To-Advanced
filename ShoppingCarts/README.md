# 🛒 ShoppingCarts

🌐🇧🇷 [Versão em Português do README](README.md)  
🌐🇺🇸 [English Version of README](README_EN.md)

Aplicativo de carrinho de compras desenvolvido em React Native com TypeScript, permitindo adicionar, remover e gerenciar itens de compra de forma simples e intuitiva.

## 🔨 Funcionalidades do Projeto

- **Listagem de Produtos**: Exibição de produtos disponíveis para compra
- **Adicionar ao Carrinho**: Adicionar itens à lista de compras com um clique
- **Gerenciar Quantidade**: Aumentar ou diminuir a quantidade de itens no carrinho
- **Remover Itens**: Deletar produtos do carrinho
- **Cálculo de Total**: Cálculo automático do valor total da compra
- **Contador de Itens**: Badge mostrando a quantidade de itens no carrinho
- **Navegação**: Navegação fluida entre telas de Home e Carrinho

## ✔️ Técnicas e Tecnologias Utilizadas

- **React Native 0.83.2**: Framework para desenvolvimento mobile multiplataforma
- **Expo**: Plataforma para desenvolvimento rápido em React Native
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **React Navigation**: Sistema de navegação entre telas
- **Context API**: Gerenciamento de estado global do carrinho
- **Expo Vector Icons**: Ícones profissionais

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── CardItem/        # Item do carrinho
│   └── Product/         # Produto da lista
├── contexts/            # Contextos do React (CartContext)
├── pages/               # Telas da aplicação
│   ├── Home/            # Listagem de produtos
│   └── Cart/            # Carrinho de compras
└── routes/              # Configuração de rotas
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js >= 18
- npm ou yarn
- Expo CLI instalado globalmente

### Passos de Instalação

1. Clone ou navegue até o diretório do projeto
2. Instale as dependências:
```bash
npm install
```

3. Inicie o aplicativo:
```bash
npm start
```

4. Escolha a plataforma para executar:
   - **Android**: Pressione `a` no terminal ou execute `npm run android`
   - **iOS**: Pressione `i` no terminal ou execute `npm run ios` (Mac apenas)
   - **Web**: Pressione `w` no terminal ou execute `npm run web`

## 📱 Telas do Aplicativo

### Home
- Exibe a lista de produtos disponíveis
- Botão para adicionar itens ao carrinho
- Badge mostra a quantidade de itens no carrinho
- Botão de navegação para o carrinho

### Cart
- Mostra todos os itens adicionados ao carrinho
- Permite aumentar ou diminuir a quantidade de cada item
- Exibe o preço total da compra
- Mensagem quando o carrinho está vazio

## 💾 Estrutura de Dados

### CartItem
```typescript
type CartItem = {
  id: string;
  name: string;
  price: number;
  amount: number;
  total: number;
}
```

### CartContextType
```typescript
type CartContextType = {
  cart: CartItem[];
  addItemCart: (newItem: Omit<CartItem, 'amount' | 'total'>) => void;
  removeItemCart: (product: CartItem) => void;
  total: string;
}
```

## 🚀 Scripts Disponíveis

- `npm start` - Inicia o Expo e permite escolher a plataforma
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS (Mac apenas)
- `npm run web` - Executa na web

## 📝 Conversão TypeScript

O projeto foi completamente convertido de JavaScript para TypeScript:
- ✅ Todos os componentes tipados
- ✅ Context com tipos explícitos
- ✅ Rotas com RootStackParamList
- ✅ Props com tipagem completa
- ✅ Estado com tipos genéricos

## 📄 Licença

Este projeto é open source e está disponível para uso educacional.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo em React Native e TypeScript.

