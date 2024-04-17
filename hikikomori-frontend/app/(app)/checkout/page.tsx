'use client';

import { CheckoutForm } from '@/components/checkout-form';
import { AuroraBackground } from '@/components/ui/aurora-background';
import ProductCartItem from '@/components/ui/product-cart-item';
import useStore from '@/hooks/use-store';
import { useCartStore } from '@/store/cart';

export default function Page() {
	const cart = useStore(useCartStore, state => state.cart);
	const total = useStore(useCartStore, state => state.total);
	if (!cart) return <p>Cart is empty</p>;
	if (!total) return <p>total is empty</p>;
	return (
		<div className="font-hikika text-7xl text-center relative mt-20 mx-auto">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl font-hikika">
				Checkout
			</h1>
			<div className="grid grid-cols-5 gap-4 mt-10">
				<div className="col-span-3">
					<CheckoutForm />
				</div>
				<div className="col-span-2">
					<div className="flex flex-col justify-start w-80 min-h-80 border">
						<div className="flex flex-row px-4 border-b">
							<p className="text-lg font-raleway">Order details</p>
						</div>
						<div className="flex flex-col gap-4 text-base font-raleway">
							{cart.map((item, index) => {
								return (
									<div key={item.id}>
										{item.name} x {item.count}
									</div>
								);
							})}
						</div>
						<div className="border-t font-raleway text-base mt-auto mb-5 flex">
							<div className="px-4">Total: {total.toString()}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
