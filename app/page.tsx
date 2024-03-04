import { promises as fs } from 'fs';
import Products from './ui/products';
interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image_url: string;
	second_image_url: string;
}

export default async function Home() {
	const file = await fs.readFile(
		process.cwd() + '/public/products.json',
		'utf8'
	);
	const data: Product[] = JSON.parse(file);

	return (
			<div className='relative mx-auto my-5 flex max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8'>
				<Products products={data} />
			</div>

	);
}
