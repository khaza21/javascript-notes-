console.log("Start");

setTimeout(() => {
  console.log("This runs after 3 seconds");
}, 3000);

console.log("End");



function showMessage() {
  console.log("This message is delayed by 2 seconds.");
}

setTimeout(showMessage, 2000);


let timeoutID = setTimeout(() => {
  console.log("You won't see this");
}, 3000);

clearTimeout(timeoutID);


for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("Delayed number:", i);
  }, i * 1000);
}
