import { Body, Controller, Get, Post, Query} from '@nestjs/common';
import { IMediator, Result } from '@softobiz-df/shared-lib';
import { ProductCreateCommand } from '../use-cases/product/commands/product/product.cmd';
import { ProductCreateResponseType } from '../use-cases/product/commands/product/product.response.type';
import { GetProductQuery } from '../use-cases/product/queries/product/product.query';
import { GetProductReponseType } from '../use-cases/product/queries/product/product.response.type';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
	constructor(private readonly _mediator: IMediator) {}

  
	@Post('create')
	async createProduct(@Body() payload: ProductCreateCommand): Promise<ProductCreateResponseType> {
		return this._mediator.send<ProductCreateResponseType>(new ProductCreateCommand(payload))
	}


  @ApiQuery({name: 'id',description: 'Gets the Action id'})
	@Get()
	async getProduct(@Query("id") id): Promise<GetProductReponseType> {
		return this._mediator.send<GetProductReponseType>(new GetProductQuery({ id }))

	}

	@Get("health")
    async getHealth(): Promise<Result<string>> {
        return Result.ok(" Service running ")

    }
}
