import { ApiProduct } from '@/util/definitions';
import { ProductContent } from '@/components/product-page-content';

async function getProduct(id: string) {
	const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
	const product: ApiProduct = await getProduct(params.id);

	return <ProductContent product={product} />;
}
