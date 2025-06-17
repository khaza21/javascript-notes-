console.log(Boolean("")); // false
console.log(Boolean("Khaza")); // true

console.log(!!0);      // false
console.log(!!123);    // true
console.log(!!null);   // false
console.log(!!{});     // true


let username = "";        // Falsy value
let isLoggedIn = true;    // Truthy value

// 1. Falsy check in if-statement
if (!username) {
  console.log("Please enter a username!"); 
}

// 2. Use || to provide a default value
let displayName = username || "Guest";
console.log("Welcome,", displayName); 

// 3. Use && for short-circuit action
isLoggedIn && console.log("Show dashboard"); 