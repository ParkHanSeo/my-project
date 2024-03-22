import { AxiosError } from 'axios';
import { ApiError } from '@/errors/api/ApiError';

export class UserApiError extends ApiError<unknown> {
    constructor(error: AxiosError<unknown>) {
		super(error);
		this.name = 'UserApiError';
	}
}