# Shake-It-Up
Shake It Up

The basic story of our application
User comes to the site, has a list of ingredients they have on hand
Inputs an ingredient they have on hand 
Search by type of alcohol 
Site returns a list of cocktails with the selected ingredient, and their recipe 
User comes to the site but does not know what kind of cocktail they are in the mood for
There is an image of a cocktail shaker, with a prompt to click for a random drink
Randomizer spits out a random cocktail, along with ingredients and instructions
User wants to remember to buy an ingredient at the store
Can add an ingredient to the grocery list
List possibly can persist on a server (stretch goal)
Core features
Search for cocktail by ingredient entered
Click on random button to return a list of random cocktail recipes
Grocery list for ingredients
Add a cocktail to a favorites list (stretch goal)
API info
https://www.thecocktaildb.com/api.php
Will do a fetch request to the api to pull down a list of cocktails by ingredient entered by the user
Can hit the randomizer button to pull down a random cocktail, and put that into the main focus window
Along with the recipe and instructions

Challenges we expect to face
Making sure that we are fetching the right information from the API
Are the API fetch methods going to be consistent throughout different parts of the API?
Implementing the different fetch requests to navigate the different parts of the API
CSS!


How we are meeting the requirements of the project
Our project will hit an external API to retrieve data
Our project will be a single HTML file, all data will dynamically update on the DOM, will not redirect
Event listeners:
Change event – on the ingredients selector 
Click event – on the randomizer button and on the cocktails card
Click event – on the cocktail card to bring it into the main focus
Submit event – on the grocery list
Stretch goal - Mouseover – on the randomizer button, showing text underneath
Stretch goal – light mode vs dark mode!
Array methods – we will have to iterate through an array of cocktail recipes to produce the cocktail thumbnails
Our code will be modular
