const puppeteer = require("puppeteer");
const fs = require("fs");
const e = require("express");

let urls = [
  // {
  //   url: "https://cloud.mojokbisnis.com/zendesk-suite/",
  //   codeElement: "#block-10",
  // },
  // {
  //   url: "https://investing.metodegames.com/how-to-buy-a-life-insurance-policy/",
  //   codeElement: "#block-10",
  // },
  // {
  //   url: "https://insurance.chords.id/how-to-start-a-rental-property-business/",
  //   codeElement: "#block-8",
  // },
  // {
  //   url: "https://cloud.ilmuteknik.id/vtenext/",
  //   codeElement: "#block-8",
  // },
  // {
  //   url: "https://money.madenginer.com/motorcycle-accident-attorneys-near-me/",
  //   codeElement: "#block-10",
  // },

  // {
  //   url: "https://finance.blackgarlic.id/systeme-io/",
  //   codeElement: "#block-12",
  // },
  // {
  //   url: "https://homecak.com/view/digital-marketing-agency/digital-marketing-agency-definition",
  //   codeElement: "#timer",
  // },
  // {
  //   url: "https://gasinglab.com/lw/lawyer/lawyer-salary",
  //   codeElement: "#timer",
  // },

  // {
  //   url: "https://resepinfo.com/wordpress-vps-hosting",
  //   codeElement: "#timer",
  // },
  // {
  //   url: "https://bigdata.siswaips.com/publish/big-data/big-data-analytics",
  //   codeElement: "#timer",
  // },
  // {
  //   url: "https://seasourcedata.com/id/big-data-course/online-courses-and-training-programs-for-big-data",
  //   codeElement: "#timer",
  // },
  // {
  //   url: "https://apeoplesmap.org/big-data-and-society",
  //   codeElement: "#timer",
  // },
  // {
  //   url: "https://kabar5.com/business/business-intelligence-tools/business-intelligence-tools-and-techniques",
  //   codeElement: "#timer",
  // },
  // {
  //   url: "https://frankenstein45.com/inter/places-to-donate-cars/",
  //   codeElement: ".wtnbottomadarticle",
  // },
  // {
  //   url: "https://home-mortgage.kiatkita.com/best-first-time-home-buyer-loans/",
  //   codeElement: ".wtnbottomadarticle",
  // },
  {
    url: "https://www.auto.or.id/investigating-wixs-support-for-israel/",
    codeElement: "#kode",
  },

  // {
  //   url: "https://stobietrena.exblog.jp/30652452/",
  //   codeElement: ".post-main div:nth-of-type(55)",
  // },
  // {
  //   url: "https://nazarioperry.exblog.jp/30636363",
  //   codeElement: ".post-main div:nth-of-type(63)",
  // },
  // {
  //   url: "https://pisangpanas.exblog.jp/30699779/",
  //   codeElement: ".post-main div:nth-of-type(90)",
  // },
  {
    url: "https://coinstide.com/2023/12/30/understanding-blockchain-technology-a-beginners-guide/",
    codeElement: ".entry-content b:nth-of-type(1)",
  },

  {
    url: "https://flashlearners.com/jobs/immigration-to-canada-as-electronics-engineer/",
    codeElement: "strong:nth-of-type(1)",
  },
  // {
  //   url: "https://langit.juaratekno.com/2022/02/homes-for-sale-in-litchfield-park-az.html",
  //   codeElement: ".post-body-artikel span:nth-of-type(1)",
  // },
  {
    url: "https://langit.juaratekno.com/2022/01/houses-for-sale-in-prosper-tx-with-pool.html",
    codeElement: ".post-body-artikel span:nth-of-type(1)",
  },
  // {
  //   url: "https://info.juaratekno.com/2022/02/bloomingdale-ny-houses-for-sale.html",
  //   codeElement: ".post-body-artikel b:nth-of-type(1)",
  // },
  {
    url: "https://info.juaratekno.com/2022/01/houses-for-sale-on-lake-murray-oklahoma.html",
    codeElement: "#download",
  },
  // {
  //   url: "https://ende.juaratekno.com/2022/05/lawyer-ithaca-how-to-choose-right.html",
  //   codeElement: ".post-body-artikel b:nth-of-type(1)",
  // },
  {
    url: "https://ende.juaratekno.com/2022/05/fha-lawyers-what-you-need-to-know.html",
    codeElement: "#download",
  },
  // {
  //   url: "https://flores.juaratekno.com/2021/12/houses-for-rent-in-cancun-mexico.html",
  //   codeElement: "#download",
  // },
  // {
  //   url: "https://flores.juaratekno.com/2021/10/houses-for-sale-in-cancun-playa-del.html",
  //   codeElement: "#download",
  // },
  {
    url: "https://flores.juaratekno.com/2022/02/houses-for-rent-in-costa-rica-on-beach.html",
    codeElement: "#download",
  },
  // {
  //   url: "https://papua.juaratekno.com/2021/06/houses-for-sale-with-inground-pool-in.html",
  //   codeElement: "#download",
  // },
  // {
  //   url: "https://papua.juaratekno.com/2022/01/south-fayette-county-ga-homes-for-sale.html",
  //   codeElement: "#download",
  // },
  {
    url: "https://papua.juaratekno.com/2021/06/gympie-southside-houses-for-sale.html",
    codeElement: "#download",
  },
  // {
  //   url: "https://kalimantan.juaratekno.com/2023/03/quotes-for-home-decor.html",
  //   codeElement: ".post-body-artikel b:nth-of-type(1)",
  // },
  {
    url: "https://kalimantan.juaratekno.com/2023/03/at-home-decor-store.html",
    codeElement: "#download",
  },

  // {
  //   url: "https://bcaboy.com/family-first-why-family-floater-health-insurance-is-a-must-have/",
  //   codeElement: "#countdown",
  // },
  {
    url: "https://skincareds.com/20-most-expensive-watches-dress-like-billionaire/",
    codeElement: "#download_link",
  },
  {
    url: "https://qepaso.com/recomendation-7-tools-business-intelligence-for-basic-business/",
    codeElement: "#download_link",
  },
  {
    url: "https://rovav.com/effective-strategies-for-repairing-your-credit/",
    codeElement: "strong:nth-of-type(1)",
  },
  {
    url: "https://cloud.fakta.id/cloud-migration-software/",
    codeElement: "#block-8",
  },
  {
    url: "https://kayakwave.com/best-kayak-for-seniors/",
    codeElement: ".footer",
  },
  {
    url: "https://levitraps.com/2023/08/29/heavy-equipment-hire/",
    codeElement: "#element-show",
  },
];
let typeAurls = [
  "https://bigdata.siswaips.com/publish/big-data/big-data-analytics",
  "https://resepinfo.com/wordpress-vps-hosting",
  "https://gasinglab.com/lw/lawyer/lawyer-salary",
  "https://homecak.com/view/digital-marketing-agency/digital-marketing-agency-definition",
  "https://apeoplesmap.org/big-data-and-society",
  "https://seasourcedata.com/id/big-data-course/online-courses-and-training-programs-for-big-data",
  "https://kabar5.com/business/business-intelligence-tools/business-intelligence-tools-and-techniques",
];

let typeBurls = [
  "https://ende.juaratekno.com/2022/05/fha-lawyers-what-you-need-to-know.html",
  "https://flores.juaratekno.com/2021/12/houses-for-rent-in-cancun-mexico.html",
  "https://flores.juaratekno.com/2021/10/houses-for-sale-in-cancun-playa-del.html",
  "https://flores.juaratekno.com/2022/02/houses-for-rent-in-costa-rica-on-beach.html",
  "https://papua.juaratekno.com/2021/06/houses-for-sale-with-inground-pool-in.html",
  "https://papua.juaratekno.com/2022/01/south-fayette-county-ga-homes-for-sale.html",
  "https://papua.juaratekno.com/2021/06/gympie-southside-houses-for-sale.html",
  "https://kalimantan.juaratekno.com/2023/03/at-home-decor-store.html",
  "https://info.juaratekno.com/2022/01/houses-for-sale-on-lake-murray-oklahoma.html",
];
let list = {};
(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  try {
    for (const url of urls) {
      // Navigate to the current URL
      await page.goto(url.url);

      // Wait for the element with the class ".hurrytimer-campaign-message"
      if (typeAurls.includes(url.url)) {
        await page.evaluate(() => {
          count();
        });
        await page.waitForTimeout(60000);
      } else if (typeBurls.includes(url.url)) {
        await page.evaluate(() => {
          newElement.parentNode.replaceChild(downloadButton, newElement);
        });
        await page.waitForTimeout(2000);
      }
      const elementHandle = await page.waitForSelector(url.codeElement, {
        timeout: 60000,
      });

      if (elementHandle) {
        // Extract text content of the element
        const textContent = await page.evaluate((element) => element.textContent, elementHandle);
        list[url.url] = textContent.trim();
      } else {
        console.log(`Element not found within the timeout for ${url.url}`);
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
  const filePath = "output2.txt";

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
