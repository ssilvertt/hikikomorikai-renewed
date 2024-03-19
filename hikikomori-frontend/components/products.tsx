'use client'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import { ApiProduct } from '@/lib/definitions'
import Link from 'next/link'
export default function Products(){
	
	const [products, setData] = useState<ApiProduct[]>()
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((res) => res.data)
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
	if(products){
		console.log(products);
	}
  

 
  if (isLoading) return <p>Loading...</p>
  if (!products) return <p>No profile data</p>
 
  return (
		<div className='flex flex-wrap justify-center gap-24 '>
		{products.map((product, index) => (
			<Link key={index} href={`/product/${product.id}`}>
				<div
					key={index}
					className='font-raleway item group flex flex-col items-center w-[290px]'
				>
					<img
						width={250}
						height={250}
						src={`http://localhost:8000/storage/${product.images[0].image_path}`}
						alt={product.name}
						className='h-64 w-full max-w-[250px] object-contain'
					/>
					<h3 className='mt-10 text-l group-hover:text-red-700'>
						{product.name}
					</h3>
				</div>
			</Link>
		))}
	</div>
  )

}