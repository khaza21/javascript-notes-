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


