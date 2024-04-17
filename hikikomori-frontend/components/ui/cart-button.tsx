'use client';

import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { useCartStore } from '@/store/cart';
import useStore from '@/hooks/use-store';
import { motion } from 'framer-motion';
export function CartButton() {
	const count = useStore(useCartStore, state => state.count());

	return (
		<div>
			<Link href={'/cart'} className="relative">
				{count ? (
					<div className="mb-3">
						<motion.div
							initial={{ opacity: 0.5, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.3,
								duration: 0.8,
								ease: 'easeInOut',
							}}
							className="text-xl drop-shadow-[0_0_3px_#751010] hover:drop-shadow-[0_0_7px_#520b0b] font-hikika md:text-3xl md:text-center text-red-700"
						>
							{count}
						</motion.div>
					</div>
				) : (
					<BsBag className={`h-5 w-5 hover:text-red-600 cursor-pointer`} />
				)}
			</Link>
		</div>
	);
}
