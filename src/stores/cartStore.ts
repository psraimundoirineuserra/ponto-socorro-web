import { atom } from 'nanostores';

export interface CartItem {
  id: string;
  variantId: string;
  nombre: string;
  nombreEn: string;
  nombrePt: string;
  categoria: 'textil' | 'instrumento' | 'libro' | 'star';
  tipo: 'standard' | 'custom';
  medidas?: { pecho: number; cintura: number; largo: number };
  precio: number;
  cantidad: number;
  imagen: string;
  slug: string;
}

const isBrowser = typeof window !== 'undefined';
const initialCart: CartItem[] = isBrowser ? JSON.parse(localStorage.getItem('ponto-cart') || '[]') : [];

export const cartItems = atom<CartItem[]>(initialCart);

cartItems.listen((items) => {
  if (isBrowser) localStorage.setItem('ponto-cart', JSON.stringify(items));
});

export const cartCount = atom<number>(initialCart.reduce((sum, item) => sum + item.cantidad, 0));
cartItems.listen((items) => cartCount.set(items.reduce((sum, item) => sum + item.cantidad, 0)));

export const cartTotal = atom<number>(initialCart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0));
cartItems.listen((items) => cartTotal.set(items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)));

export function addToCart(item: CartItem) {
  const currentItems = cartItems.get();
  const existingIndex = currentItems.findIndex((i) => i.variantId === item.variantId);

  if (existingIndex >= 0) {
    const updated = [...currentItems];
    updated[existingIndex] = {
      ...updated[existingIndex],
      cantidad: updated[existingIndex].cantidad + item.cantidad,
    };
    cartItems.set(updated);
  } else {
    cartItems.set([...currentItems, item]);
  }
}

export function removeFromCart(variantId: string) {
  const currentItems = cartItems.get();
  cartItems.set(currentItems.filter((i) => i.variantId !== variantId));
}

export function updateQuantity(variantId: string, cantidad: number) {
  if (cantidad <= 0) {
    removeFromCart(variantId);
    return;
  }

  const currentItems = cartItems.get();
  const updated = currentItems.map((item) =>
    item.variantId === variantId ? { ...item, cantidad } : item
  );
  cartItems.set(updated);
}

export function clearCart() {
  cartItems.set([]);
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
