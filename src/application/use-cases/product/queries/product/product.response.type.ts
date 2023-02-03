import { AppError, Result } from '@softobiz-df/shared-lib';
import { ProductErrors } from '../../product.error'
import { ProductDto } from '../../dto/product.dto';



export type GetProductReponseType = Result<ProductDto | ProductErrors.ProductNotFound | AppError>