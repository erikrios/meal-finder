var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var mealListElement = document.querySelector("#mealList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchMeal(searchElement.value);
    };

    var renderResult = function (results) {
        mealListElement.innerHTML = "";
        results.forEach(function (meal) {
            var name = meal.name;
            var thumb = meal.thumb;
            var instructions = meal.instructions;

            var mealElement = document.createElement("div");
            mealElement.setAttribute("class", "meal");

            mealElement.innerHTML = '<img class="thumb-meal" src="' + thumb + '" alt="Thumb">\n' +
                '<div class="meal-info">\n' +
                '<h2>' + name + '</h2>\n' +
                '<p>' + instructions + '</p>' +
                '</div>';
            mealListElement.appendChild(mealElement);
        })
    };

    var fallbackResult = function (message) {
        mealListElement.innerHTML = "";
        mealListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};