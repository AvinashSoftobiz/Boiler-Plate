import { Module } from '@nestjs/common';
import { ProductController } from 'src/application/rest-api/product.controller';
import { ProductSqlRepositoryModule } from 'src/infrastructure/data-access/sql-repositories/product-sql-repository.module';
import { ProductCreateCommand } from './commands/product/product.cmd';
import { ProductCreateCommandHandler } from './commands/product/product.cmd.handler';
import { GetProductQuery } from './queries/product/product.query';
import { GetProductQueryHandler } from './queries/product/product.query.handler';

@Module({
	imports: [ProductSqlRepositoryModule], // use MongoRepositoryModule if using Mongodb
	controllers: [ProductController],
	providers: [
		{ provide: ProductCreateCommand, useClass: ProductCreateCommandHandler },
		{ provide: GetProductQuery, useClass: GetProductQueryHandler },
		
	],
})
export class ProductModule {}
