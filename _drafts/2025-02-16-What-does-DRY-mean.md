The Correct Application of DRY in Code

# What does DRY mean?

DRY stands for Don't Repeat Yourself. It means reducing complexity of code by eliminating duplication. 
The purest form of code smells is duplication. The natural process of abstraction is to first write the code in triplicate. 
Then find and make the duplication obvious. Finally, remove the duplication.

# When to apply DRY

## In Production Code: Across logic within a function
The Roman Numerals gives a good example of removing duplication. The following code shows obvious duplication with each if statement:

```ts
let result = ''

if (num >= 90) {
    num -= 90
    result += 'XC'
}

if (num >= 50) {
    num -= 50
    result += 'L'
}

if (num >= 40) {
    num -= 40
    result += 'XL'
}
// more here
```

Realizing that this behaviour can be put into a loop using a declared data structure is a key insight. First, we at minimum
triplicate the duplication. Then we remove the duplication. The refactored code is the following:

```ts
        let result = ''

        let array = [
            {  numeral: 'XC', value: 90  },
            {  numeral: 'L',  value: 50  },
            {  numeral: 'XL', value: 40  },
        ]
        array.forEach(({numeral, value}) => {
            if (num >= value) {
                num -= value
                result += numeral
            }
        })
```

## In Test Code: Parametrize Tests Where Possible

Theories are an excellent way to make tests more maintainable. They allow for obvious duplication of tests, easy understanding,
and fewer lines written (which is more maintainable).

From the same Roman Numeral Kata, we initially start with the tests:

```ts
describe('Roman Numerals', ({input, result}) => {
  it('should return I when given 1', () => {
    // Arrange
    const romanNumerals = new RomanNumerals()
 
    // Act
    const answer = romanNumerals.convert(1)
 
    // Assert
    expect(answer).toBe('I');
  })
 
  it('should return II when given 2', () => {
    // Arrange
    const romanNumerals = new RomanNumerals()
 
    // Act
    const answer = romanNumerals.convert(2)
 
    // Assert
    expect(answer).toBe('II')
  })
})
```

There is obvious duplication here, as each test will map a number to a Roman Numeral. The refactored test suite is a 
parameterized test:

```ts
describe.each([{
  input: 1,
  result: 'I'
}, {
  input: 2,
  result: 'II'
}, {
  input: 3,
  result: 'III'
}])('Roman Numerals', ({input, result}) => {
  it(`should return ${result} when given ${input}`, () => {
    // Arrange
    const romanNumerals = new RomanNumerals()
 
    // Act
    const answer = romanNumerals.convert(input)
 
    // Assert
    expect(answer).toBe(result);
  })
})
```