import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wcu-loading',
  styleUrl: 'wcu-loading.scss',
  shadow: true,
})
export class WcuLoading {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
