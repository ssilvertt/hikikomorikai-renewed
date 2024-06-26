import { AuroraBackground } from '@/components/ui/aurora-background';
import ProductCard from '@/components/ui/product-card';
import { ApiProduct } from '@/util/definitions';
async function getProducts() {
	const res = await fetch('http://127.0.0.1:8000/api/products', {
		cache: 'no-store',
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Home() {
	const products: ApiProduct[] = await getProducts();

	return (
		<AuroraBackground>
			<div className="z-20 translate-y-48 md:translate-y-0 md:mt-10">
				<div>
					<div className="mx-auto my-20 flex max-w-7xl flex-col px-6 lg:px-8">
						<div className="flex flex-wrap justify-center gap-y-14 gap-x-44">
							{products.map(product => (
								<ProductCard product={product} key={product.id} />
							))}
						</div>
					</div>
				</div>
			</div>
		</AuroraBackground>
	);
}
