const main = function () {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const mealListElement = document.querySelector("#mealList");

    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchMeal(searchElement.value);
    };

    const renderResult = function (results) {
        mealListElement.innerHTML = "";
        results.forEach(function (meal) {
            const name = meal.name;
            const thumb = meal.thumb;
            const instructions = meal.instructions;

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

    const fallbackResult = function (message) {
        mealListElement.innerHTML = "";
        mealListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};