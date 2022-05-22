export type DeleteResponseModel<T> = {
    readonly resourceId: string;
    readonly oldResourceURL: string;
    readonly resourceArgs: T | null;
}