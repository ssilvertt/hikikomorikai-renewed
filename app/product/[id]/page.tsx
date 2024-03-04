interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image_url: string;
	second_image_url: string;
}
import { promises as fs } from 'fs';
import Image from 'next/image';
export default async function Page({ params }: { params: { id: string } }) {
	const file = await fs.readFile(
		process.cwd() + '/public/products.json',
		'utf8'
	);
	const data: Product[] = JSON.parse(file);
	const product = data.find(item => item.id === Number(params.id));
	if (product) {
		return (
			<div className='flex h-full min-h-screen flex-col bg-[#161616] text-white'>
				<div className='relative z-20'>
					<div>
						<div className='select-none max-sm:overflow-hidden'>
							<div className='relative'>
								<section className='relative mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8'>
									<div className='container grid-cols-2 gap-20 pt-32 max-sm:px-5 md:grid md:min-h-[1200px] md:px-32'>
										<div className='image d:min-h-[1070px] relative flex flex-col md:gap-20'>
											<div className='transition-property: transform; transition-duration: 1000ms; transform-origin: center center; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);'>
												<div className='z-1 relative md:w-full'>
													<Image src={product.image_url} alt={product.name} width={500} height={500}/>
												</div>
											</div>
										</div>
										<div className='description relative z-20 my-14'>
											<div className='sticky top-32'>
												<p className='text-right font-hikika text-xl text-red-700 max-sm:text-center'></p>
												<h1 className='font-raleway max-sm:text-center max-sm:text-4xl md:text-6xl'>
													{product?.name}
												</h1>
												<p className='mt-10 leading-[1.6em] max-sm:text-center'>
													{product?.description}
												</p>
												<div className='price mt-10 font-mont text-3xl max-sm:text-center'></div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>123</div>;
	}
}
