export default class Result<T> {

    code: number;

    msg: string;

    data: T;

    constructor(code: number, msg: string, data: T) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static success<T>(data: T): Result<T> {
        return new Result<T>(200, 'success', data);
    }

}