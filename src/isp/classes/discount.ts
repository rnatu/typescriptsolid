export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;

    //% forçando a implementação do método nas subclasses
    //% throw new Error('Not implemented Error');
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
