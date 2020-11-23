class AClass {
  constructor(a = 0, b = 0) {
    this.rVal = (a + b);
    this.rVal += 1;
    return this.rVal;
  }
}
exports.AClass = AClass;
