'use client';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from '@/util/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { Config, readAndCompressImage } from 'browser-image-resizer';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
	name: z.string({
		required_error: 'Please, enter name',
	}),
	price: z.coerce.number(),
	images: z.array(z.any()),
	description: z.string(),
});

export default function AddProductForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			description: '',
			price: 0,
			images: [],
		},
	});

	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [descriptionArea, setDescription] = useState('');
	const { toast } = useToast();
	const router = useRouter();
	const delay = (ms: number | undefined) =>
		new Promise(res => setTimeout(res, ms));
	const handleDescriptionChange: React.ChangeEventHandler<
		HTMLTextAreaElement
	> = event => {
		setDescription(event.target.value);
	};

	const handleFileSelect = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files) {
			const files = Array.from(event.target.files);
			const compressedFiles = await Promise.all(
				files.map(async file => {
					try {
						const config: Config = {
							maxWidth: 1680,
							maxHeight: 1680,
							mimeType: file.type === 'image/png' ? 'image/png' : 'image/jpeg',
						};

						const resizedImage = await readAndCompressImage(file, config);
						return new File([resizedImage], file.name, {
							type: file.type,
						});
					} catch (error) {
						console.error(error);
						return file; // Return the original file if compression fails
					}
				})
			);
			setSelectedFiles(prevFiles => [...prevFiles, ...compressedFiles]);
			form.setValue('images', [...selectedFiles, ...compressedFiles]);
		}
	};

	const removeFile = (index: number) => {
		const newFiles = [...selectedFiles];
		newFiles.splice(index, 1);
		setSelectedFiles(newFiles);
		form.setValue('images', newFiles);
	};

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const response = await axios.post('http://localhost:8000/api/products', {
				...values,
			});

			if (response.status == 201) {
				toast({
					description: 'New product added successfully',
				});

				await delay(3000);
				router.push('/');
			}
		} catch (error) {
			console.log('Catch: ', error);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 p-3 md:p-10 dark:bg-zinc-950 light:bg-zinc-300 dark:bg-opacity-50 light:bg-opacity-30 rounded-lg dark:text-zinc-300 light:text-black w-96 md:w-auto"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Product name</FormLabel>
							<FormControl>
								<Input
									className="md:w-96"
									placeholder="Product name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									className="md:w-96"
									placeholder="Description of product"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="price"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Price</FormLabel>
							<FormControl>
								<Input
									className="w-20"
									type="number"
									{...field}
									style={{
										appearance: 'textfield',
										MozAppearance: 'textfield',
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="images"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Images</FormLabel>
							<FormControl>
								<div>
									<div>
										{selectedFiles
											? selectedFiles.map((file, index) => (
													<div key={index} className="flex items-center">
														<span>{file.name}</span>
														<Button
															variant="ghost"
															onClick={() => removeFile(index)}
															className="ml-2"
														>
															Remove
														</Button>
													</div>
												))
											: null}
									</div>
									<Button
										type="button"
										variant={'secondary'}
										onClick={() =>
											document.getElementById('fileInput')?.click()
										}
									>
										Select Files
									</Button>
									<input
										id="fileInput"
										type="file"
										multiple
										accept="image/*"
										onChange={handleFileSelect}
										className="hidden"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" variant={'ghost'}>
					Submit
				</Button>
			</form>
		</Form>
	);
}
