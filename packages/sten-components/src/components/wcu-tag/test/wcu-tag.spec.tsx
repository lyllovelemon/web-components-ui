import { newSpecPage } from '@stencil/core/testing';
import { WcuTag } from '../wcu-tag';

describe('wcu-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcuTag],
      html: `<wcu-tag></wcu-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <wcu-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wcu-tag>
    `);
  });
});
