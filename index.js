const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1'
const drinkCollection = document.getElementById('drink_collection')
const ingredientList = document.getElementById('ingredients')

function fetchCocktails(ingredient = 'tequila'){
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

    const name = document.createElement('h3')
    name.textContent = drinks.strDrink

    const image = document.createElement('img')
    image.src = drinks.strDrinkThumb
    image.className = 'drink_card_img'

    card.append(name, image)
    drinkCollection.append(card)

    card.addEventListener('click',() => {
        const mainName = document.getElementById('focus_name')
        mainName.textContent = drinks.strDrink
        mainName.className = 'neonText'

        const mainImage= document.getElementById('drink_focus')
        mainImage.src = drinks.strDrinkThumb

        const drinkId = parseInt(drinks.idDrink)
        
        fetch(baseUrl + `/lookup.php?i=${drinkId}`)
        .then(response => response.json())
        .then(drinkData => {
            const drink = drinkData.drinks
            const mainDrinkInstructions = document.getElementById('instructions')
            mainDrinkInstructions.innerText = drink[0].strInstructions
            ingredientList.innerHTML= ''

            for(let i=1; i<=15; i++){
                renderIngredientItem(drink[0][`strMeasure${i}`] , drink[0][`strIngredient${i}`])
            }
        })
    })
}

function renderIngredientItem(measurement, ingredient){
    if (
        ingredient == null
        || measurement == null
        || ingredient == ""
        || measurement == ""
    ) {
        return undefined
    }
    const ingredientItem = document.createElement('li')
    ingredientItem.textContent = `${measurement} ${ingredient}`

    ingredientList.append(ingredientItem)
}

function renderMain(drink){
    const drinkName = document.getElementById('focus_name')
    drinkName.innerText = drink[0].strDrink

    const drinkImage = document.getElementById('drink_focus')
    drinkImage.src = drink[0].strDrinkThumb

    const drinkInstructions = document.getElementById('instructions')
    drinkInstructions.innerText = drink[0].strInstructions

    ingredientList.innerHTML= ''

        for(let i=1; i<=15; i++){
            renderIngredientItem(drink[0][`strMeasure${i}`] , drink[0][`strIngredient${i}`])
            }
}


function selectedDrink(){
    const formValue = document.getElementById('sort_form')
    formValue.addEventListener('change', e => {
        drinkCollection.innerHTML = ''
        fetchCocktails(e.target.value)
    })
}

function groceryLister(){
    const list = document.getElementById('list')
    const addItem = document.querySelector('.grocery_list')
    addItem.addEventListener('submit', e => {
        e.preventDefault()
        const ingredient = e.target['ingredient1'].value
        
        const li = document.createElement('li')
        li.textContent = ingredient
        list.append(li)
    })

}

fetchCocktails()
initialFocus()
selectedDrink()
groceryLister()

