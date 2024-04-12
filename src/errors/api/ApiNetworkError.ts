import { ApplicationError } from '@/errors/ApplicationError';

/**
 * API ネットワークエラーです
 * API がネットワークエラー発生された場合に throw されます
 */
export default class ApiNetworkError extends ApplicationError {
	/**
	 * コンストラクタ
	 */
	constructor() {
		super(`API network error`);
	}
}
