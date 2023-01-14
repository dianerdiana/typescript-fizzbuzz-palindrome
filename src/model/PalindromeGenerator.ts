class PalindromeGenerator {
  // Generate input
  public generate(input: string | number) : string  {
    if (this.isPalindrome(input)) {
      return `${input} is palindrome`
    }

    return `${input} is not palindrome`
  }

  // Check the input is palindrome or not
  protected isPalindrome(input: string | number) : boolean {
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