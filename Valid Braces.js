// Valid Braces

// DESCRIPTION
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// Example
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// Task from CodeWars by @xDranik
// Difficult 6kui

function validBraces(braces) {
  // to collect braces that we are waiting
  const brCouldBe = [],
    brOpen = ["(", "{", "["],
    brClose = [")", "}", "]"];
  // if one of brOpen we push brClose in brCouldBe (that will close brOpen)
  // if brClose -> check in brCouldBe that brClose is correct
  return (
    braces.split("").every((brace) => {
      const brIndex = brOpen.findIndex((_brace) => _brace === brace);
      if (~brIndex) {
        brCouldBe.push(brClose[brIndex]);
        return true;
      }
      // or brCouldBe.at(-1)
      if (brCouldBe.pop() === brace) {
        return true;
      }
      // if we get brClose that not expected -> return false
      return false;
    }) && !brCouldBe.length
  ); // also brCouldBe length must be equal 0
}
