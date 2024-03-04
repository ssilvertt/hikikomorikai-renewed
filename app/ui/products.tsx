'use client';

import Image from 'next/image';
import Link from 'next/link';
interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image_url: string;
	second_image_url: string;
}

interface ProductsProps {
	products: Product[];
}

export default function Products({ products }: ProductsProps) {
	return (
		<div className='flex flex-wrap justify-center gap-24'>
			{products.map((product, index) => (
				<Link key={index} href={`/product/${product.id}`}>
					<div
						key={index}
						className='font-raleway item group flex flex-col items-center w-[290px]'
					>
						<Image
							width={250}
							height={250}
							src={product.image_url}
							alt={product.name}
							className='h-64 w-full max-w-[250px] object-contain'
						/>
						<h3 className='mt-10 text-l group-hover:text-red-700'>
							{product.name}
						</h3>
					</div>
				</Link>
			))}
		</div>
	);
}
