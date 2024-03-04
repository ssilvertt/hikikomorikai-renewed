import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
export default function Header() {
	return (
		<header className='fixed top-0 z-30 bg-black text-white h-20 w-full'>
			<div className='relative mx-auto flex max-w-6xl flex-col px-4 md:px-6 py-5'>
				<div className='flex items-center'>
					<Link href='/' className='text-xl font-hikika md:text-4xl'>
						hikikomori kai
					</Link>
					<ul className='ml-auto mr-auto flex overflow-hidden transition-all duration-500 sm:gap-5 md:gap-10 font-raleway'>
						<li>
							<Link href='/' className='hover:text-red-600 transition-all'>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/product/1'
								className='hover:text-red-600 transition-all'
							>
								Delivery
							</Link>
						</li>
						<li>
							<Link
								href='/product/2'
								className='hover:text-red-600 transition-all'
							>
								Contact
							</Link>
						</li>
					</ul>
					<ul className='flex max-sm:ml-auto max-sm:gap-5 md:gap-10 font-raleway'>
						<li className='flex cursor-pointer items-center gap-2'>EN</li>
						<li className='group transition-all'>
							<BsBag className='h-5 w-5 hover:text-red-600 cursor-pointer '/>
						</li>
						<li></li>
					</ul>
				</div>
			</div>
		</header>
	);
}
