class PalindromeGenerator {
  public generate(input: string | number) : string  {
    return this.isPalindrome(input);
  }

  protected isPalindrome(input: string | number) {
    if (this.palindrome(input)) {
      return `${input} is palindrome`
    }

    return `${input} is not palindrome`
  }

  protected palindrome(input: string | number): boolean {
    let reverse;
    if (typeof input === 'number') {
      reverse = input.toString().split('').reverse().join('')
    } else {
      reverse = input.split('').reverse().join('');
    }

    return input === reverse;
  }
}

export { PalindromeGenerator };