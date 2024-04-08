'use client';

import type { ApiProduct } from '@/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { HoverEffect } from './HoverEffect';

interface ProductCardProps {
	product: ApiProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
	const hoverRef = useRef<HoverEffect | null>(null);

	return (
		<Link href={`/product/${product.id}`}>
			<div
				className="font-raleway item group flex flex-col items-center w-72 "
				ref={ref => {
					if (hoverRef.current) return;
					hoverRef.current = new HoverEffect(ref!);
				}}
			>
				<Image
					width={250}
					height={250}
					src={`http://localhost:8000/storage/${product.images[0].image_path}`}
					alt={product.name}
					className="h-64 w-64 max-w-[250px] object-contain transition-all delay-300"
					unoptimized={true}
				/>
				<h3 className="mt-10 text-l group-hover:text-red-700 dark:text-zinc-400">
					{product.name}
				</h3>
			</div>
		</Link>
	);
}
