
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings={
    databaseURL: 'https://playground-4aaec-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const stuffinDB = ref(database, "stuff")  /* getting db reference */

// Get references to the input field and add button
const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");


onValue(stuffinDB, function(snapshot){
    let stuffarray= Object.values(snapshot.val())

    //console.log(stuffarray)
    for (let i=0 ; i < stuffarray.length ; i++){
        let currstuff = stuffarray[i]

        insertintoshoppinglist(currstuff)
    }
})

// Add a click event listener to the add button
addButton.addEventListener("click", function() {
  // Get the value of the input field
  const inputValue = inputField.value;
  // Log the input value to the console
  //console.log(inputValue);

  push(stuffinDB,inputValue)

  //console.log('${inputValue} added to database')
  clearinputField() // calls func which clears input field
  insertintoshoppinglist(inputValue) // calls func which insertsinto list
});

function clearinputField(){
    inputField.value= ""
}

function insertintoshoppinglist(inputValue){
    shoppingList.innerHTML += `<li>${inputValue}</li>`
}

