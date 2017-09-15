import { SimpleMoneyPage } from './app.po';

describe('simple-money App', () => {
  let page: SimpleMoneyPage;

  beforeEach(() => {
    page = new SimpleMoneyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
