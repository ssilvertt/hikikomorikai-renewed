import { promises as fs } from 'fs';
import Products from './ui/products';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image_url: string;
	second_image_url: string;
}

interface ApiProduct{
	id: number;
	name: string;
	description: string;
	price: string;
	image: string;
	created_at:string;
	updated_at:string;
}


// export const getServerSideProps = (async () =>{
// 	const products:ApiProduct[] = await axios.get('http://127.0.0.1:8000/api/products');
// 	// const res = await fetch('http://localhost:8000/api/products', {credentials: 'include'});
// 	// const products: ApiProduct[] = await res.json();
// 	return{props: {products}}
// }) satisfies GetServerSideProps<{products:ApiProduct[]}>


export default async function Home(/*{
	products,
}:InferGetServerSidePropsType<typeof getServerSideProps>*/) {
	// const products= await axios.get('http://127.0.0.1:8000/api/products');
	// console.log(products);


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
