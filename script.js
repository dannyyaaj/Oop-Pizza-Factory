class Pizza {
  constructor(topping = 'cheese', size = 'medium', price = 10.99) {
    this.topping = topping;
    this.size = size;
    this.price = price;
  }
  addTopping(topping) {
    this.price += .99;
    return this.topping = [this.topping, topping]
  }
  upgradeSize() {
    if (this.size = 'small') {
      this.size = 'medium';
      this.price += 2;
    } else if (this.size = 'medium') {
      this.size = 'large';
      this.price += 2;
    }
  }
  downgradeSize() {
    if (this.size = 'large') {
      this.size = 'medium';
      this.price -= 2;
    } else if (this.size = 'medium') {
      this.size = 'small';
      this.price -= 2;
    }
  }
};
