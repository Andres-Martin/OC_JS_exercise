/* 
Activity: Contact manager
*/

// TODO: Complete the program

//// GLOBAL FUNCTIONS AND CONSTRUCTORS ////
console.log("Welcome to your Contacts Manager!");

let contacts = [];

function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Contact.prototype.describe = function() {
  let description = `Last name: ${this.lastName}, first name: ${
    this.firstName
  } `;
  return description;
};

// Contacts
let contact1 = new Contact("John", "Smith");
let contact2 = new Contact("Jane", "Doe");

contacts.push(contact1, contact2);

/// Creating the menu ///

/// Function Display Menu ///
function displayMenu() {
  console.log(" 1: List contacts \n 2: Add a contact \n 0: Quit");
}

//Add a new contact//
function addContact() {
  let newContact = new Contact(
    prompt("Enter your first name"),
    prompt("Enter your last name")
  );
  contacts.push(newContact);
  console.log("Contact added!");
}

//Listing contacts//
function listContacts(arr) {
  console.log("Here's the list of all your contacts:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].describe());
  }
}

//Menu function//

let contactManager;

function menu() {
  displayMenu();
  contactManager = prompt(
    "Select an option : \n 1: List contacts \n 2: Add a contact \n 0: Quit"
  );
  switch (contactManager) {
    case "1":
      listContacts(contacts);
      break;
    case "2":
      addContact();
      break;
    default:
      break;
  }
  return contactManager;
}

/// Start Contact Manager and quit menu///
function startMenu() {
  while (contactManager !== "0") {
    contactManager = menu();
  }
  console.log("GoodBye!");
}

/* EXECUTE THE CONTACT MANAGER */

startMenu();
