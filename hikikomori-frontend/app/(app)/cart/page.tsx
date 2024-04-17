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

			<Link
				href="/checkout"
				className="inline-flex w-48 mx-auto font-hikika text-3xl h-14 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
			>
				Checkout
			</Link>
		</div>
	);
}
