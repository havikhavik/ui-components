(function() {
    class LucasEl extends HTMLElement {
        constructor(){
            super();
            this.render();
            this.textContent = "hola vengo del render";
        }
        render() {
        // let shadow = this.attachShadow({mode:"open"});
        }
    }
    customElements.define("lucas-el", LucasEl);
    console.log('hola');
})();

//# sourceMappingURL=index.fb5312c9.js.map
