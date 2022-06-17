const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1'
const drinkCollection = document.getElementById('drink_collection')

function init(){
    fetch(baseUrl + '/filter.php?i=Vodka')
    .then(res => res.json())
    .then(drinkData => drinkData.drinks.forEach(renderCocktails))
}

function renderCocktails(drinks){
    const card = document.createElement('div')
    card.id = 'drink_card'

    const name = document.createElement('h2')
    name.textContent = drinks.strDrink
    console.log(name)

    const image = document.createElement('img')
    image.src = drinks.strDrinkThumb
    image.details = drinks
    console.log(image.details)

    card.append(name, image)
    drinkCollection.append(card)

}

init()