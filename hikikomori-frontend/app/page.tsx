import { promises as fs } from 'fs';
import Products from '@/components/products';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


interface ApiProduct{
	id: number;
	name: string;
	description: string;
	price: string;
	image: string;
	created_at:string;
	updated_at:string;
}



export default function Home(){


	// const file = await fs.readFile(
	// 	process.cwd() + '/public/products.json',
	// 	'utf8'
	// );
	
	// const data: Product[] = JSON.parse(file);

	// return (
	// 		<div className='relative mx-auto my-5 flex max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8'>
	// 			<Products products={data} />
	// 		</div>

	// );

	return(
		<>
			<Products/>
		</>
	)
}
