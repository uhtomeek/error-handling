import { ErrorCode, ErrorMessage } from '../enums';

export class ErrorUtil {
	static of(e: unknown) {
		let err: Error = e as Error;

		switch (err.name) {
			case ErrorCode.EMAIL_ALREADY_EXISTS:
				return ErrorMessage.EMAIL_UNAVAILABLE;
			case ErrorCode.INSUFFICIENT_PERMISSIONS:
				return ErrorMessage.UNAUTHORIZED;
			case ErrorCode.INVALID_EMAIL:
				return ErrorMessage.INVALID_EMAIL;
			case ErrorCode.INVALID_PHONE_NUMBER:
				return ErrorMessage.INVALID_PHONE_NUMBER;
			case ErrorCode.PHONE_NUMBER_ALREADY_EXISTS:
				return ErrorMessage.PHONE_NUMBER_UNAVAILABLE;
			case ErrorCode.USER_NOT_FOUND:
				return ErrorMessage.USER_NOT_FOUND;
			case ErrorCode.USER_DISABLED:
				return ErrorMessage.USER_DISABLED;
			case ErrorCode.SESSION_HAS_EXPIRED:
				return ErrorMessage.SESSION_EXPIRED;
			default:
				return ErrorMessage.DEFAULT;
		}
	}
}