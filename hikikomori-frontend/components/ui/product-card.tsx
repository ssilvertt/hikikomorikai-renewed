'use client';

import { useHover } from '@/hooks/use-hover';
import type { ApiProduct } from '@/util/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { HoverEffect } from './HoverEffect';

interface ProductCardProps {
	product: ApiProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
	const buttonHoverRef = useHover();

	return (
		<Link href={`/product/${product.id}`} className="card" ref={buttonHoverRef}>
			<div className="font-raleway item group flex flex-col items-center w-72 rounded-lg py-2 px-5">
				<Image
					width={250}
					height={250}
					src={`http://localhost:8000/storage/${product.images[0].image_path}`}
					alt={product.name}
					className="h-64 w-64 max-w-[250px] object-contain"
					unoptimized={true}
				/>
				<h3 className="mt-10 text-l group-hover:text-red-700 dark:text-zinc-400">
					{product.name}
				</h3>
			</div>
		</Link>
	);
}
