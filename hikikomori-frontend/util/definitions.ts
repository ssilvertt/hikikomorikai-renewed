export type ResponseError = {
	response: {
		status: number;
		data: {
			errors?: { [key: string]: string[] };
		};
	};
};

export type SetErrors = (errors: { [key: string]: string[] }) => void;

export type SetStatus = {
	(status: string | null): void;
};

export type User = {
	id: number;
	name: string;
	email: string;
	email_verified_at?: string;
	created_at: string;
	updated_at: string;
};

export type ApiProduct = {
	id: number;
	name: string;
	description: string;
	price: string;
	images: ProductImage[];
	created_at: string;
	updated_at: string;
};

export type ProductImage = {
	id: number;
	product_id: number;
	image_path: string;
	created_at: string;
	updated_at: string;
};


export interface CartItem extends ApiProduct {
	count: number;
}
