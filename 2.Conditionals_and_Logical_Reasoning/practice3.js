// The facility has three security clearance levels. You must create a system that determines what message to display based on a user's clearance level.

// Create a variable named `clearanceLevel` and set it to `2`. Write an if-else-if-else chain that logs: - 'Maximum access granted' if level is 3 - 'Standard access granted' if level is 2 - 'Limited access granted' if level is 1 - 'No access' for any other value

// Create the clearanceLevel variable

// Write your if-else-if-else chain below
let clearanceLevel = 2;

if(clearanceLevel === 3){
  console.log("Maximum access granted");
} else if(clearanceLevel === 2){
  console.log("Standard access granted");
} else {
  console.log("No access");
}
