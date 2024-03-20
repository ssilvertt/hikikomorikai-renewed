import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

async function getProduct(id: string) {
	const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
	const product = await getProduct(params.id);

	return (
		<div className='flex h-full min-h-screen flex-col'>
				<div className='relative z-20'>
					<section className='relative mx-auto flex max-w-6xl flex-col px-6 md:px-4'>
						<div className='grid-cols-2 gap-20 pt-32 px-5 md-px-32 md:grid md:min-h-[1200px] md:px-32'>
							<div className='z-1 relative md:w-full'>
								<Image
									src={`http://localhost:8000/storage/${product.images[0].image_path}`}
									alt={product.name}
									width={500}
									height={500}
									unoptimized={true}
								/>
							</div>
							<div className='my-14 relative'>
								<div className='sticky top-32'>
									<h1 className='text-center md:text-right  font-raleway text-4xl md:text-4xl  text-red-700'>
										{product.name}
									</h1>
									<p className='mt-10 leading-[1.6em] text-center font-raleway md:text-right'>
										{product.description}
									</p>
									<div className='text-4xl font-bold md:text-right text-center font-hikika'>
										{( product.price)}$
									</div>
									<div className='mt-3'>
										<RadioGroup
											defaultValue='baby'
											className='flex flex-row justify-center md:justify-end'
										>
											<div className='flex items-center space-x-2'>
												<RadioGroupItem value='baby' id='r1' />
												<Label htmlFor='r1'>Baby size</Label>
											</div>
											<div className='flex items-center space-x-2'>
												<RadioGroupItem value='big' id='r2' />
												<Label htmlFor='r2'>Big baby size</Label>
											</div>
										</RadioGroup>
									</div>
									<div className='group mt-14 flex justify-center'>
										<button className='font-sans text-3xl uppercase drop-shadow-[0_0_18px_rgba(255,255,255,0.6)] transition-all hover:tracking-wider hover:text-red-700 hover:drop-shadow-[0_0_18px_rgba(178,0,0,1)]'>
										Buy now → 
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
	);
}
