import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Raleway, Shippori_Mincho } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '../components/ui/header';
import './globals.css';

const raleway = Raleway({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
});

const shippori = Shippori_Mincho({
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-shippori',
});

const hikka = localFont({
	src: '../public/OldLondon.ttf',
	display: 'swap',
	variable: '--font-hikka',
});

export const metadata: Metadata = {
	title: 'hikikomori kai',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'font-raleway antialiased',
					raleway.variable,
					hikka.variable,
					shippori.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="flex h-full min-h-screen flex-col">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
