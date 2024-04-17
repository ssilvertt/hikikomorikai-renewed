'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/util/utils';

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(' ');
	useEffect(() => {
		animate(
			'span',
			{
				opacity: 1,
			},
			{
				duration: 0.5,
				delay: stagger(0.2),
			}
		);
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span key={word + idx} className="opacity-0">
							{word}{' '}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div>
			<button>
				<div
					className={cn(
						'text-center md:text-right text-4xl md:text-4xl mt-1 text-red-700 font-raleway',
						className
					)}
				>
					{renderWords()}
				</div>
			</button>
		</div>
	);
};
