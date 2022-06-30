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
