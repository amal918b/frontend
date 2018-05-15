"use strict"; //we can split names and return something as URLs could be a case too, pretty cool, functions to analyze a function and return something to manipulate
//    "firstName middleName lastName"

// fullName = "Amalia Blanca Plana"
// firstName = str(indexOf)
// middleName = substr(firstName, indexOf)
// lastName = substr(middleName, indexOf)

const fullName = "Amalia Blanca Plana";

//day 2
/* function writeFullName(firstName, lastName){
    const fullName = `fullname ${firstName} ${lastName}`;
 //   const fullName = firstName + middleName + lastName;
    console.log(fullName);
} */
function writeName(fullName){
//call split name
return fullName;
// console log all name words
  console.log(`firstname: ${firstName}`);
  console.log(`lastname: ${middleName}`);
  console.log(`middlename: ${lastName}`);
}
function splitName(fullName) {
  const firstSpace = fullName.indexOf(" ");
  const secondSpace = fullName.indexOf(" ", firstSpace + 1);

  const firstName = capitalize(fullName.substr(0, firstSpace));
  const middleName = capitalize(fullName.substring(firstSpace+1, secondSpace));
  const lastName = capitalize(fullName.substr(secondSpace+1));

//   console.log(`firstname: ${firstName}`);
//   console.log(`lastname: ${middleName}`);
//   console.log(`middlename: ${lastName}`);

const result = { //will return an object in console, will generate keynames but will order by alhabetic 
    firstName,
    middleName,
    lastName
}

}
function capitalize(str) {
  const firstLetter = str.trim().substr(0, 1).toUpperCase(); //trim is to take out spaces not needed, might mess up with string in JS
  const theRest = str.trim().substr(1).toLowerCase();

  const result = firstLetter + theRest;

  return result; //to test on console put splitName("amalia blanca plana")
}

// const filename = "image.jpg";
// const lastDot = filename.lastIndexOf(".");
// const filename = filename.substring( lastDot+1 )
