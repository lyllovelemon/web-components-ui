import { newE2EPage } from '@stencil/core/testing';

describe('wcu-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wcu-image></wcu-image>');

    const element = await page.find('wcu-image');
    expect(element).toHaveClass('hydrated');
  });
});
