import express from 'express';
import { ResponseCode } from '../config';
import { BadRequestResponse, InteralErrorResponse } from './apiResponse';

export enum ErrorType {
    BAD_TOKEN = 'BadTokenError',
    UNAUTHORIZED = 'UnauthorizedError',
    NO_DATA = 'NoDataFoundError',
    FORBIDDEN = 'ForbiddenError',
    INTERNALSERVER = 'InternalServerError',
    METHOD_NOT_FOUND = 'MethodNotFoundError',
    BAD_REQUEST = 'BadRequestError',
    DB_ERROR = 'DatabaseError',
    CORS_ERROR = 'CorsError'
}

export abstract class ApiError extends Error {
    constructor(public type: ErrorType, public message: string) {
        super(type)
    }

    public static errorHandler(err: ApiError, res: express.Response): any {
        switch (err.type) {
            case ErrorType.BAD_REQUEST:
                return new BadRequestResponse(err.message).send(res)

            default:
                return new InteralErrorResponse(err.message).send(res)
        }
    }
}

export class BadRequest extends ApiError {
    constructor(message = 'Bad Request') {
        super(ErrorType.BAD_REQUEST, message)
    }
}

export class InteralError extends ApiError {
    constructor(message = 'Internal Server Error') {
        super(ErrorType.INTERNALSERVER, message)
    }
}