import { GenericAppError } from '@softobiz-df/shared-lib';

export namespace ProductErrors {
	export class ProductNotFound extends GenericAppError.NotFoundError {
		constructor() {
			super()
			this.message = 'Product not found!'
		}
	}
}
