class Range {
  constructor(start, end, step = 1) {
    if (step === 0) {
      throw new Error("Step cannot be zero.");
    }
    if (end === undefined) {
      end = start;
      start = 0;
    }
    this.start = start;
    this.end = end;
    this.step = step;
  }
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    const step = this.step;
    return {
      next() {
        if (step > 0 ? current < end : current > end) {
          const result = { value: current, done: false };
          current += step;
          return result;
        } else {
          return { done: true };
        }
      }
    };
  }
}
