import { AgileTourSherbrookePage } from './app.po';

describe('agile-tour-sherbrooke App', () => {
  let page: AgileTourSherbrookePage;

  beforeEach(() => {
    page = new AgileTourSherbrookePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
