'use client';
import { cn } from '@/util/utils';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({
		width: window ? window.innerWidth : 1920,
	});

	useEffect(() => {
		if (window) {
			const handleResize = () => {
				setScreenSize({
					width: window.innerWidth,
				});
			};

			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	return screenSize;
};

export const LampContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const screensize = useScreenSize();
	return (
		<div
			className={cn(
				'absolute flex flex-col items-center justify-center overflow-y-hidden overflow-x-hidden bg-black w-full rounded-md z-20',
				className
			)}
		>
			<div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 translate-y-56">
				<motion.div
					initial={{
						opacity: 0.5,
						width: screensize.width < 768 ? '7.5rem' : '15rem',
					}}
					whileInView={{
						opacity: 1,
						width: screensize.width < 768 ? '15rem' : '30rem',
					}}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-red-700 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
				>
					<div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
					<div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
				</motion.div>
				<motion.div
					initial={{
						opacity: 0.5,
						width: screensize.width < 768 ? '7,5rem' : '15rem',
					}}
					whileInView={{
						opacity: 1,
						width: screensize.width < 768 ? '15rem' : '30rem',
					}}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-red-700 text-white [--conic-position:from_290deg_at_center_top]"
				>
					<div className="absolute  w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
					<div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
				</motion.div>
				<div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
				<div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
				<div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-red-700 opacity-50 blur-3xl"></div>
				<motion.div
					initial={{
						width: screensize.width < 768 ? '4rem' : '8rem',
					}}
					whileInView={{
						width: screensize.width < 768 ? '8rem' : '16rem',
					}}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-red-800 blur-2xl"
				></motion.div>
				<motion.div
					initial={{
						width: screensize.width < 768 ? '7.5rem' : '15rem',
					}}
					whileInView={{
						width: screensize.width < 768 ? '15rem' : '30rem',
					}}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-red-800"
				></motion.div>

				<div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
			</div>

			<div className="relative z-50 flex	flex-col items-center px-5 translate-y-56">
				{children}
			</div>
		</div>
	);
};
