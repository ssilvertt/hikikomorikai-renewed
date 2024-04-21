'use client';
import Gallery from '@/components/ui/gallery';
import { LampContainer } from '@/components/ui/lamp';
import type { ApiProduct } from '@/util/definitions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCartStore } from '@/store/cart';
interface ProductContentProps {
	product: ApiProduct;
}

export function ProductContent({ product }: ProductContentProps) {
	const { add: handleAddToCart } = useCartStore();

	return (
		<LampContainer>
			<motion.div
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className="bg-slate-950 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl font-hikika mt-20 "
			>
				<div className="flex flex-row justify-center -translate-y-32 ">
					<div className="group relative transition-all">
						<Image
							alt=""
							src={`http://localhost:8000/storage/${product.images[0].image_path}`}
							width={500}
							height={500}
							unoptimized={true}
							className="brightness-90 hover:brightness-100 hover:cursor-pointer transition-all"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black group-hover:hidden transition-all"></div>
					</div>
				</div>
				<div className="-translate-y-20 bg-gradient-to-br from-zinc-200 to-zinc-300 py-4 bg-clip-text drop-shadow-[0_0_5px_#8c2929]">
					<div className="bg-gradient-to-br from-red-800 to-red-900 bg-clip-text">
						<div>{product.name}</div>
					</div>

					<Gallery images={product.images} />
					<div className="max-w-2xl mx-auto break-words">
						<h2
							className="scroll-m-20 pb-2 text-xl md:text-3xl font-semibold tracking-tight first:mt-0 font-raleway mt-6"
							dangerouslySetInnerHTML={{
								__html: product.description.replace(/\r\n/g, '<br>'),
							}}
						/>
					</div>
					<div className="font-hikika ">
						{Number(product.price).toFixed(0)}$
					</div>

					<button
						onClick={() => handleAddToCart(product)}
						className="mb-60 mt-10 bg-black text-red-300 border border-red-300 hover:border-red-700 font-medium py-2 text-6xl px-4 rounded-lg hover:bg-red-600 hover:text-black transition-colors outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-red-400"
					>
						Buy
					</button>
				</div>
			</motion.div>
		</LampContainer>
	);
}
