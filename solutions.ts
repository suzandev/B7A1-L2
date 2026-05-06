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

// console.log(checkType("Hello"));
// console.log(checkType(42));

//* Problem 4 solution */
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
console.log(getProperty(user, "name"));

//* Problem 5 solution */
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);
console.log(toggleReadStatus(myBook));
