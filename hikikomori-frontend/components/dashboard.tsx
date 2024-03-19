'use client'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import type { ApiProduct } from '@/lib/definitions'

export default function Dashboard(){
	const [data, setData] = useState<ApiProduct[]>()
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((res) => res.data)
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  

 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <div className='mt-[50px]'>
      <h1 className='text-red-500'>{data[0].name}</h1>
      <p>{data[0].description}</p>
			<img
        src={`http://localhost:8000/storage/${data[0].image}`}
        alt='anme'
        width={500}
        height={500}
      />
    </div>
  )
}