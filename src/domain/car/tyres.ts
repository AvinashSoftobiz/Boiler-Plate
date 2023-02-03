import { eDataSource, GenericAppError, Result, UniqueEntityID, Entity } from '@softobiz-df/shared-lib'

interface TyresProps {
	name: string	
}
export class Tyres extends Entity<TyresProps> {
	//#region member variables
	//#endregion

	//#region constants
	//#endregion

	//#region properties
	//#endregion

	//#region private methods
	private constructor(props: TyresProps, id?: UniqueEntityID) {
		super(props, id)
	}
	//#endregion

	//#region private setters
	private setName(name: string){
		this._props.name = name
		return Result.ok(this)
	}
	
	//#endregion

	//#region public methods
	public static create(props: TyresProps, id?: UniqueEntityID, dataSource?: eDataSource) {
		if (dataSource === eDataSource.STORAGE) return Result.ok(new Tyres(props, id))
		const tyres = new Tyres(Object.create(null), id)
		const validationQueue = [
			tyres.setName(props.name)	
		]
		const combinedResult = Result.combine(validationQueue)
		if (combinedResult.isFailure) return Result.fail<Tyres>(new GenericAppError.DomainError(combinedResult.errorValue()))
		return Result.ok(tyres)
	}
	//#endregion
}

