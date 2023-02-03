import { RecordIdModel, Result } from "@softobiz-df/shared-lib";
import { IProductRepository } from'../../../../../infrastructure/data-access/irepositories/iproduct.repository';
import { ProductCreateCommand } from "./product.cmd";
import { ProductCreateCommandHandler } from "./product.cmd.handler";

describe('ProductCreateCommandHandler', () => {
  let commandHandler:ProductCreateCommandHandler,
  _productRepo:IProductRepository

	beforeEach(async () => {
		_productRepo = new (jest.fn<IProductRepository, []>(() => Object.create(null) as IProductRepository))()
		commandHandler = new ProductCreateCommandHandler(_productRepo)
	})

  it('should create program as product filled all details', async () => {
		_productRepo.save = (inputProgram) => Promise.resolve(Result.ok(inputProgram))
  
    const command= new ProductCreateCommand({
     name:'name'

    })
      const product = await commandHandler.handle(command)
      // console.log('resultFailed');
      
      expect(product.isSuccess).toBe(true)
      expect((product.getValue() as RecordIdModel).id).toBeDefined()
    })
	
})