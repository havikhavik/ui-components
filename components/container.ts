export function init(){
    class ContainerEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            let shadow = this.attachShadow({mode:"open"});
            let ContainerEl = document.createElement('div')
            let style = document.createElement('style');
            ContainerEl.className='container-style'
            style.textContent=`
           
            .container-style{
            margin: 0px;
            padding:40px 30px;
            max-width:600px

            }

            @media (min-width: 600px) {
                .container-style {
                  margin: 0 auto;
                }
              }

            `
            shadow.appendChild(style);
            shadow.appendChild(ContainerEl);

            while(this.children){
                ContainerEl.appendChild(this.firstChild)

            }
            // if (this.children){
                

            //     for (let index = 0; index < this.children.length; index++) {


             
            //     }


            //     // for (const child of this.children) {
            //     // ContainerEl.appendChild(child);
                    
            //     // }
            // }

        }
    }

    customElements.define("custom-container", ContainerEl);
}