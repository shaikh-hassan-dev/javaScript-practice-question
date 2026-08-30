// In emergencies, either the master key OR an admin override can grant access. You must implement this OR logic to handle emergency scenarios.

// Create three variables: `hasMasterKey` (false), `isAdmin` (true), and `emergencyMode` (true). Write an if statement that grants access if the user has a master key OR (is an admin AND emergency mode is active). Log 'Emergency access granted' if conditions are met.

// Create your variables

// Write your OR logic
let hasMasterKey = false;
let isAdmin = true;
let emergencyMode = true;

if(hasMasterKey || (isAdmin && emergencyMode)){
  console.log("Emergency access granted");
}
