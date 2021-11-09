export function init(){
    class TextEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            let shadow = this.attachShadow({mode:"open"});
            let TextEl = document.createElement('p')
            let style = document.createElement('style');
            TextEl.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            TextEl.className='text-style'
            style.textContent=`
           
            .text-style{
            text-align: center;
            font-size: 22px;
            margin: 0px;
            padding:100px 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

            }
            `
            shadow.appendChild(style);
            shadow.appendChild(TextEl);
        }
    }

    customElements.define("custom-anothertext", TextEl);
}