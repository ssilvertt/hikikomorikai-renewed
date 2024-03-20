import { ApiProduct } from '@/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';

async function getProducts() {
	const res = await fetch('http://127.0.0.1:8000/api/products', {cache: 'force-cache'});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Home() {
	const products: ApiProduct[] = await getProducts();

	return (
		<>
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
											className='h-64 w-full max-w-[250px] object-contain'
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
		</>
	);
}
