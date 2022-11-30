import { Component,Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'wcu-icon',
  styleUrl: 'wcu-icon.scss',
  shadow: true,
})
export class WcuIcon {
  /**
   * icon 尺寸 默认 20
   */
  @Prop() size: number | string = 20;
  /**
   * styles 传入的css样式
   */
  @Prop() styles: object;
  /**
   * 传入的class名称
   */
  @Prop() classNames: string;
  /**
   * 图标颜色
   */
  @Prop() color: string;
  /**
   * 旋转的角度
   */
  @Prop() rotate: number;
  /**
   * 是否自动旋转
   */
  @Prop() spin: boolean;
  render() {
    const { size, styles, classNames, color, rotate, spin } = this;
    return (
      <Host>
        <wcu-icon-aa-c {...{ size, styles, classNames, color, rotate, spin }}></wcu-icon-aa-c>
        <wcu-icon-add-image {...{ size, styles, classNames, color, rotate, spin }}></wcu-icon-add-image>
        <wcu-icon-add-user {...{ size, styles, classNames, color, rotate, spin }}></wcu-icon-add-user>
        <wcu-icon-add {...{ size, styles, classNames, color, rotate, spin }}></wcu-icon-add>
        <wcu-icon-alert-close-collapse {...{ size, styles, classNames, color, rotate, spin }}></wcu-icon-alert-close-collapse>
        <wcu-icon-alert-error-c {...{ size, styles, classNames, color, rotate, spin }}></wcu-icon-alert-error-c>
        <wcu-icon-alert-error-circle-c {...{ size, styles, classNames, color, rotate, spin }}></wcu-icon-alert-error-circle-c>
      </Host>
    );
  }
}
