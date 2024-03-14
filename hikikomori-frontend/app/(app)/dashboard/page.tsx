

import axios from '@/lib/axios';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

interface ApiProduct{
	id: number;
	name: string;
	description: string;
	price: string;
	image: string;
	created_at:string;
	updated_at:string;
}


export const getStaticProps = (async () => {
  const products = await axios.get('http://localhost:8000/api/products');
	console.log(products);
  return{props: {products}}
}) 

export default async function Dashboard({
	products,

}:InferGetStaticPropsType<typeof getStaticProps>) {


	return (
		<div>
			<div>dashboard</div>
		</div>
	);
}
