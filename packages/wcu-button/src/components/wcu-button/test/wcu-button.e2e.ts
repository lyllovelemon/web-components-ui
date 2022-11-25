import { newE2EPage } from '@stencil/core/testing';

describe('wcu-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wcu-button></wcu-button>');

    const element = await page.find('wcu-button');
    expect(element).toHaveClass('hydrated');
  });
});
