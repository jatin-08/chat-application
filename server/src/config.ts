export const path = `/chatapplication/api`;
export const port = 3201;
export const dbString = `mongodb+srv://yadavjatin137:yadavjatin137@cluster0.zu0rl6q.mongodb.net/ChatApplication?retryWrites=true&w=majority`;
export const secretKey = `abcdefghijklmnopqrstuvwxyz0123456789`;
export const jwtExp = `1d`;

export enum StatusCode{
    SUCCESS = '1000',
    FAILURE = '1001',
    RETRY = '1002',
    INVALID_TOKEN = '1003'
}

export enum ResponseCode{
    SUCCESS = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_FOUND = 405,
    INTERNAL_ERROR = 500,
}
