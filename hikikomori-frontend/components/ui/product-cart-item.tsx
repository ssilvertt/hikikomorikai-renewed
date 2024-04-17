import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';
import { CartItem } from '@/util/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx';
import { Input } from '@/components/ui/input';
interface ProductCartItemProps {
	product: CartItem;
}

export default function ProductCartItem({ product }: ProductCartItemProps) {
	const { remove, updateCount } = useCartStore();

	return (
		<div
			className="flex border-b py-5 max-md:flex-col max-md:items-center max-md:justify-center max-sm:gap-5">
			<Link
				href={`/product/${product.id}`}
				className="group flex max-md:flex-col max-sm:items-center max-sm:gap-5 md:w-[550px]"
			>
				<div
					className="col-span-3 ">
					<Image
						src={`http://localhost:8000/storage/${product.images[0].image_path}`}
						alt={product.name}
						width={144}
						height={144}
						unoptimized={true}
						className="object-contain max-sm:w-full max-sm:max-w-[250px] sm:h-36 sm:w-36"
					/>
				</div>
				
				<div
					className="text flex flex-col justify-center sm:ml-5">
					<div
						className="text-2xl transition-all group-hover:text-red-700 max-sm:text-center">
						{product.name}
					</div>
				</div>
			</Link>
			
			<div
				className="field flex items-center font-mont md:ml-20">
				<div
					className="flex">
					<Button
						size={'icon'}
						className="px-5 transition-all hover:text-red-700 border-r-0 text-xl font-hikika rounded-none"
						onClick={() => updateCount(product.id, product.count - 1)}
						variant={'outline'}
					>
						-
					</Button>
					<Input
						type={'number'}
						className="w-20 rounded-none border-x-0 text-center text-xl"
						value={product.count}
						min={1}
						style={{
							appearance: 'textfield',
							MozAppearance: 'textfield',
						}}
						onChange={e => updateCount(product.id, parseInt(e.target.value))}
						required={true}
					/>
					<Button
						size={'icon'}
						className="px-5 transition-all hover:text-red-700 border-l-0 font-hikika text-xl rounded-none"
						onClick={() => updateCount(product.id, product.count + 1)}
						variant={'outline'}
					>
						+
					</Button>
				</div>
			</div>
			<div
				className="flex items-center font-mont md:ml-20 w-10">
				{Number(product.price) * product.count}$
			</div>
			<button
				className="group flex items-center md:ml-20"
				onClick={() => {
					remove(product.id);
					close();
				}}
			>
				<RxCross1
					className="h-6 text-[#BDBDBD] transition-all group-hover:text-red-700" />
			</button>
		</div>
	);
}
