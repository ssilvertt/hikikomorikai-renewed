'use client';
import ProductCartItem from '@/components/ui/product-cart-item';
import { useCartStore } from '@/store/cart';
import useStore from '@/hooks/use-store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Cart() {
	const cart = useStore(useCartStore, state => state.cart);
	const router = useRouter();
	useEffect(() => {
		if (cart && cart.length === 0) {
			router.push('/');
		}
	}, [cart, router]);
	if (!cart) return <p>Cart is empty</p>;

	return (
		<div className="relative mx-auto my-20 flex max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
			<h2 className="scroll-m-20 font-hikika mx-auto pb-2 text-7xl font-semibold tracking-tight first:mt-0">
				Cart
			</h2>
			<div>
				<div className="pb-10 ">
					{cart.map((item, index) => {
						return <ProductCartItem product={item} key={item.id} />;
					})}
				</div>
			</div>

			<button className="flex justify-center align-middle w-48 mx-auto font-hikika text-3xl h-15 bg-black text-red-300 border border-red-300 hover:border-red-700 font-medium py-2 px-4 rounded-lg hover:bg-red-600 hover:text-black transition-colors outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-red-400">
				Checkout
			</button>
		</div>
	);
}
