let counter = 0;

function recurse() {
  counter++;
  recurse();
}

try {
  recurse();
} catch (error) {
  console.log(error);
  console.log(counter);
}
