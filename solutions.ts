//* Problem 1 solution */

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

//* Problem 2 solution */

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

//* Problem 3 solution */

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  } else {
    return "Please give me only string or number";
  }
}

console.log(checkType("Hello"));
console.log(checkType(42));
