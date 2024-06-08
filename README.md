# Chinese Recipes Tracker!

## Overview

 'Chinese Recipes Tracker' is a simplistic single-file application (SPA) that aims to promote Chinese cusine and help users track aspects of their recipe preparatin process. It lets you view various Chinese recipes (already included in the SPA), keep track of how many times you've made your recipes, as well as log how long it took you to make your recipes.

 It's built using HTML, JavaScript and SASS (A CSS pre-processor). It includes the backend code for a simple web server, courtesy of Express.js, and utilises localStorage to save user's data, allowing them to keep their inputs even if they reload the page between sessions.

 While this app is responsive and can accomodate both desktop and mobile views, it was designed primarily for desktop. 

## Version Control

The Chinese Recipes Tracker uses github for saving changes during development, and has all progress stored in a github repository for management and further development. The github repo for this project can be accessed via the link below:

[https://github.com/Kaiimashi/kehe2444-tracker]

(Note: Due to unforseen issues, the github repo commit dates of the current project have inaccurate commit time stamps up to the commit "'Recipe Time Tracker Section' Styling". As reverting to a previous commit wasn't possible in the original repo due to file errors, a new project was started and all commit history was transferred to the current github repo. Thankfully, previous commit history was saved, and the full commit history of this project can be seen in the provided github link.)

## Development Process Overview

#### General scope and goal iterations from A2:

My current UI design, features and general scope of this current version of the Chinese Recipe Tracker has been changed significantly from my original outline of goals, wireframe designs and intended data model to be implemented. Initially, the app intended to:

1) Promote specifically Shanghainese cuisine
2) Provide users tailored recipes in their recommendations based on their taste profile/taste preference
3) Have a strong focus on suggesting users alternative ingredients and tools to help them prepare recipes with the tools and ingredients they already had at home.

However, with further consideration after this initial design direction, it was decided that the scope of the app was far too narrow: It features highly detailed functions that, while I still believe will be an excellent addition to a recipe tracking app, wasn't a realistic approach to implement for my tracking app, which is early development and should leave room for continued refinement later on in it's development. 

As such, the design and current scope of my Chinese Recipe Tracker has been iterated to function on a much broader scope: 

1) Instead of promoting just Shanghainese cuisine, the current app instead promoted all Chinese recipes - for future development, perhaps my app could feature different sub-catogries of Chinese food, each promoting the cuisines of not just Shanghai, but also cities throughout China (and even the world).
2) Tracking the specific taste profile of each user was also iterated, in favour of the current design, which simply allows users to track how many times they make their recipes, and how long it takes them to make it. I believe these features are more useful and applicable to foodies and home cooks, and give them more freedom in tracking the recipes they want to track, rather than just providing them recommened recipes.
3) The strong focus on alternative tools and ingredients has been dropped for the early development stage: while I may still bring it to future iterations of the app, keeping it out of the early development stage allows the app to operate on a wider scope, and user feedback can significantly help me decide whether or not the feature is one that users would like to see added to my app.

#### UI/Design changes from the initial wireframes in A2:

While the scope of my Chinese Recipe Tracker has changed significantly, my original wireframes of my intended UI were generally kept and implemented into my web app. 

Original wireframe for the home page:

![Homepage wireframe UI](read-me-images/Wireframe%20Home.png)

The current navigation menu design has been largely kept in my current web app. However, some key changes are:

1) The "most visited recipe" section was removed - this was deemed to over-complicate the UI, and may make users feel overwhelmed with information. 
2) The profile page was removed: as mentioned earlier, I wanted to keep my scope more broad, and so the profile page was removed for the time being.
3) While the homepage was kept, the main body layout was changed from listing recipes to showing a welcome text with a thumbnail - this made my web app feel far more inviting and less intimidating to use. The welcome text also serves as a bried intro as to what my web app does.

Original wireframe for the mobile version:

![Mobile wireframe UI](read-me-images/wireframe%20mobile.png)

While the focus of this app wasn't on mobile, the mobile UI has also been changed. To keep consistency with the desktop counterpart, the rows of recipes has been replaced with a home screen to reduce information overload. The top navbar has also been changed in favour of a burger menu, which allows for decluttering the navbar to keep in minimalistic, while being able to display more options once the navbar is revealed.

### Improvements and Iterations

## Features!

The key features of the Chinese Recipe Tracker is outlined below:

**Meal Tracker Section**: This section of the app helps users track the amount of times they've made a certain recipe. Currently (as of current development stage), 4 cards are in this section, showcasing 4 Chinese recipes. 

**Viewing recipe details**: Each card has a 'View recipe' button that users can click to open a new screen, 'recipe details'. This screen pops-up and provides more detailed information on a recipe, including serving size, estimated time needed to prepare, allergens, ingredients, and the recipe method. Users can click the "X" button to exit the recipe details screen.

**Tracks amount of times a recipe is made**: At the bottom of each card, users have an input box in which they can use arrows to set the number higher or lower; this lets them keep track of how many times they've made each recipe, and can help indicate to them which recipe they've made the most and the kinds of tastes and textures they prefer.

**Recipe Time Tracker**: This section contains a tools which helps users keep track of how long it took them to prepare a recipe. Users can click the 'Add new recipe' button to create a new row in the table. Each row allows for 3 inputs: date, recipe made, and time taken. Users can modify their inputs, and all changes will be saved localled. Users can delete rows using the "X" button on each row.

## Setup Instructions

To view this app, the terminal code 'npm run dev' is required. Once you have cloned the provided github repo (provided below), simply run the command "npm install" in the terminal of VSCode to install the necessary files. Once completed, run the command "npm run start" or "npm run dev" to start the app.

## Usage Instructions

Once setup is complete, here's how to use the app!

1) Open a new terminal in VSCode. Type in "npm run dev". This will start the web app, and a new tab will open in your browser. If not, simply go to the URL [http://localhost:1234].

#### For Desktop:
1) To navigate to each section, you can either scroll the page or use the navigation bar on the left side. Clicking each tab in the navbar will send you to the corresponding section.

#### For Mobile:
1) To navigate to each section, you can either scroll the screen or access the navigation menu by tapping the burger menu (3 horizontal bars icon) to reveal the navigation menu. Tapping each tab will send you to the corresponding section. To hide the navmenu, tap the "X" button located on the top left of the navmenu.

#### Using each section
1) For the meal tracker section, click the "View recipe" button to see the associated data for a recipe. 

To input the amount of times you've made a dish, hover the cursor over the input box at the bottom section of the card, and use the arrows inside the box to change the value of the number (Default value is 0).

2) For the Recipe Time Tracker, click the "Add new recipe" button to add a new row to the table. To remove a row, click the "X" button located on the left side of each row.

To input a date, click on the date input box and enter the date.

To input the recipe you've made, click on the input box with "Type in your recipe here", remove the default text and type in your recipe. 

To input the time it took you to make it, hover the cursor over the input box and use the arrows inside the box to change the value of the number (Default value is 0). 

## Limitations

**Local storage**: As all inputs and changes are stored locally, session persistence when using this app will only work locally, i.e. on the specific device/browser the app is being used on. Changing to other devices to use the app will not show the data you inputted.

**Meal Tracker "View Recipe" Function**: Due to time limitations, the view recipe function only works for the first card, "fried rice". Clicking the "view recipe" button on the other cards will open the same recipe details for fried rice unfortunately. This feature should be the primary focus to complete if future development is done to the app.

**"Load more recipes" Button**: As this app is in early development, only 4 recipes are showcased in the current development process. The "load more" button (currently greyed out with the filler text "More recipes in the future!") should be able to load more recipes for the user to view. 

## Acknowledgements 
### Sources

This app does not use any JS libraries, external frameworks or external APIs. It does however use code snippets and sections either sourced or adapted from external developers. These are:

1) Recipe Time Tracker uses HTML & CSS code adapted from: [dcode]. (2022 Mar 30). Build a Workout Tracker with JavaScript and Local Storage [Video]. Youtube. [https://www.youtube.com/watch?v=HY6nPFsADDo]

2) CSS reset code sourced from: [Andy Bell]. (2019 Oct 2). A Modern CSS Reset. [https://dev.to/hankchizljaw/a-modern-css-reset-6p3]

3) Font Awesome embeded kit code for custom symbols, icons, etc. [https://fontawesome.com/]

4) Images from Unsplash and Freepik. All creators, and their associated images, are cited in code comments where they were used.

### Use of Generative AI Technologies Acknowledgement

The Javascript of this app uses sections either sourced or adapted from code generated by ChatGPT [https://chat.openai.com]. AI generated code is cited in the code comments where they were used. It was used for two sections:

1) Meal Tracker cards uses Javascript generated by AI: This code stores and retrieves the user's input on the amount of times they made a recipe to local storage. Code was modified by giving each 'mealCard'(in HTML) a unique id to store the values of each card.

This code was generated with the following promts:

- this is a simple card I made: [copy-pasted HTML]. I want to store the user's number input in local storage, so if they reload the data is saved. 

- What is the role of the id? Could using class names also work?

2) Recipe Time Tracker uses Javascript sections generated by AI: This code updates the HTML when the user adds or deletes rows, and stores any user inputs into local storage. 'loadEntries' function was modified to use if statement logic, pre-filled text was added to input areas to improve user experience.

This code was generated with the following promts:

- I have this HTML code [code was copy-pasted, ChatGPT suggested JS code to add and delete rows with local storage].

- Thank you! I also want to be able to keep new rows and delete existing rows using local storage. For example, I can add a new row and enter a new text or time input, and my data is saved if I refresh.

- How do I get the date input to be automatic for me for each new row I make?