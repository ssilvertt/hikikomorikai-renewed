'use client';

import { ProductImage } from '@/util/definitions';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import Image from 'next/image';

import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';

interface GalleryProps {
	images: ProductImage[];
}

export default function Gallery({ images }: GalleryProps) {
	const onInit = () => {};

	return (
		<LightGallery
			onInit={onInit}
			speed={500}
			plugins={[lgThumbnail, lgZoom]}
			thumbnail={false}
			download={false}
			
		>
			{images.map((image, index) => {
				return (
					<a
						key={index}
						href={`http://localhost:8000/storage/${image.image_path}`}
						className='drop-shadow-none'
					>
						<Image
							alt=""
							src={`http://localhost:8000/storage/${image.image_path}`}
							width={80}
							height={80}
							unoptimized={true}
							className="h-20 w-20 object-cover rounded-full brightness-50 hover:brightness-150 transition-all
							drop-shadow-[0_0_4px_#a34d4d]
							hover:drop-shadow-[0_0_4px_#a34d4d]"
						/>
					</a>
				);
			})}
		</LightGallery>
	);
}
