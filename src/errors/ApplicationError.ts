export class ApplicationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'ApplicationError';
		Object.setPrototypeOf(this, new.target.prototype);
	}
}
