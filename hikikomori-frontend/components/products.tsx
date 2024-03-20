'use client';
import axios from '@/lib/axios';
import { ApiProduct } from '@/lib/definitions';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function Products() {
	const [products, setData] = useState<ApiProduct[]>();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/products')
			.then(res => res.data)
			.then(data => {
				setData(data);
				setLoading(false);
			});
	}, []);


	if (isLoading) return <p>Loading...</p>;
	if (!products) return <p>No profile data</p>;

	return (
		<div className='relative z-20'>
			<div>
				<div className='relative mx-auto my-20 flex max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8'>
					<div className='flex flex-wrap justify-center gap-20'>
						{products.map((product, index) => (
							<Link key={index} href={`/product/${product.id}`}>
								<div
									key={index}
									className='font-raleway item group flex flex-col items-center w-72'
								>
									<Image
										width={250}
										height={250}
										src={`http://localhost:8000/storage/${product.images[0].image_path}`}
										alt={product.name}
										className='w-full object-contain'
										unoptimized={true}
									/>
									<h3 className='mt-10 text-l group-hover:text-red-700'>
										{product.name}
									</h3>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
			
		</div>
	);
}
