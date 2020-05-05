const sentence = "hello there from lighthouse labs";
let delay = 0;
const typewriter = ((sentence) => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    // write new line after last loop
    // console.log(delay);
    delay += 50;
  };
  setTimeout(() => {
    console.log();
  }, delay);
});

typewriter(sentence);
