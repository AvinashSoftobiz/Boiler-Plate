import { IRequest } from '@softobiz-df/shared-lib';
import { IsOptional } from 'class-validator';
import { ProductCreateResponseType } from './product.response.type';
import { ApiProperty } from '@nestjs/swagger';



export class ProductCreateCommand implements IRequest<ProductCreateResponseType> {
	@IsOptional()
	@ApiProperty()
	public name: string
  
	public constructor(init?: Partial<ProductCreateCommand>) {
		Object.assign(this, init)
	}
}