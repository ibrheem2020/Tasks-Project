const puppeteer = require("puppeteer");
const fs = require("fs");
const e = require("express");

let urls = [
  "https://brusselstribunal.org/unlocking-the-data-vault-embark-on-a-journey-into-the-world-of-big-data-analytics/",
  "https://invest.toriqa.com/the-5-greatest-benefits-of-crm-platforms/",
  "https://ratu.rajatender.com/navigating-health-insurance-in-the-united-states-coverage-challenges-and-reforms/",
  "https://ezwontech.com/google-big-query/",
  "https://earn.inquiz.in/job/10-tips-for-studying-in-the-united-states/",
  "https://earning.inquiz.in/10-tips-for-studying-in-the-united-states/",
  //"https://money.imigrasilampung.co.id/how-to-implement-business-intelligence-in-companies/",
  "https://www.bleumoonproductions.com/best-lawyers-in-south-korea/",
  //"https://crm.aepone.com/unveiling-the-best-business-intelligence-tools/",
  //"https://business.apkpro.id/erp-full-form-in-accounting-understanding-the-significance/",
  //"https://finance.djbhojpuriking.in/2023/11/01/how-to-make-money-online-with-binance/",
  //"https://f1.djbiharmasti.in/index.php/2023/11/01/how-to-make-money-online-with-binance/",
  "https://howkiki.com/safeguarding-success-the-crucial-role-of-business-accident-insurance/",
  //"https://newsfern.com/a-comprehensive-guide-to-the-best-online-degree-programs-for-business-in-the-usa/",
  "https://networthohub.com/best-university-for-online-psychology-degree-programs-in-usa/",
  "https://finance.djbhojpuriking.in/2023/11/01/how-to-make-money-online-with-binance/",
  //"https://f1.djjatin.in/index.php/2023/11/01/how-to-make-money-online-with-binance/",
  "https://f1.djbiharmasti.in/index.php/2023/11/01/how-to-make-money-online-with-binance/",
  "https://adsyoga.com/job/best-student-credit-cards-in-february-2024/",
];
let list = {};
(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  try {
    for (const url of urls) {
      // Navigate to the current URL
      await page.goto(url);

      // Wait for the element with the class ".hurrytimer-campaign-message"

      const elementHandle = await page.waitForSelector(".hurrytimer-campaign-message", {
        timeout: 90000,
      });

      if (elementHandle) {
        // Extract text content of the element
        const textContent = await page.evaluate((element) => element.textContent, elementHandle);
        list[url] = textContent.trim();
      } else {
        console.log(`Element not found within the timeout for ${url}`);
      }
      console.log(list);
      // Optional: Take a screenshot and save it to a file for each URL
    }
  } catch (error) {
    console.log(error);
  }
  // Convert the JavaScript object to a JSON-formatted string
  const jsonString = JSON.stringify(list, null, 2);

  // Specify the file path
  const filePath = "output.txt";

  // Write the JSON string to the file
  fs.writeFile(filePath, jsonString, "utf-8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`File "${filePath}" has been saved.`);
    }
  });
  // Close the browser
  await browser.close();
})();

// let x = document.getElementsByClassName("is-premium");
// let elementsWithoutPremium = document.querySelectorAll(
//   ".jobs__item.jobs__item--client-starter:not(.is-premium)"
// );
// let n = [];
// let y = Array.from(x);
// let z = y.filter((e) => {
//   if (e.children[5].textContent === "1") {
//     n.push(e.href);
//   }
// });
// elementsWithoutPremium.forEach(function (element) {
//   let rate = element.childNodes[21].textContent.trim();
//   let searchRate = ["19223", "2393","6437","735"];
//   if (searchRate.some((item) => rate.includes(item))) {
//     n.push(element.href);

//   }
// });

// function copyToClipboardWithNewLines(array) {
//   const textarea = document.createElement("textarea");
//   const arrayString = array.join("\n");
//   textarea.value = arrayString;
//   textarea.style.position = "fixed";
//   textarea.style.opacity = 0;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textarea);
// }

// copyToClipboardWithNewLines(n);
