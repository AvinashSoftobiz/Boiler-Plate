import { Inject, Injectable } from '@nestjs/common';
import { AppLoggerService, IRequestHandler, Result,UniqueEntityID} from '@softobiz-df/shared-lib';
import { Product } from 'src/domain/product';
import { IProductRepository } from 'src/infrastructure/data-access/irepositories/iproduct.repository';
import { ProductDto } from '../../dto/product.dto';
import { ProductErrors } from '../../product.error';
import { GetProductQuery } from './product.query';
import { GetProductReponseType } from './product.response.type';

@Injectable()
export class GetProductQueryHandler implements IRequestHandler<GetProductQuery, GetProductReponseType> {
	private readonly _logger = AppLoggerService.getLogger(GetProductQueryHandler)

	constructor(@Inject(IProductRepository) private readonly _productRepo: IProductRepository) {}

	async handle(query: GetProductQuery, _token?: string): Promise<GetProductReponseType> {
		
		const product: Result<Product> = await this._productRepo.findById(new UniqueEntityID(query.id))
		if (product.isFailure) return Result.fail(new ProductErrors.ProductNotFound())
		const productValue = product.getValue()
		const productDto = new ProductDto({
			name: productValue.props.name,
		
		
		})
		return Result.ok(productDto)
	}
}
