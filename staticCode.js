const puppeteer = require("puppeteer");
async function getStaticCode(url, codeElement, clearString) {
  // Launch a headless browser
  const browser = await puppeteer.launch({ headless: "new" });
  try {
    const page = await browser.newPage();
    await page.goto(url);
    const elementHandle = await page.waitForSelector(codeElement, {
      timeout: 60000,
    });

    if (elementHandle) {
      const textContent = await page.evaluate((element) => element.textContent, elementHandle);
      let value = textContent.trim();
      let code = value.replace(clearString, "");
      if (code) {
        return code;
      }
      console.log(code);
    } else {
      console.log(`Element not found within the timeout for ${url}`);
    }
    // Optional: Take a screenshot and save it to a file for each URL
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }
  // Close the browser
}

module.exports = getStaticCode;
