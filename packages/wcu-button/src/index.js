let template = document.getElementById('wcu-button')
class Button extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
        this._shadowRoot.appendChild(template.content.cloneNode(true))

        this.$button = this._shadowRoot.querySelector('button')
        this.$button.addEventListener('click',()=>{
            console.log(2)
            // this.onClick('设置的点击回调触发-------')
            this.dispatchEvent(new CustomEvent('onCustomClick',{
                detail:'设置的点击回调触发-------'
            }))
        })
    }
    static get observedAttributes(){
        return ['text']
    }
    render(){
        this.$button.innerHTML = this.text
    }
    attributeChangedCallback(){
        this.render()
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(value){
        this.setAttribute('text',value)
    }
}
window.customElements.define('wcu-button',Button)
