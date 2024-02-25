const puppeteer = require("puppeteer");
require("dotenv").config();

let sitesWithNavToCode = [
  "erponline.damrilogistics.co.id",
  "crm.covidcare.id",
  "business.apkpro.id",
  "m.hanahanif.com",
];
const originProofs = {
  "https://en.infomase.com": "site",
  "https://skin.amongguru.com": {
    proof_1: "https://skin.amongguru.com/unveiling-the-exceptional-efficacy-of-top-beauty-clinics/",
    proof_2: "site",
  },
  "https://en.dvcodes.com": {
    proof_1:
      "https://en.dvcodes.com/exploring-the-enchanting-wonders-of-vietnam-a-fascinating-journey/",
    proof_2: "site",
  },
  "https://bowo.hobigame.id": {
    proof_1:
      "https://bowo.hobigame.id/get-your-body-skincare-routine-started-a-beginners-guide-to-glowing-skin/",
    proof_2: "site",
  },
  "https://us.hapekit.com": {
    proof_1:
      "https://us.hapekit.com/the-beacon-of-wealth-unveiling-high-end-investment-opportunities/",
    proof_2: "site",
  },
  "https://web.teknokrad.com": {
    proof_1: "https://web.teknokrad.com/ecommerce-business-intelligence/",
    proof_2: "site",
  },
  "https://web.dyp.im": {
    proof_1:
      "https://web.dyp.im/turn-your-passion-for-beauty-into-a-business-top-beauty-products-to-sell-from-home-easy-peasy/",
    proof_2: "site",
  },
};

async function getTask(website) {
  const response = {};

  let myUrl = new URL(website);
  const matchedOrigin = myUrl.origin;
  if (sitesWithNavToCode.includes(myUrl.hostname) || !myUrl) {
    response.error = "This website is not supported";
    return response;
  } else {
    const browser = await puppeteer.launch({
      timeout: 0,
      args: ["--no-sandbox", "--disable-setuid-sand", "--single-process", "--no-zygote"],
      headless: "new",
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });

    const page = await browser.newPage();
    try {
      await page.goto(myUrl.href, { waitUntil: "domcontentloaded", timeout: 120000 });
      // if (matchedOrigin === "https://ekonomiupri.id") {
      //   let pcodePage =
      //     "https://ekonomiupri.id/en/best-hotels-in-the-united-kingdom-unveiling-luxury-and-comfort/";
      //   response.vproof = pcodePage;
      //   await page.goto(pcodePage, { waitUntil: "domcontentloaded", timeout: 60000 });
      //   const elementHandle = await page.waitForSelector(".hurrytimer-campaign-message", {
      //     timeout: 90000,
      //   });

      //   if (elementHandle) {
      //     const textContent = await page.evaluate(
      //       (element) => element.textContent.split(": ")[1],
      //       elementHandle
      //     );
      //     response.pcode = textContent;
      //   } else {
      //     console.log(`Element not found within the timeout for `);
      //   }
      // }
      // if (matchedOrigin === "https://business.apkpro.id") {
      //   await page.goto(
      //     "https://business.apkpro.id/cloud-big-data-technologies-overview-and-use-cases/",
      //     { waitUntil: "domcontentloaded", timeout: 60000 }
      //   );
      //   let pcode = await page.evaluate(() => {
      //     async function nextPage() {
      //       let element = document.querySelector('p[style="color:red;"]');
      //       if (element) {
      //         if (element.textContent) {
      //           let pcode = element.textContent.split(": ")[1];
      //           await pcode;
      //         }
      //       } else {
      //         let timer = document.querySelector("#timer");
      //         if (timer) {
      //           counter = 1;
      //           startTimer();
      //           setTimeout(nextPage, 1000);
      //         } else {
      //           return new Error("err");
      //         }
      //       }
      //     }
      //     nextPage();
      //   });
      //   if (pcode) {
      //     response.pcode = pcode;
      //   } else {
      //     response.error = pcode;
      //   }
      // }
      if (originProofs.hasOwnProperty(matchedOrigin)) {
        if (originProofs.hasOwnProperty(matchedOrigin)) {
          const proofInfo = originProofs[matchedOrigin];
          if (typeof proofInfo === "string") {
            response.proof_1 = proofInfo;
          } else {
            response.proof_1 = proofInfo.proof_1;
            response.proof_2 = proofInfo.proof_2;
          }
        }
        await page.goto(matchedOrigin, { waitUntil: "domcontentloaded", timeout: 120000 });
        const pocdeValue = await page.evaluate(async () => {
          try {
            const element = await waitForValue(120000, 5000);
            return element;
          } catch (error) {
            console.error("Pcode Function Error:", error.message);
            return error;
          }
          function waitForValue(timeout, interval) {
            return new Promise(async (resolve, reject) => {
              const endTime = Date.now() + timeout;

              function checkValue() {
                const formData = new FormData();
                formData.append("action", "verify_visited_posts");

                fetch(`${window.location.href}wp-admin/admin-ajax.php`, {
                  method: "POST",
                  body: formData,
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.verification_success) {
                      resolve(data.pcode);
                    } else if (Date.now() < endTime) {
                      setTimeout(checkValue, interval);
                    } else {
                      reject(new Error(`Timeout waiting for: ${hasil}`));
                    }
                  })
                  .catch((error) => console.error("Error:", error));
              }

              checkValue();
            });
          }
        });
        response.pcode = pocdeValue;
      } else {
        if (matchedOrigin === "https://kuismedia.id") {
          await page.goto(matchedOrigin + "/en", {
            waitUntil: "domcontentloaded",
            timeout: 120000,
          });
        }
        // else if (matchedOrigin === "https://kabarlinux.web.id") {
        //   await page.goto(matchedOrigin + "/en", { waitUntil: "domcontentloaded", timeout: 60000 });
        // }
        else if (matchedOrigin === "https://ekonomiupri.id") {
          await page.goto(matchedOrigin + "/en", {
            waitUntil: "domcontentloaded",
            timeout: 120000,
          });
        } else {
          await page.goto(matchedOrigin, { waitUntil: "networkidle0", timeout: 120000 });
        }
        if (matchedOrigin === "https://kabarlinux.web.id") {
          response.vproof =
            "https://kabarlinux.web.id/news/places-to-visit-and-stay-at-the-beginning-of-the-year-in-lithuania/";
        } else if (matchedOrigin === "https://kinemaster.co.id") {
          response.vproof = "https://kinemaster.co.id/year-end-tourist-attractions-in-thailand/";
          // response.vproof =
          //   "https://kinemaster.co.id/end-of-year-tourist-attractions-in-the-british-virgin-islands-paradise/";
        } else if (matchedOrigin === "https://apfinance.id") {
          response.vproof =
            "https://apfinance.id/best-cars-to-buy-in-brazil-brazilian-car-market-for-your-ideal-ride/";
          // response.vproof =
          //   "https://apfinance.id/best-cars-to-buy-in-germany-quality-and-engineering-excellence/";
        } else if (matchedOrigin === "https://www.ruangcakrawala.com") {
          response.vproof =
            "https://www.ruangcakrawala.com/best-authentic-sushi-restaurants-in-the-us/";
        } else if (matchedOrigin === "https://www.dekorunik.com") {
          response.vproof =
            "https://www.dekorunik.com/year-end-destinations-in-the-british-virgin-islands/";
        } else if (matchedOrigin === "https://money.primajasa.co.id") {
          response.proof_1 =
            "https://money.primajasa.co.id/big-data-platforms-unlocking-the-vast-universe-of-information/";
          response.proof_2 = "both";
        } else if (matchedOrigin === "https://mrp.primajasa.co.id") {
          response.proof_1 = "https://mrp.primajasa.co.id/best-hotels-in-australia/";
          response.proof_2 = "both";
        } else if (matchedOrigin === "https://www.kavsar.net") {
          response.vproof = "https://www.kavsar.net/best-cars-to-buy-in-british-virgin-islands/";
        } else if (matchedOrigin === "https://ekonomiupri.id") {
          response.vproof =
            "https://ekonomiupri.id/en/best-hotels-in-the-united-kingdom-unveiling-luxury-and-comfort/";
        }
        //await page.waitForFunction("jQuery()", { timeout: 5000 });

        const checkjQuery = await page.evaluate(() => typeof jQuery === "function");
        if (!checkjQuery) {
          throw new Error("jQuery is not Defined!");
        }
        //await page.waitForTimeout(2000);

        await page.evaluate(clickAd);
        const pocdeValue = await page.evaluate(async () => {
          try {
            const element = await waitForValue(120000, 5000);
            return element;
          } catch (error) {
            console.error("Pcode Function Error:", error.message);
            return error;
          }
          function waitForValue(timeout, interval) {
            return new Promise(async (resolve, reject) => {
              const endTime = Date.now() + timeout;

              function checkValue() {
                jQuery.ajax({
                  type: "POST",
                  url: `${window.location.href}wp-admin/admin-ajax.php`,
                  data: {
                    action: "validasi_iklan",
                    masuk: "gass",
                  },
                  dataType: "json",
                  complete: function (response) {
                    let hasil = JSON.parse(response.responseText);
                    if (hasil.status == "isi") {
                      resolve(hasil.pcode);
                    } else if (Date.now() < endTime) {
                      setTimeout(checkValue, interval);
                    } else {
                      reject(new Error(`Timeout waiting for: ${hasil}`));
                    }
                  },
                });
              }
              checkValue();
            });
          }
        });

        function clickAd() {
          jQuery.ajax({
            type: "POST",
            url: `${window.location.href}wp-admin/admin-ajax.php`,
            data: {
              action: "klik_iklan",
              masuk: "gass",
            },
            dataType: "json",
            //complete: function (response) {
            //console.log("ad clicked");
            //},
          });
        }

        if (typeof pocdeValue !== "object" && pocdeValue.includes("pw")) {
          response.pcode = pocdeValue;
        } else {
          response.error = pocdeValue;
        }
      }
    } catch (err) {
      //console.log(err);
      response.errorName = err.name || err.message;
    } finally {
      await browser.close();
      return response;
    }
    //console.log(response);
  }
}
module.exports = getTask;
//getTask("https://business.apkpro.id/start.php?job=b8329a5ed4ba&worker=209a6755");
//await page.setBypassCSP(true);
//https://hpk.yanacircle.com/?job=095736534761&worker=677dfb39
//https://kuismedia.id/en/?job=ae105a03167a&worker=677dfb39
