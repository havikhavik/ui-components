export function init(){
    class MenuEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            let shadow = this.attachShadow({mode:"open"});
            let style = document.createElement('style');
            let labelEl = document.createElement('label')
            labelEl.setAttribute('for','text')
            labelEl.className='label-style'
            labelEl.textContent='Nombre'
            let inputEl = document.createElement('input')
            inputEl.className='input-style'
            inputEl.type='text'
            inputEl.id='text'
            inputEl.placeholder='Ingresá tu nombre'

            let buttonEl = document.createElement('div')
            buttonEl.className='button-style'
            buttonEl.textContent='Button'
            
            let secondButtonEl = document.createElement('div')
            secondButtonEl.className='second-button-style'
            secondButtonEl.textContent='Volver'

            
            style.textContent=`
           
            .label-style{
            text-align:start;
            font-size: 18px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;

            }
            .input-style{
                
            text-align:start;
            font-size: 18px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            width:100%;
            padding: 17px 13px;
            box-sizing: border-box;


            }

            .button-style{
            background-color:#9CBBE9;
            width:100%;
            margin: 15px 0px;
            padding: 15px 0px;
            text-align:center;
            font-size: 22px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            }

            .second-button-style{
            background-color:white;
            color:black;
            width:100%;
            margin: 60px 0px;
            padding: 15px 0px;
            text-align:center;
            font-size: 22px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            border: 2px solid black;
            }


            `
            shadow.appendChild(style);
            shadow.appendChild(labelEl);
            shadow.appendChild(inputEl);
            shadow.appendChild(buttonEl);
            shadow.appendChild(secondButtonEl);
        }
    }

    customElements.define("custom-menu", MenuEl);
}