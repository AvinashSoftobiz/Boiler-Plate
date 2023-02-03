import { IDTO } from '@softobiz-df/shared-lib';

export class ProductDto implements IDTO {
	
	public name: string

	public constructor(init?: Partial<ProductDto>) {
		Object.assign(this, init)
	}
}
