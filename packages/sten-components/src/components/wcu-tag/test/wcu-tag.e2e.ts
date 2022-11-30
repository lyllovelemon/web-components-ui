import { newE2EPage } from '@stencil/core/testing';

describe('wcu-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wcu-tag></wcu-tag>');

    const element = await page.find('wcu-tag');
    expect(element).toHaveClass('hydrated');
  });
});
