export type FetchResponseModel<T> = {
    readonly resourceId: string;
    readonly resourceArgs: T | null;
}