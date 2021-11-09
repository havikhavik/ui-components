export function init(){
    class SubTitleEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            let shadow = this.attachShadow({mode:"open"});
            let SubTitleEl = document.createElement('h2')
            let style = document.createElement('style');
            SubTitleEl.textContent='Subtítulo';
            SubTitleEl.className='subtitle-style'
            style.textContent=`
           
            .subtitle-style{
            text-align: start;
            font-size: 38px;
            margin: 0px;
            padding:30px 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;

            }
            `
            shadow.appendChild(style);
            shadow.appendChild(SubTitleEl);
        }
    }

    customElements.define("custom-subtitle", SubTitleEl);
}