class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 14px;
                    overflow: hidden;
                }
                
                .thumb-meal {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .meal-info {
                    padding: 24px;
                }
                
                .meal-info > h2 {
                    padding: 8px;
                    background-color: green;
                    font-weight: bold;
                    color: white;
                    text-align: center;
                }
                
                .meal-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }

                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    background-color: #333333;
                  }
                  
                  ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    background-color: #333333;
                  }
                  
                  li {
                    float: left;
                  }
                  
                  li {
                    display: block;
                    color: white;
                    text-align: center;
                    padding: 16px;
                    text-decoration: none;
                  }   
                  
                  li:hover {
                    background-color: #111111;
                  }

            </style>
            <img class="thumb-meal" src="${this._meal.strMealThumb}" alt="Thumb">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <ul>
                    <li><b>Category</b><br>${this._meal.strCategory}<li/>
                    <li><b>Area</b><br>${this._meal.strArea}<li/>
                    <li><b>Tags</b><br>${this._meal.strTags}<li/>
                </ul>
                <p>${this._meal.strInstructions}</p>
            </div>`;
    }
}

customElements.define("meal-item", MealItem);