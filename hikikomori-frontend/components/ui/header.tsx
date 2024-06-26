'use client';

import { CartButton } from '@/components/ui/cart-button';
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
export default function Header() {
	return (
		<header className="fixed top-0 z-30 backdrop-blur-md shadow-sm text-white h-20 w-full">
			<div className="relative mx-auto flex max-w-6xl flex-col px-4 py-5">
				<div className="flex items-center align-middle">
					<Link href="/" className="text-2xl md:text-4xl font-hikika">
						hikikomori kai
					</Link>
					<ul className="invisible md:visible md:ml-[260px] mr-auto flex overflow-hidden transition-all duration-500 sm:gap-5 md:gap-10 font-raleway">
						<li>
							<Link href="/" className="hover:text-red-600 transition-all">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/delievery"
								className="hover:text-red-600 transition-all"
							>
								Delivery
							</Link>
						</li>
						<li>
							<a
								href="https://t.me/silvert"
								className="hover:text-red-600 transition-all"
							>
								Contact
							</a>
						</li>
					</ul>
					<div className="flex gap-x-4">
						<CartButton />
						<Drawer>
							<DrawerTrigger>
								<RxHamburgerMenu className="visible md:hidden h-6 w-6" />
							</DrawerTrigger>
							<DrawerContent className="">
								<div className="mx-auto w-full max-w-sm">
									<DrawerHeader>
										<DrawerTitle>Menu</DrawerTitle>
									</DrawerHeader>
									<div className="p-4 pb-0">
										<div className="flex items-center justify-center space-x-2">
											<ul className="transition-all duration-500 flex flex-col  text-center gap-y-7">
												<li>
													<Link
														href="/"
														className="hover:text-red-600 transition-all"
													>
														Home
													</Link>
												</li>
												<li>
													<Link
														href="/delievery"
														className="hover:text-red-600 transition-all"
													>
														Delivery
													</Link>
												</li>
												<li className="mb-5">
													<a
														href="https://t.me/silvert"
														className="hover:text-red-600 transition-all"
													>
														Contact
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</DrawerContent>
						</Drawer>
					</div>
				</div>
			</div>
		</header>
	);
}
