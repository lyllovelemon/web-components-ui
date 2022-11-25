import { newSpecPage } from '@stencil/core/testing';
import { WcuButton } from '../wcu-button';

describe('wcu-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcuButton],
      html: `<wcu-button></wcu-button>`,
    });
    expect(page.root).toEqualHtml(`
      <wcu-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wcu-button>
    `);
  });
});
