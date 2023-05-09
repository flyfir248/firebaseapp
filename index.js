
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


console.log(add(1,1))

const appSettings={
    databaseURL: 'https://playground-4aaec-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const stuffinDB = ref(database, "stuff")  /* getting db reference */

// Get references to the input field and add button
const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");

// Add a click event listener to the add button
addButton.addEventListener("click", function() {
  // Get the value of the input field
  const inputValue = inputField.value;
  // Log the input value to the console
  //console.log(inputValue);

  push(stuffinDB,inputValue)

  console.log('${inputValue} added to database')

});