import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
const defaultTimeout = browser.params.defaultTimeout;
export = function onlinerSteps() {

  this.setDefaultTimeout(60000);
  let timeout: number = browser.params.defaultTimeout;
  this.setDefaultTimeout(60000);

  this.Given(/^Homepage onliner.by was opened$/, async () => {
    await browser.navigate().to(browser.params.onlinerByURL);
  });

  this.When(/^Click on "Барахолка" hyperlink$/, async () => {
    let baraholkaLink: ElementFinder = await element(by.xpath('//a[contains(text(), "Барахолка")]'));
    await browser.wait(ExpectedConditions.visibilityOf(baraholkaLink), timeout, "Timeout error")
    baraholkaLink.click();
  });

  this.Then(/^User was redirected to specific "Барахолка" page baraholka.onliner.by$/, async () => {
    let barakholkaURL: string = "https://baraholka.onliner.by/";
    await browser.wait(ExpectedConditions.urlIs(barakholkaURL), timeout, "Timeout error");
  });

  this.Given(/^"Барахолка" page was opened$/, async () => {
    await browser.navigate().to(browser.params.barakholkaURL);
  });

  this.Then(/^"Лопата" was entered in the search bar$/, async () => {
    let searchField: ElementFinder = await element(by.xpath('//input[@id="fleaMarketSearchInput"]'));
    searchField.clear();
    searchField.click();
    await browser.wait(ExpectedConditions.visibilityOf(searchField), timeout, "Timeout error");
    await searchField.sendKeys("Лопата");
  });

  this.Then(/^Click "Search" button$/, async () => {
    let searchButton: ElementFinder = await element(by.xpath('//button[@class = "btn"]'));
    await browser.wait(ExpectedConditions.visibilityOf(searchButton), timeout, "Timeout error");
    await searchButton.click();
  });

  this.Then(/^Headers  "Все", "Продам", "Куплю", "Обмен", "Услуга", "Аренда", "Закрыто" were presented for user$/, async () => {
    let elementGrid: ElementFinder = await element(by.xpath('//ul[@class="b-ba-tabs fleamarket__1"]/child::*'));
    let itemNamesArr: Array<string> = ["Все", "Продам", "Куплю", "Обмен", "Услуга", "Аренда", "Закрыто"];

    for (let i = 0; i < elementGrid.length; i++) {
      await browser.wait(ExpectedConditions.textToBePresentInElement(elementGrid[i], itemNamesArr[i]), timeout,"Timeout error");
    };
  });
}