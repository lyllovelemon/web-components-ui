import { newSpecPage } from '@stencil/core/testing';
import { WcuLoading } from '../wcu-loading';

describe('wcu-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcuLoading],
      html: `<wcu-loading></wcu-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <wcu-loading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wcu-loading>
    `);
  });
});
