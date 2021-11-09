export function init(){
    class FooterEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            let shadow = this.attachShadow({mode:"open"});
            let divEl = document.createElement('div')
            let pEl= document.createElement('p')
            let style = document.createElement('style');
            pEl.textContent='Footer'
            divEl.className='footer-style'
            pEl.className='p-style'
            style.textContent=`
            *{
                box-sizing:border-box;
            }

            body{
                margin: 0;
                padding: 0;
            }

            .footer-style{
            background-color: #FFA0EA;
            height: 233px;
            padding: 17px;
            display: flex;
            align-items: center;
            justify-content: center;

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

    customElements.define("custom-footer", FooterEl);
}