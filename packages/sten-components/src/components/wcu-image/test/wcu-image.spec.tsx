import { newSpecPage } from '@stencil/core/testing';
import { WcuImage } from '../wcu-image';

describe('wcu-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcuImage],
      html: `<wcu-image></wcu-image>`,
    });
    expect(page.root).toEqualHtml(`
      <wcu-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wcu-image>
    `);
  });
});
