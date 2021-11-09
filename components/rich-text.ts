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
            TextEl.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?'
            TextEl.className='text-style'
            style.textContent=`
           
            .text-style{
            text-align: start;
            font-size: 18px;
            margin: 0px;
            padding:30px 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;

            }
            `
            shadow.appendChild(style);
            shadow.appendChild(TextEl);
        }
    }

    customElements.define("custom-richtext", TextEl);
}