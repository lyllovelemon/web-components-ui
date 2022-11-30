import { newE2EPage } from '@stencil/core/testing';

describe('wcu-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wcu-icon></wcu-icon>');

    const element = await page.find('wcu-icon');
    expect(element).toHaveClass('hydrated');
  });
});
