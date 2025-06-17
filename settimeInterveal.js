// setInterval(() => {
//   console.log("This prints every second");
// }, 1000);




let count = 1;

let timer = setInterval(() => {
  console.log("Count:", count);
  count++;

  if (count > 5) {
    clearInterval(timer); 
  }
}, 1000);