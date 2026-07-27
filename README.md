# ALAB308A.1.1 — Recursion & Stack Management in JavaScript

A set of small exercises exploring how JavaScript handles recursion, stack overflows, and techniques for avoiding them (trampolining and deferred/async recursion).

## Files

### `script.js`
Demonstrates an unbounded recursive call (`recurse`) that grows a counter on every call until it blows the call stack. Catches the resulting `RangeError` and logs how many recursive calls were made before overflow.

Run with:
```
node script.js
```

### `script2.js`
Compares two approaches to flattening a nested array:
- `flatten` — a standard recursive implementation, subject to stack overflow on very deep nesting.
- `flattenStep` + `trampoline` — a trampolined version where each recursive step returns a thunk instead of calling itself directly, letting `trampoline` unwind the calls in a loop instead of on the call stack.

Run with:
```
node script2.js
```

### `index.html` / `index.js`
A browser-based example that calculates prime numbers from 1 to 10,000. Instead of a tight recursive/looping call, `addPrimes` schedules its next call via `setTimeout`, deferring each step to a new event loop tick so the stack never grows deep, and the page stays responsive. Results are appended to the `#output` element in the page, with an alert shown when the calculation finishes.

Open `index.html` in a browser to run it.

## Concepts covered
- Call stack growth and `RangeError: Maximum call stack size exceeded`
- Trampolining as a pattern to convert recursion into iteration
- Deferred recursion via `setTimeout` to avoid blocking the main thread / stack
