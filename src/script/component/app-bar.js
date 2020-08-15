class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Meal Finder`;
    }
}

customElements.define("app-bar", AppBar);