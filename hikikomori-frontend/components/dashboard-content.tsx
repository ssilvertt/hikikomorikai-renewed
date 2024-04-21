'use client';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { useAuth } from '@/hooks/auth';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import AddProductForm from './add-product-form';
import { useEffect, useState } from 'react';

export default function DashboardContent() {
	const searchParams = useSearchParams();
	const [status, setStatus] = useState<string | null>(null);
	const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
	const { user } = useAuth({
		middleware: 'auth',
		redirectIfAuthenticated: '/login',
	});

	useEffect(() => {
		const resetParam = searchParams.get('reset');
		if (
			resetParam &&
			resetParam.length > 0 &&
			Object.keys(errors).length === 0
		) {
			setStatus(atob(resetParam));
		} else {
			setStatus(null);
		}
	});

	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className="relative flex flex-col gap-4 items-center justify-center px-4"
			>
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-zinc-300 light:text-black font-shippori">
					新しいものを生み出す
				</h1>
				<AddProductForm />
			</motion.div>
		</AuroraBackground>
	);
}
