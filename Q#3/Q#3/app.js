/*Name Cases: Store a person’s name in a variable, and then
 print that person’s name in lowercase, uppercase, and titlecase.*/
var myName = "Talha Tauseef";
console.log(myName);
//print in lowercase
console.log("lowercase : ".concat(myName.toLowerCase()));
//print in uppercase
console.log("uppercase : ".concat(myName.toUpperCase()));
//print in Title Case
console.log("Titlecase: ".concat(myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); })));
