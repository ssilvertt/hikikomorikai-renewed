import type { ApiProduct } from '@/util/definitions';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '@/util/definitions';

type CartStore = {
	cart: CartItem[];
	count: () => number;
	add: (product: ApiProduct) => void;
	remove: (idProduct: number) => void;
	removeAll: () => void;
	updateCount: (idProduct: number, count: number) => void;
	total: () => number;
};

export const useCartStore = create(
	persist<CartStore>(
		(set, get) => ({
			cart: [],
			count: () => {
				const { cart } = get();
				if (cart.length)
					return cart
						.map(item => item.count)
						.reduce((prev, curr) => prev + curr);
				return 0;
			},
			add: (product: ApiProduct) => {
				const { cart } = get();
				const updatedCart = updateCart(product, cart);
				set({ cart: updatedCart });
			},
			remove: (idProduct: number) => {
				const { cart } = get();
				const updatedCart = removeCart(idProduct, cart);
				set({ cart: updatedCart });
			},
			removeAll: () => set({ cart: [] }),
			updateCount: (idProduct: number, newCount: number) => {
				const { cart } = get();
				const updatedCart = cart.map(item => {
					if (item.id === idProduct) {
						if (newCount < 1) {
							return item;
						}
						return { ...item, count: newCount };
					}
					return item;
				});
				set({ cart: updatedCart });
			},
			total: () => {
				const { cart } = get();
				if (cart.length)
					return cart
						.map(item => item.count * Number(item.price))
						.reduce((prev, curr) => prev + curr);
				return 0;
			},
		}),
		{
			name: 'cart-storage', // unique name
		}
	)
);

function updateCart(product: ApiProduct, cart: CartItem[]): CartItem[] {
	const cartItem = { ...product, count: 1 } as CartItem;

	const productOnCart = cart.map(item => item.id).includes(product.id);

	if (!productOnCart) cart.push(cartItem);
	else {
		return cart.map(item => {
			if (item.id === product.id)
				return { ...item, count: item.count + 1 } as CartItem;
			return item;
		});
	}

	return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
	return cart.filter(item => item.id !== idProduct);
}
