import { Component,Prop ,State,Host, h } from '@stencil/core';
@Component({
  tag: 'wcu-loading',
  styleUrl: 'wcu-loading.scss',
  shadow: true,
})
export class WcuLoading {
  // 加载文案
  @Prop() text:string=''
  // loading是否可见
  @Prop() visible:boolean=true
  @Prop() background='#fff'
  // 自定义class
  @Prop() customClass=''
  // 是否全屏
  @Prop() isFullScreen:boolean=true
  @Prop() spinner:boolean=true
  // 加载文案样式
  @State() style = {
    color:'#333'
  }
  render() {
    // @ts-ignore
    return (
      <Host>
        <transition name="wcu-loading-fade">
          {
            this.visible &&
              <div class={{["wcu-loading-mask"]:true,['is-fullscreen']:this.isFullScreen}}
                   style={{backgroundColor:this.background||''}}>
                {
                  this.spinner && <div class="wcu-loading-spinner">
                    <svg class="circular" viewBox="25 25 50 50">
                      <circle class="path" cx="50" cy="50" r="20" fill="none"/>
                    </svg>
                  </div>
                }
                {this.text && <p style={{...this.style}} class="wcu-loading-text">{this.text}</p>}
              </div>
          }

        </transition>

      </Host>
    );
  }

}
