import DataSource from '../data/data-source.js'

const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const mealListElement = document.querySelector("#mealList");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        mealListElement.innerHTML = "";
        results.forEach(function (meal) {
            const { name, thumb, instructions } = meal;

            const mealElement = document.createElement("div");
            mealElement.setAttribute("class", "meal");

            mealElement.innerHTML = `<img class="thumb-meal" src="${thumb}" alt="Thumb">
                <div class="meal-info">
                    <h2>${name}</h2>
                    <p>${instructions}</p>
                </div>`;
            mealListElement.appendChild(mealElement);
        })
    };

    const fallbackResult = message => {
        mealListElement.innerHTML = "";
        mealListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;