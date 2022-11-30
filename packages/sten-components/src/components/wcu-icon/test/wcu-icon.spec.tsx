import { newSpecPage } from '@stencil/core/testing';
import { WcuIcon } from '../wcu-icon';

describe('wcu-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcuIcon],
      html: `<wcu-icon></wcu-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <wcu-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wcu-icon>
    `);
  });
});
