const puppeteer = require("puppeteer");
let urls = ["yocef55", "reimanager", "SulaimanNR"];
(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({ headless: false });

  // Open a new page
  const page = await browser.newPage();

  for (let url of urls) {
    await page.goto(`https://sproutgigs.com/u/${url}#employer`);
    // Wait for the element to be rendered on the page
    // let  selectors  =  ["",""]
    //await page.waitForSelector("strong.font-weight-bold.text-primary:nth-of-type(12)");

    // Fetch the specific element
    //const element = await page.$("strong.font-weight-bold.text-primary:nth-of-type(12)");
    const nodeList = await page.$$(".col-lg-6.pl-lg-5 strong:nth-of-type(1)");

    // Use nodeList as needed
    console.log(nodeList);

    // Get the text content of the element
    const textContent = await page.evaluate((element) => element.textContent, element);
    console.log(textContent);

    // You can also extract attributes or perform other actions on the element here

    // Close the browser
    await browser.close();
  }
})();
