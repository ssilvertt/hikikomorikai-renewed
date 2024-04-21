'use client';

import { useAuth } from '@/hooks/auth';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	email: z.string().min(2, {
		message: 'Email must be at least 2 characters.',
	}),
	password: z.string().min(2, {
		message: 'Password must be at least 2 characters.',
	}),
});

export default function Login() {
	const searchParams = useSearchParams();

	const { login, user } = useAuth({
		middleware: 'guest',
		redirectIfAuthenticated: '/dashboard',
	});

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [shouldRemember, setShouldRemember] = useState<boolean>(false);
	const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
	const [status, setStatus] = useState<string | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
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

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const emailForm: string = values.email;
		const passwordForm: string = values.password;
		await login({
			email: emailForm,
			password: passwordForm,
			remember: shouldRemember,
			setErrors,
			setStatus,
		});
	}

	return (
		<div className='mt-20 flex flex-col'>
			<h2 className="scroll-m-20 font-hikika mx-auto pb-2 text-5xl font-semibold tracking-tight first:mt-0">
				Login into system
			</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 mt-20 mx-auto w-[350px]"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormDescription>Enter email</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormDescription>Enter password</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
