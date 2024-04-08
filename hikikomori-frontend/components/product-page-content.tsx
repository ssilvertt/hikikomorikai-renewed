'use client';
import Gallery from '@/components/ui/gallery';
import { LampContainer } from '@/components/ui/lamp';
import type { ApiProduct } from '@/lib/definitions';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProductContentProps {
	product: ApiProduct;
}

export function ProductContent({ product }: ProductContentProps) {
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
				className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl font-hikika mt-20 "
			>
				<div className="flex flex-row justify-center overflow-hidden -translate-y-32">
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
						className="scroll-m-20 pb-2 text-xl md:text-3xl font-semibold tracking-tight first:mt-0 font-raleway t"
						dangerouslySetInnerHTML={{
							__html: product.description.replace(/\r\n/g, '<br>'),
						}}
					/>
					<div className="font-hikika">{Number(product.price).toFixed(0)}$</div>
				</div>
			</motion.div>
		</LampContainer>
	);
}
