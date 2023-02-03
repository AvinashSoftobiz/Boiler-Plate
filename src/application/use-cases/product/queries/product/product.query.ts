import { IRequest } from '@softobiz-df/shared-lib';
import { GetProductReponseType } from './product.response.type';

export class GetProductQuery implements IRequest<GetProductReponseType> {
		public id: string
	public constructor(init?: Partial<GetProductQuery>) {
		Object.assign(this, init)
	}
}
