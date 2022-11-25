import {Component, Host, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'wcu-button',
  styleUrl: 'wcu-button.scss',
  shadow: true,
})
export class WcuButton {
 @Prop() text:string;
 @Prop() type:''|'primary'|'danger'|'danger-i'|'warning'|'warning-i'|'text'
 @Prop() size:''|'large'|'small'
 @Prop() disabled:boolean=false

 @State() style:object={}

  componentWillRender(){
   const storage = sessionStorage||localStorage
   this.style = JSON.parse(storage.getItem('wcu-button')||"{}")
  }
  render() {
    return (
      <Host>
        <button class={{[this.type]:true,disabled:this.disabled,[this.size]:true}}>
          {this.text}
          <slot></slot>
        </button>
      </Host>
    );
  }

}
