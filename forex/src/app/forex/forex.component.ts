import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../core/currencies.service';
import { Currencies } from '../models/currencies.model';
import { Rate } from '../models/rate.model';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.scss'],
})
export class ForexComponent implements OnInit {
  currentDate: string;
  base: string;
  rates: Rate[];
  private increase = true;
  private intervalId: number;
  private fiveMinInterval: number;

  constructor(private currenciesService: CurrenciesService) {}

  ngOnInit(): void {
    this.currenciesService.getRates().subscribe((result) => {
      this.currentDate = result.date;
      this.base = result.base;
      this.rates = this.transformRates(result.rates);

      this.changeRate(this.increase);

      this.fiveMinInterval = setInterval(() => {
        this.increase = !this.increase;
        clearInterval(this.intervalId);
        this.changeRate(this.increase);
      }, 60000);

      setTimeout(() => {
        clearInterval(this.fiveMinInterval);
        clearInterval(this.intervalId);
      }, 5 * 60000);
    });
  }

  private transformRates(rates): Rate[] {
    const currencyKeys: string[] = Object.keys(rates);
    const transformedRates: Rate[] = currencyKeys.map((currency) => {
      return { currency, value: rates[currency] };
    });

    return transformedRates;
  }

  private increaseRate(): void {
    this.rates.forEach((rate) => {
      rate.value += 0.0001;
      rate.indicator = 'up';
    });
  }

  private decreaseRate(): void {
    this.rates.forEach((rate) => {
      if (rate.value > 1.0002) {
        rate.value -= 0.0001;
      }
      rate.indicator = 'down';
    });
  }

  private changeRate(increaseRate: boolean): void {
    this.intervalId = setInterval(() => {
      increaseRate ? this.increaseRate() : this.decreaseRate();
    }, 5000);
  }
}
