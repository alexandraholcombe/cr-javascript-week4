import { Javascriptweek4Page } from './app.po';

describe('javascriptweek4 App', function() {
  let page: Javascriptweek4Page;

  beforeEach(() => {
    page = new Javascriptweek4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
