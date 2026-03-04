import React, { useState, createContext, ReactNode } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  amount: number;
  total: number;
}

type CartContextType = {
  cart: CartItem[];
  addItemCart: (newItem: Omit<CartItem, 'amount' | 'total'>) => void;
  removeItemCart: (product: CartItem) => void;
  total: string;
}

type CartProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addItemCart: () => {},
  removeItemCart: () => {},
  total: '0.00',
});

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState('0.00');

  function addItemCart(newItem: Omit<CartItem, 'amount' | 'total'>) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      // Se entrou aqui quer dizer que temos que adicionar +1 quantidade porque ele já está na sua lista
      let cartList = [...cart];

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    let data: CartItem = {
      ...newItem,
      amount: 1,
      total: newItem.price
    };

    const updatedCart = [...cart, data];
    setCart(updatedCart);
    totalResultCart(updatedCart);
  }

  function removeItemCart(product: CartItem) {
    const indexItem = cart.findIndex(item => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = [...cart];

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter(item => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items: CartItem[]) {
    let result = items.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    setTotal(result.toFixed(2));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

