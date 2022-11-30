import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wcu-image',
  styleUrl: 'wcu-image.css',
  shadow: true,
})
export class WcuImage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
