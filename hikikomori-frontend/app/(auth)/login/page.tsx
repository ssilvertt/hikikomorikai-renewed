'use client'


import { useAuth } from '@/hooks/auth';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
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

	useEffect(() => {
		const resetParam = searchParams.get('reset')
		if (
				resetParam &&
				resetParam.length > 0 &&
				Object.keys(errors).length === 0
		) {
				setStatus(atob(resetParam))
		} else {
				setStatus(null)
		}
})

const submitForm = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		login({
			email,
			password,
			remember: shouldRemember,
			setErrors,
			setStatus,
		});
	};

	if(user){
		
	}

	return (
		<form onSubmit={submitForm}>
			<input
				type='email'
				placeholder='Email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit'>Login</button>
		</form>
	);
}
