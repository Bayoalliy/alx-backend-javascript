import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof currency !== typeof new Currency()) {
      throw new TypeError('wrong type');
    }
    this._currency = currency;
    this._amount = amount;
  }

  displayFullPrice() {
    return (`${this.amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }

  get amount() {
    return (this._amount);
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return (this._currency);
  }

  set currency(value) {
    this._currency = value;
  }
}
