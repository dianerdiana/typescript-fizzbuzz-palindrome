import { RuleInterface } from '../model/WordGenerator';
import { FizzBuzz } from './FizzBuzz';

// Create BazzRule
class BazzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 7 === 0;
  }

  getReplacement(): string {
    return 'Bazz'
  }
}

class FizzBuzzBazz extends FizzBuzz {
  constructor() {
    super()
    this.addRule(new BazzRule())
  }
}

const fizzBuzzBazz = new FizzBuzzBazz();

export { fizzBuzzBazz };