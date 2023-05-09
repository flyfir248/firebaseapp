
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
    let stuffarray= Object.entries(snapshot.val()) // reformats the data from snapshot

    clearshoppinglist(shoppingList)
    //console.log(stuffarray)
    shoppingList.innerHTML = ""

    for (let i=0 ; i < stuffarray.length ; i++){
        let currentItem = itemsArray[i]

        let currentItemID=currentItem[0]
        let currentItemValue=currentItem[1]

        insertintoshoppinglist(currentItem)
    }
})

// Add a click event listener to the add button
addButton.addEventListener("click", function() {
  // Get the value of the input field
  const inputValue = inputField.value;

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

function clearshoppinglist(shoppingList){
    shoppingList.innerHTML = ""
}
