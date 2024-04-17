'use client';
import Gallery from '@/components/ui/gallery';
import { LampContainer } from '@/components/ui/lamp';
import type { ApiProduct } from '@/util/definitions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCartStore } from "@/store/cart";
interface ProductContentProps {
	product: ApiProduct;
}

export function ProductContent({ product }: ProductContentProps) {
	const {add: handleAddToCart} = useCartStore();
	
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
				className="bg-gradient-to-b from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl font-hikika mt-20 "
			>
				<div className="flex flex-row justify-center -translate-y-32 ">
					<div className="group relative">
						<Image
							alt=""
							src={`http://localhost:8000/storage/${product.images[0].image_path}`}
							width={500}
							height={500}
							unoptimized={true}
							className="brightness-75 hover:brightness-100 hover:cursor-pointer transition-all drop-shadow-[0_0_5px_#acacac]"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black group-hover:hidden transition-all"></div>
					</div>
				</div>
				<div className="-translate-y-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text">
					<div>{product.name}</div>
					<Gallery images={product.images} />
					<h2
						className="scroll-m-20 pb-2 text-xl md:text-3xl font-semibold tracking-tight first:mt-0 font-raleway mt-6"
						dangerouslySetInnerHTML={{
							__html: product.description.replace(/\r\n/g, '<br>'),
						}}
					/>
					<div className="font-hikika ">
						{Number(product.price).toFixed(0)}$
					</div>
					
					<button onClick={() => handleAddToCart(product)} className="mb-60 mt-7 inline-flex text-md h-18 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
						Buy
					</button>
					
				
				</div>
			</motion.div>
		</LampContainer>
	);
}
