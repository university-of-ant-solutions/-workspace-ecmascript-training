function existy(x) { return x != null };

function dispatch(...funs) {
  const size = funs.length;
  return function(target, ...args) {
    let ret = undefined;
    for (let funIndex = 0; funIndex < size; funIndex++) {
      const fun = funs[funIndex];
      ret = fun.apply(fun, [target, ...args]);
      if (existy(ret)) return ret;
    }
    return ret;
  };
}
