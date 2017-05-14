export class Transaction {
  date: any = new Date();
  desc: string = null;
  destination: string = null;
  category: string = null;
  quantity: number = 0;
  price: number = 0;
  mode: string = null;
  source: string = null;

  /**
   *
   */
  constructor(date: any
    , desc: string
    , destination: string
    , category: string
    , quantity: number
    , price: number
    , mode: string
    , source: string) {
    this.date = date;
    this.desc = desc;
    this.destination = destination;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.mode = mode;
    this.source = source;
  }
}
