class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img class="thumb-meal" src="${this._meal.thumb}" alt="Thumb">
            <div class="meal-info">
                <h2>${this._meal.name}</h2>
                <p>${this._meal.instructions}</p>
            </div>`;
    }
}

customElements.define("meal-item", MealItem);