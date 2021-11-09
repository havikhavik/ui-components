export function init(){
    class TitleEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            let shadow = this.attachShadow({mode:"open"});
            let titleEl = document.createElement('h1')
            let style = document.createElement('style');
            titleEl.textContent='Titulo de esta pagina'
            titleEl.className='title-style'
            style.textContent=`
           
            .title-style{
            text-align: start;
            font-size: 52px;
            margin: 0px;
            padding:0px;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;

            }
            `
            shadow.appendChild(style);
            shadow.appendChild(titleEl);
        }
    }

    customElements.define("custom-title", TitleEl);
}