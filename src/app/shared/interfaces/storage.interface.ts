export interface IStorage {
    fetchToken<T>(tokenName: string): T | null;
    createToken<T>(tokenName: string, tokenValue: T): void;
    deleteToken(tokenName: string): void;
    clearTokens(): void;
}