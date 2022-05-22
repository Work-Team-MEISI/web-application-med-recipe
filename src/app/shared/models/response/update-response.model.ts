export type UpdateResponseModel<T> = {
    readonly resourceId: string;
    readonly oldResourceURL: string;
    readonly newResourceURL: string;
    readonly resourceArgs: T | null;
}