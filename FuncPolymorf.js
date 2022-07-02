function Polymorph() {
  const len2func = [];
  for (let i = 0; i < arguments.length; i++)
    if (typeof arguments[i] == "function")
      len2func[arguments[i].length] = arguments[i];
  return function () {
    return len2func[arguments.length].apply(this, arguments);
  };
}

const newPolymorph = Polymorph(
  function (a, b) {},
  function (c, e) {}
);
