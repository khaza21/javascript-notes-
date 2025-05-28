function makeSandwich() {
  console.log("Start: Making a sandwich");
  getBread(); 
  console.log("Finish: Sandwich is ready");
}

function getBread() {
  console.log("Step: Getting bread");
  goToKitchen(); 
  console.log("Step: Got bread");
}

function goToKitchen() {
  console.log("Step: Walking to the kitchen");
  console.log("Step: In the kitchen");
}

makeSandwich(); 

/*2 function */

function readStory() {
  console.log("Start reading the story");
  readChapter1();
  readChapter2();
  readChapter3();
  console.log("Finished reading the story");
}

function readChapter1() {
  console.log("Reading Chapter 1: The Beginning");
}

function readChapter2() {
  console.log("Reading Chapter 2: The Adventure");
  readShortStory();
}

function readShortStory() {
  console.log("Reading a short story inside Chapter 2");
}

function readChapter3() {
  console.log("Reading Chapter 3: The End");
}

readStory();