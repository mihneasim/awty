export class EEvent { // because Event is taken
  constructor(
    public name: string = '',
    public day: Date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    public useTime: boolean = false
  ) { }

  private zeropad2 = (int: number) => ('0' + int).substr(-2);

  /**
   * The following set/get methods help you
   * to use htmlDate and dayTime in date/time html5 inputs
   * with ngModel
   */
  set htmlDate(input: string) {
    let parts: string[] = input.split('-');
    parts[1] = (parseInt(parts[1]) - 1).toString();
    this.day.setFullYear.apply(this.day, parts.map((part) => parseInt(part)));
  }

  get htmlDate() {
    let parts = [this.day.getFullYear().toString(),
      this.zeropad2(this.day.getMonth() + 1), this.zeropad2(this.day.getDate())];
    return `${parts[0]}-${parts[1]}-${parts[2]}`;
  }

  set dayTime(input: string) {
    if (input.indexOf('-') === -1) {
      let parts:number[] = input.split(':').map((x) => parseInt(x));
      this.day.setHours(parts[0], parts[1]);
    }
  }

  get dayTime() {
    return this.zeropad2(this.day.getHours()) + ':' + this.zeropad2(this.day.getMinutes());
  }
}
