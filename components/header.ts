export function init(){
    class HeaderEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            let shadow = this.attachShadow({mode:"open"});
            let divEl = document.createElement('div')
            let pEl= document.createElement('p')
            let style = document.createElement('style');
            pEl.textContent='Header'
            divEl.className='header-style'
            pEl.className='p-style'
            style.textContent=`
            *{
                box-sizing:border-box;
            }

            body{
                margin: 0;
                padding: 0;
            }

            .header-style{
            background-color: #FF8282;
            height: 60px;
            padding: 17px;
            }

            .p-style{
            text-align: center;
            font-size: 22px;
            margin: 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

            }
            `
            shadow.appendChild(style);
            shadow.appendChild(divEl);
            divEl.appendChild(pEl)
        }
    }

    customElements.define("custom-header", HeaderEl);
}