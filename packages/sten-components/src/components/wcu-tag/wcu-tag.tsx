import { Component,Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'wcu-tag',
  styleUrl: 'wcu-tag.scss',
  shadow: true,
})
export class WcuTag {
  @Prop() color:string;
  @Prop() type:'success'|'info'|'danger'|'warning'|'text'='text'
  // 是否可移除标签
  @Prop() closable:boolean = false

  // 标签尺寸
  @Prop() size:'medium'|'small'|'large'|'mini'='medium'
  render() {
    return (
      <Host>
        <span class={{'wcu-tag':true,[`wcu-tag-${this.type}`]:true,[`wcu-tag-${this.size}`]:true}}>
            <slot></slot>
        </span>
      </Host>
    );
  }

}
