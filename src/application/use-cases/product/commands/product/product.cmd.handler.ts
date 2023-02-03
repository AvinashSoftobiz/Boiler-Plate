import { Inject, Injectable } from '@nestjs/common';
import { AppLoggerService, IRequestHandler,RecordIdModel, Result} from '@softobiz-df/shared-lib';
import { Product } from '../../../../../domain/product/product';
import { IProductRepository } from '../../../../../infrastructure/data-access/irepositories/iproduct.repository';
import { ProductCreateCommand } from './product.cmd';
import { ProductCreateResponseType } from './product.response.type';

@Injectable()
export class ProductCreateCommandHandler implements IRequestHandler<ProductCreateCommand, ProductCreateResponseType> {
	private readonly _logger = AppLoggerService.getLogger(ProductCreateCommandHandler)

	constructor(@Inject(IProductRepository) private readonly _productRepo: IProductRepository) {}
	async handle(commandOrQuery: ProductCreateCommand, token?: string): Promise<ProductCreateResponseType> {

	const product = Product.create({
			name: commandOrQuery.name,
		})
		if (product.isFailure) return Result.fail(product.errorValue())

		const productValue = product.getValue()
		await this._productRepo.save(productValue)

		return Result.ok(new RecordIdModel({ id: productValue.id.toString() }))
	}

	}
