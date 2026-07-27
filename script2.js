
function flatten(arr, acc = []) {
  if (arr.length === 0) return acc;

  const [first, ...rest] = arr;

  if (Array.isArray(first)) {
  
    return flatten(rest, flatten(first, acc));
  }

  acc.push(first);
  return flatten(rest, acc);
}


function trampoline(fn) {
  return function (...args) {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
}


function flattenStep(arr, acc = []) {
  if (arr.length === 0) return acc;

  const [first, ...rest] = arr;

  if (Array.isArray(first)) {

    return () => flattenStep([...first, ...rest], acc);
  }

  acc.push(first);
  return () => flattenStep(rest, acc);
}

const flattenTrampolined = trampoline(flattenStep);


const nested = [1, [2, 3, [4, 5, [6, [7, [8, 9]]]]], 10];

console.log(flatten(nested));               // [1,2,3,4,5,6,7,8,9,10]
console.log(flattenTrampolined(nested));    // [1,2,3,4,5,6,7,8,9,10]

module.exports = { flatten, flattenTrampolined, trampoline };
