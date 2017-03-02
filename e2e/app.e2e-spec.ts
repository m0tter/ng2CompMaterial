import { Ng2CompMaterialPage } from './app.po';

describe('ng2-comp-material App', () => {
  let page: Ng2CompMaterialPage;

  beforeEach(() => {
    page = new Ng2CompMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
