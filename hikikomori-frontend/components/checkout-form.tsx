'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import validator from 'validator';
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
	name: z
		.string({
			required_error: 'Please, enter your name',
		})
		.min(2)
		.max(50),
	surname: z
		.string({
			required_error: 'Please, enter your surname',
		})
		.min(2)
		.max(50),
	email: z
		.string({
			required_error: 'Please, enter your email',
		})
		.email(),
	contact: z
		.string({
			required_error: 'Please, enter your contact data',
		})
		.max(50),
	phone: z
		.string({
			required_error: 'Please, enter your phone number',
		})
		.refine(validator.isMobilePhone),
	delieveryType: z.enum(['ukraine', 'worldwide']),
});

export function CheckoutForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			surname: '',
			email: '',
			contact: '',
			phone: '',
			delieveryType: 'ukraine',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 font-raleway p-3 md:p-10 dark:bg-zinc-900 light:bg-zinc-300 dark:bg-opacity-30 light:bg-opacity-30 rounded-lg dark:text-zinc-300 light:text-black w-96 md:w-auto"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="Name" className="md:w-96" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="surname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="Surname" className="md:w-96" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
