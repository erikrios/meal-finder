class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 10px;
                display: flex;
                position: sticky;
                top: 10px;
                background-color: white;
            }
            
            .search-container > input {
                width: 75%;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid green;
                font-weight: bold;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid green;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: green;
                font-weight: normal;
            }
            
            .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: green;
                color: white;
                border: 0;
                text-transform: uppercase;
            }

            button {
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                border-radius: 10px;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
            
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
            
                .search-container > button {
                    width: 100%;
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Cari makanan" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Cari</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);