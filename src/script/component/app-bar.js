class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
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
                padding: 16px;
                width: 100%;
                background-color: green;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                text-align: center;
                padding: 20px;
            }
            h4 {
                text-align: center;
                padding-bottom: 20px;
            }
        </style>
        <h2>Meal Finder</h2>
        <h4>Temukan Makanan Favoritmu!`;
    }
}

customElements.define("app-bar", AppBar);