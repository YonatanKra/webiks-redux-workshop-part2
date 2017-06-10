import { WebiksReduxWorkshopPage } from './app.po';

describe('webiks-redux-workshop App', () => {
  let page: WebiksReduxWorkshopPage;

  beforeEach(() => {
    page = new WebiksReduxWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
