import { AppError, RecordIdModel, Result } from '@softobiz-df/shared-lib';

export type ProductCreateResponseType = Result<RecordIdModel | AppError>