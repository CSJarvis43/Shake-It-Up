const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1'
const drinkCollection = document.getElementById('drink_collection')

function fetchCocktails(ingredient = 'vodka'){
    fetch(baseUrl + `/filter.php?i=${ingredient}`)
    .then(res => res.json())
    .then((drinkData) => {
        drinkData.drinks.slice(0,10).forEach(renderCocktails)
    })
}


function initialFocus(){
    fetch(baseUrl + '/random.php')
    .then(res => res.json())
    .then(drinkData => {
        const drink = drinkData.drinks
        renderMain(drink)
    })
}

function renderCocktails(drinks){
    const card = document.createElement('div')
    card.className = 'drink_card'

    const name = document.createElement('h2')
    name.textContent = drinks.strDrink
    // console.log(name)

    const image = document.createElement('img')
    image.src = drinks.strDrinkThumb
    image.details = drinks
    // console.log(image.details)

    card.append(name, image)
    drinkCollection.append(card)

}

function renderMain(drink){
    const drinkName = document.getElementById('focus_name')
    drinkName.innerText = drink[0].strDrink

    const drinkImage = document.getElementById('drink_focus')
    drinkImage.src = drink[0].strDrinkThumb

    const drinkInstructions = document.getElementById('instructions')
    drinkInstructions.innerText = drink[0].strInstructions

}

fetchCocktails()
initialFocus()