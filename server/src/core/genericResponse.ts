export class GenericResponse<T>{
    private status: string;
    private error: string;
    private data: T;

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getError(): string {
        return this.error;
    }

    public setError(error: string): void {
        this.error = error;
    }

    public getData(): T {
        return this.data;
    }

    public setData(data: T): void {
        this.data = data;
    }
}