import { ResponseCode, StatusCode } from "../config";
import express from 'express';

abstract class ApiResponse {
    constructor(protected statusCode: StatusCode, protected status: ResponseCode, protected message: string) {

    }

    protected prepareResponse(res: express.Response): express.Response {    
        return res.status(this.status).json({ status: this.statusCode, message: this.message })
    }

    public send(res: express.Response): express.Response {
        return this.prepareResponse(res)
    }
}

export class BadRequestResponse extends ApiResponse{
    constructor(message = 'Bad Request'){
        super(StatusCode.FAILURE, ResponseCode.BAD_REQUEST,message)
    }
}

export class InteralErrorResponse extends ApiResponse{
    constructor(message = 'Internal Server Error'){
        super(StatusCode.FAILURE, ResponseCode.INTERNAL_ERROR,message)
    }
}