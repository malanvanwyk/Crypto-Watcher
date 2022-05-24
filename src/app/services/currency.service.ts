import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private selectedCurrency$: BehaviorSubject<string> = new BehaviorSubject<string>("ZAR");

  constructor() { }

  getCurrency() {
    return this.selectedCurrency$.asObservable();
  }

  setCurrency(curreny: string) {
    this.selectedCurrency$.next(curreny);
  }

}
