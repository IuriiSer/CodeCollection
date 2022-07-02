// DESCRIPTION

// You must create a method that can convert a string from any format into PascalCase. This must support symbols too.
// Don't presume the separators too much or you could be surprised.

// Example
// "example name" --> "ExampleName"
// "your-NaMe-here" --> "YourNameHere"
// "testing ABC" --> "TestingAbc"

// https://www.codewars.com/kata/525821ce8e7b0d240b002615/javascript 6

const camelize = (str) =>
  str
    .split(/[^a-z0-9]/gi)
    .map((el) => {
      if (!el) return;
      return el[0].toUpperCase() + el.substr(1).toLowerCase();
    })
    .join("");
