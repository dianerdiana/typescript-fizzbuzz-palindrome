// Create interface rule
interface RuleInterface {
  matches(number: number): boolean;
  getReplacement(): string;
}

// Create "FizzBuzz" class
class WordGenerator {
  protected rule: RuleInterface[] = [];

  public addRule(rule: RuleInterface) {
    this.rule.push(rule);
  }

  public generate(start: number, end: number) {
    const output: string[] = [];

    for (let i = start; i <= end; i++) {
      output.push(this.getReplacement(i));
    }

    return output.toString().replace(/,/g,', ')
  }

  protected getReplacement(input: number) : string {
    const replacer: string[] = [];

    for (const rule of this.rule) {
      if (rule.matches(input)) {
        replacer.push(rule.getReplacement());
      }
    }

    return this.getOutput(input, replacer);
  }

  protected getOutput(input: number, replacer: string[]): string {
    if (replacer.length > 0) {
      return replacer.toString().replace(/,/g,'');
    } else {
      return String(input);
    }
  }
}

export { RuleInterface, WordGenerator};
