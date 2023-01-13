// Import RuleInterface and Class WordGenerator
import { RuleInterface, WordGenerator } from '../model/WordGenerator';

class FizzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0;
  }

  getReplacement(): string {
    return 'Fizz'
  }
}

class BuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 5 === 0;
  }

  getReplacement(): string {
    return 'Buzz'
  }
}

class FizzBuzz extends WordGenerator {
  constructor() {
    super()
    this.addRule(new FizzRule())
    this.addRule(new BuzzRule())
  }
}

const fizzBuzz = new FizzBuzz();

export { fizzBuzz, FizzBuzz };