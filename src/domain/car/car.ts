import { AggregateRoot,eDataSource, GenericAppError, Result,  UniqueEntityID } from '@softobiz-df/shared-lib';

interface CarProps {
	name: string

}
export class Car extends AggregateRoot<CarProps> {

  //#region member variables
	//#endregion

	//#region constants
	//#endregion

	//#region properties
	//#endregion

	//#region private methods
	private constructor(props: CarProps, id?: UniqueEntityID) {
		super(props, id)
	}
	//#endregion
	//#region private setters
	private setName(name: string) {
		this._props.name = name
		return Result.ok(this)
	}
  //#endregion

	//#region public methods
	public static create(props: CarProps, id?: UniqueEntityID, dataSource?: eDataSource) {
		if (dataSource === eDataSource.STORAGE) return Result.ok(new  Car(props, id))
		const  car = new  Car(Object.create(null), id)
		const validationQueue = [
			car.setName(props.name),
			

		]
		const combinedResult = Result.combine(validationQueue)
		if (combinedResult.isFailure) return Result.fail<Car>(new GenericAppError.DomainError(combinedResult.errorValue()))
		return Result.ok(car)
	}
	//#endregion

}
