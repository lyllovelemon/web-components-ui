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
  @Prop() size:'small'|'medium'|'large'='small'
  @Prop() disabled:boolean=false
  @Prop() loading:boolean = false

  @State() style:object={}
  render() {
    return (
      <Host style={{...this.style}}>
        {
          this.loading ? 'loading...': <button style={{width:this.width+'px',height:this.height+'px'}}
                                               class={{[`wcu-button-${this.type}`]:true,disabled:this.disabled,[this.size]:true}}>
            { this.text ? this.text : <slot></slot>}
          </button>
        }

      </Host>
    );
  }

}
