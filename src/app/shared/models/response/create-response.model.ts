export type CreateResponseModel<T> = {
    readonly resourceId: string;
    readonly resourceURL: string;
    readonly resourceArgs: T | null;
}