import { NewMessengerPage } from './app.po';

describe('new-messenger App', () => {
  let page: NewMessengerPage;

  beforeEach(() => {
    page = new NewMessengerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
