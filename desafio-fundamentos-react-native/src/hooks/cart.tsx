import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const productList = await AsyncStorage.getItem('@GoMarketplace:cart');

      if (productList) setProducts([...JSON.parse(productList)]);
    }

    loadProducts();
  }, []);

  const increment = useCallback(
    async id => {
      const incrementedProducts = products.map(currentProduct =>
        currentProduct.id === id
          ? { ...currentProduct, quantity: currentProduct.quantity + 1 }
          : currentProduct,
      );

      await AsyncStorage.setItem(
        '@GoMarketplace:cart',
        JSON.stringify(incrementedProducts),
      );

      setProducts(incrementedProducts);
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const product = products.find(currentProduct => currentProduct.id === id);
      const decrementedProducts =
        product?.quantity > 1
          ? products.map(currentProduct =>
              currentProduct.id === id
                ? { ...currentProduct, quantity: currentProduct.quantity - 1 }
                : currentProduct,
            )
          : products.filter(currentProduct => currentProduct.id !== id);

      await AsyncStorage.setItem(
        '@GoMarketplace:cart',
        JSON.stringify(decrementedProducts),
      );

      setProducts(decrementedProducts);
    },
    [products],
  );

  const addToCart = useCallback(
    async product => {
      const existentProduct = products.find(
        currentProduct => currentProduct.id === product.id,
      );

      if (existentProduct) {
        increment(existentProduct.id);
        return;
      }

      await AsyncStorage.setItem(
        '@GoMarketplace:cart',
        JSON.stringify(products),
      );

      setProducts([...products, { ...product, quantity: 1 }]);
    },
    [products, increment],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
