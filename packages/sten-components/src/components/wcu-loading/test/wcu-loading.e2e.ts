import { newE2EPage } from '@stencil/core/testing';

describe('wcu-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wcu-loading></wcu-loading>');

    const element = await page.find('wcu-loading');
    expect(element).toHaveClass('hydrated');
  });
});
