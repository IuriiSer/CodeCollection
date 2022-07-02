// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

function pascalsTriangle(_depth) {
  const triangle = [[1]]; // array to export
  // for every depth we will calc row and write it to triangle
  for (let depth = 0; depth < _depth - 1; depth++) {
    triangle.push([]); // before calc we need to create a new array for this row
    for (let rowInd = -1; rowInd < triangle[depth].length; rowInd++) {
      // every entity is summ of 2 adjacent numbers from the previous row
      // that because we should check values if it is undefiend -> 0
      triangle[depth + 1].push(
        (triangle[depth][rowInd] || 0) + (triangle[depth][rowInd + 1] || 0)
      );
    }
  }
  return triangle.flat();
}
