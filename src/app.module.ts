import { Module } from '@nestjs/common';
import { ConfigurationModule } from './infrastructure/configuration/configuration.module';
import { ProductModule } from "./application/use-cases/product/product.module";

@Module({
	imports: [ConfigurationModule, ProductModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
