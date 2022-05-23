import { Injectable } from '@angular/core';
import { IStorage } from 'src/app/shared/interfaces/storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements IStorage {

  constructor() { }

  public fetchToken<T>(tokenName: string): T | null {
    const token = localStorage.getItem(tokenName);

    return token !== null ? JSON.parse(token) : null;
  }

  public createToken<T>(tokenName: string, tokenValue: T): void {
    return localStorage.setItem(tokenName, JSON.stringify(tokenValue));
  }

  public deleteToken(tokenName: string): void {
    return localStorage.removeItem(tokenName);
  }

  public clearTokens(): void {
    return localStorage.clear();
  }
}
