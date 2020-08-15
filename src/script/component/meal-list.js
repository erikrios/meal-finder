import './meal-item.js';

class MealList extends HTMLElement {
    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal;
            this.appendChild(mealItemElement);
        })
    }

    remderError(message) {
        mealListElement.innerHTML = "";
        mealListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("meal-list", MealList);