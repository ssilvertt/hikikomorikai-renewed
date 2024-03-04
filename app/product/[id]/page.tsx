export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	return(
		<div className='text-6xl'>{id}</div>
	)
}