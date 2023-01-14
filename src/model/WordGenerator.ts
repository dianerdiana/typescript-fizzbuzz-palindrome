// Create interface rule
interface RuleInterface {
  matches(number: number): boolean;
  getReplacement(): string;
}

class WordGenerator {
  // Array contains all added rules
  protected rules: RuleInterface[] = [];

  // Method for Add Rule then push to array contains all rules
  public addRule(rule: RuleInterface) {
    this.rules.push(rule);
  }

  // Generate input 
  public generate(start: number, end: number) {
    const output: string[] = [];

    // Loop for check every number
    // Then insert it to output with replacement
    for (let i = start; i <= end; i++) {
      output.push(this.getReplacement(i));
    }

    // Remove comma(,) from output then return it
    return output.toString().replace(/,/g,', ')
  }

  // Check the input has replacement or not
  protected getReplacement(input: number) : string {
    const replacement_arr: string[] = [];
    
    // Check the input is match one or more rule from rules
    // If match, we temporarely store replacement string in replacement_arr
    for (const rule of this.rules) {
      if (rule.matches(input)) {
        replacement_arr.push(rule.getReplacement());
      }
    }

    // Remove comma(,) from replacement_arr if has value. And return it
    if (replacement_arr.length > 0) {
      return replacement_arr.toString().replace(/,/g,'');
    }
    
    // If don't match with any replacement, return the input
    return String(input);
  }
}

export { RuleInterface, WordGenerator};
