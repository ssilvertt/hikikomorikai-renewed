import Products from '@/components/products';
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface ApiProduct {
	id: number;
	name: string;
	description: string;
	price: string;
	image: string;
	created_at: string;
	updated_at: string;
}

export default function Home() {
	return (
		<>
			<Products />
		</>
	);
}
