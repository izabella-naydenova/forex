import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Currencies } from '../models/currencies.model';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  constructor(private readonly http: HttpClient) {}

  public getRates(): Observable<Currencies> {
    const url = './assets/data/currencies.json';
    return this.http.get<Currencies>(url);
  }
}
