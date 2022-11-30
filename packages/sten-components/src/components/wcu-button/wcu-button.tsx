import { Component,Prop,State, Host, h } from '@stencil/core';
@Component({
  tag: 'wcu-button',
  styleUrl: 'wcu-button.scss',
  shadow: true,
})
export class WcuButton {
  @Prop() width:string='80'
  @Prop() height:string='40'
  @Prop() text:string;
  @Prop() type:'primary'|'danger'|'success'|'info'|'warning'|'text'='info'
  @Prop() size:'small'|'medium'|'large'|'mini'='small'
  @Prop() disabled:boolean=false
  @Prop() loading:boolean = false

  @State() style:object={}
  render() {
    return (
      <Host style={{...this.style}}>
         <button class={{[`wcu-button-${this.type}`]:true,disabled:this.disabled,[this.size]:true}}>
           { this.loading && <div class="loading-mask">
             <svg class="circular" viewBox="25 25 50 50">
               <circle class="path" cx="50" cy="50" r="20" fill="none"/>
             </svg>
             <span class={{[`text-${this.type}`]:true}}>loading...</span>
           </div>}
           { !this.loading ?(this.text || <slot></slot>):''}
          </button>


      </Host>
    );
  }

}
