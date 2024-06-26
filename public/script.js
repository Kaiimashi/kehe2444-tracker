/* ------------
Mobile Nav Menu
------------ */

// displays/hides mobile menu when user clicks the burger menu icon/cross 
function showMobileMenu() {
    const mobilemenu = document.querySelector ('.mobilemenu') 
    mobilemenu.style.display = 'flex';
}

function hideMobileMenu() {
    const mobilemenu = document.querySelector ('.mobilemenu') 
    mobilemenu.style.display = 'none';
}

/* ---------
Meal Tracker 
---------- */
//Meal Tracker cards uses Javascript generated by AI: [ChatGPT]. (2024 Jun 6). https://chat.openai.com This code stores and retrieves the user's input on the amount of times they made a recipe to local storage. Code was modified by giving each 'mealCard'(in HTML) a unique id to store the values of each card.

//Meal tracker cards
document.addEventListener("DOMContentLoaded", function() {
    //Selects every meal card in the HTML
    const mealCards = document.querySelectorAll('.mealCard');

    mealCards.forEach(card => {
        //Gets the card id of each meal card in HTML and stores each card's respective user input data
        const cardId = card.getAttribute('card-id');
        const amountEntry = card.querySelector('.amountEntry');

        //Gets stored values from local storage and sets it to the user input on each card
        const storedValue = localStorage.getItem(`amountEntry_${cardId}`);
        //If there is stored data, set the meal card's data to the data retrieved from local storage
        if (storedValue) {
            amountEntry.value = storedValue;
        }

        //listens for any user changes to a meal card's data: if the user changes a value in any meal card (i.e., when they make a recipe again and want to update the amount of time they've made it), update the meal card with the new data.
        amountEntry.addEventListener('input', function() {
            localStorage.setItem(`amountEntry_${cardId}`, amountEntry.value);
        });
    });
});

//Meal Tracker pop-up details

//hides the pop-up when 'x' is clicked
function closeMealDetails() {
    const mealDetails = document.querySelector('.mealDetails');
    mealDetails.style.display = 'none';
}

//shows the pop-up when 'view recipe' is clicked
function openMealDetails() {
    const mealDetails = document.querySelector('.mealDetails');
    mealDetails.style.display = 'flex';
}

/* ----------------
Recipe Time Tracker
---------------- */
//Recipe Time Tracker uses Javascript sections generated by AI: [ChatGPT]. (2024 Jun 6). https://chat.openai.com This code updates the HTML when the user adds or deletes rows, and stores any user inputs into local storage. 'loadEntries' function was modified to use if statement logic, pre-filled text was added to input areas to improve user experience

document.addEventListener('DOMContentLoaded', () => {
    //Reads local storage and adds it to the Time tracker table when web app loads/reloads
    loadEntries();

    document.querySelector('.addEntryButton').addEventListener('click', () => {
        //Adds a new entry row when user clicks the add recipe button
        addNewRow();
    });

    document.addEventListener('click', (event) => {
        //Removes an entry when user clicks the "x" button on any row, and saves the change to local storage
        if (event.target.classList.contains('deleteEntryButton')) {
            const row = event.target.closest('.entryRow');
            row.remove();
            updateEntries();
        }
    });
});

//When add recipe button is clicked, this function selects the .userEntries HTML table body and creates a new row for the user to use. Once created, saves new row to local storage.
function addNewRow(date = '', recipe = 'Type in your recipe', time = '10') {
    const userEntries = document.querySelector('.userEntries');
    const newRow = document.createElement('tr');
    newRow.className = 'entryRow';
    //added data labels to innerHTML for mobile view: The data label allows for restyling the Recipe Time Tracker's usual header row to be displayed vertically in mobile
    newRow.innerHTML = `
        <td data-label = "Date:">
            <input type="date" class="dateEntry" value="${date}">
        </td>
        <td data-label = "Recipe Made:">
            <input type="text" class="recipeEntry" value="${recipe}">
        </td>
        <td data-label = "Time Taken:">
            <input type="number" class="timeEntry" value="${time}">
            <span class="timeEntryMeasure">Minutes</span>
        </td>
        <td>
            <button type="button" class="deleteEntryButton">&times;</button>
        </td>
    `;
    userEntries.appendChild(newRow);
    updateEntries();
}

//Creates an array to read and store the user's inputted data of each row (date, recipe made, time taken), using setItem() to store it in local storage.
function updateEntries() {
    const entries = [];
    document.querySelectorAll('.entryRow').forEach(row => {
        const date = row.querySelector('.dateEntry').value;
        const recipe = row.querySelector('.recipeEntry').value;
        const time = row.querySelector('.timeEntry').value;
        entries.push({ date, recipe, time });
    });
    localStorage.setItem('timeTrackerEntry', JSON.stringify(entries));
}

function loadEntries() {
    //Retrieves value with the key 'timeTrackerEntries'
    let entries = localStorage.getItem('timeTrackerEntry');
    //checks values: if it exists, the JSON string is parsed to the entries array. If null, it will fallback and ensure the array is empty
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    //Iterate over objects in entry, and passes the date, recipe made and time taken data to make a new row with the given data
    entries.forEach(entry => {
        addNewRow(entry.date, entry.recipe, entry.time);
    });
}

//listens for any user changes in any row: if the user changes a value in any of the rows they made, store the change in local storage
document.addEventListener('input', (event) => {
    if (event.target.classList.contains('dateEntry') || event.target.classList.contains('recipeEntry') || event.target.classList.contains('timeEntry')) {
        updateEntries();
    }
});