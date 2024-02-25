const puppeteer = require("puppeteer");

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({ headless: false });

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the desired website
  await page.goto("https://bigdata.saniter.co.id/accounting-software-for-small-business/");
  // Execute code in the context of the page
  // await page.evaluate(() => {
  //   // Access the console object and execute commands
  //   let x = document.getElementsByTagName('span')[5]
  //   return x
  // });

  console.log(names);

  // Close the browser
})();

// async function run() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://bigdata.saniter.co.id/accounting-software-for-small-business/");

//     let source = await page.content({"waitUntil": "domcontentloaded"});

//     function searchInTextCaseInsensitive(searchTerm = "code") {
//       source.toLowerCase();
//       searchTerm = searchTerm.toLowerCase();

//       let index = source.indexOf(searchTerm);
//       const redText = "\x1b[31m%s\x1b[0m"; // Red
//       const greenText = "\x1b[32m%s\x1b[0m"; // Green

//       if (index !== -1) {
//           console.log(greenText,`${searchTerm} was found`);
//           showNotification(searchTerm)
//         return true;
//       } else {
//         console.log(redText,`wasn't found`);
//         return false
//       }
//   }
//   searchInTextCaseInsensitive()
//     browser.close();
// }

// run();
const redText = "\x1b[31m%s\x1b[0m";
const greenText = "\x1b[32m%s\x1b[0m"; // Green
const x = document.getElementsByClassName("btn btn-icon text-danger clear-search");
let tries = 0;

function search(stringsToSearch) {
  let tasks = Array.from(document.getElementsByClassName("jobs__item jobs__item--client-starter"));
  let arrayOfRates = tasks.map((m) => m.children[10].textContent.trim().toLowerCase());
  let state = false;

  stringsToSearch.forEach((searchTerm) => {
    let foundIndex = arrayOfRates.findIndex((text) => text.includes(searchTerm));

    if (foundIndex !== -1) {
      console.log(greenText, `➢${searchTerm} was found in ${(redText, tries)} seconds`);
      tasks[foundIndex].style.color = "#90EE90";
      console.log(tasks[foundIndex].href);
      if (Notification.permission === "granted") {
        const notification = new Notification(`${searchTerm} was Found`, {
          body: "Click here to get access to the Task",
          data: {
            url: tasks[foundIndex].href,
          },
        });
        notification.onclick = function () {
          const url = notification.data.url;
          window.open(url, "_blank");
        };
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") return new Notification("Result was Found!");
        });
      }
      state = true;
    } else {
      console.log(`Looking for ${stringsToSearch}`);
    }
  });
  if (state) return true;
  else return false;
}

function delayedLoop() {
  if (!search(["115 / 62"])) {
    x[0].click();
    setTimeout(delayedLoop, 1000);
  }
}
delayedLoop();

//zil bank
xcvbfsdgas = decodeURIComponent(window["atob"](_0x2d42ae["c"]));
console.log(xcvbfsdgas);
function submitTask(proofOrder = 1, timeoutInSeconds) {
  function setProofs() {
    let ads = {
      1: {
        site: "https://www.thefigueroateam.com/testimonials?gclid=EAIaIQobChMIo9CuxOOfgwMVGrAbCh3twAtBEAEYASAAEgLASvD_BwE",
        contact: "https://www.thefigueroateam.com/new-contact-us",
      },
      2: { site: "example2.com", contact: "example2.com/contact" },
    };
    let proof1 = document.getElementById("proof_1");
    let proof2 = document.getElementById("proof_2");
    if (proofOrder === 1) {
      proof1.value = ads[timeoutInSeconds].site;
      proof2.value = ads[timeoutInSeconds].contact;
    } else {
      proof2.value = ads[timeoutInSeconds].site;
      proof1.value = ads[timeoutInSeconds].contact;
    }
  }
  setProofs();
  let submitButton = document.getElementById("submit-proof-btn");
  let timeoutInMillis = timeoutInSeconds * 60 * 1000;
  setTimeout(function () {
    submitButton.click();
    console.log(`Task was submited after ${timeoutInSeconds} Seconds`);
  }, timeoutInMillis);
  setTimeout(function () {
    window.close();
  }, timeoutInMillis * 1.1);
  console.log("hi");
}
submitTask(1, 1);
// let x = document.getElementsByClassName("is-premium");
// let y = Array.from(x);
// y.map((e) => {
//   if (e.children[5].textContent === "1") {
//     e.style.color = "orange";
//   } else {
//     e.parentNode.removeChild(e);
//   }
// });

// let x = document.getElementsByClassName("is-premium");
// let n = [];
// let y = Array.from(x);
// let z = y.filter((e) => {
//   if (e.children[5].textContent === "1") {
//     n.push(e.href);
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

//find task updated
const url = "https://sproutgigs.com/ajax.php";
let searchFound = false;

function fetchData(sortType = "NEWEST", retryCount = 2000) {
  const formData = new URLSearchParams();
  formData.append("action", "load_more_jobs");
  formData.append("layout", "compact");
  formData.append("limit", 100);
  formData.append("max", 4);
  formData.append("page", 1);
  formData.append("category", 10);
  formData.append("empstats", "jobs-high");
  formData.append("cost", "0.03;0.03");

  fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.success && data.data && data.data.html) {
        const htmlValue = data.data.html;
        let search = "7918";
        document.querySelector(
          ".page-filters"
        ).innerHTML = `<span><div>👀Searching for: <span style="color: blue;font-family: 'cursive', cursive;">${search} </span>🔎</div> </span>`;
        document.querySelector(".page-filters").style.fontSize = "71px";
        document.querySelector(".page-filters").style.backgroundImage =
          "linear-gradient(to left, #6b79d1, #c671c4, #ff709d, #ff8a6c, #ffb446, #ffb23c, #ffb131, #ffaf23, #ff764d, #ff3c88, #e639ca, #5f5ffb)";

        if (htmlValue.includes(search) && !searchFound) {
          searchFound = true;
          document.querySelector(".jobs__items").innerHTML = htmlValue;
          document.querySelector(
            ".page-filters"
          ).innerHTML = `<span><div>💚Task <span style="color: green;font-family: 'cursive', cursive;">${search} </span> Was Found!💙</div>        💚 أدعي  لعمو هيما💙</span>`;
          document.querySelector(".page-filters").style.fontSize = "71px";
          document.querySelector(".page-filters").style.backgroundImage =
            "linear-gradient(to left, #3dff34, #00e6b3, #00c2ff, #0092ff, #3d3df9)";
          console.log("Done...");
          new Notification(`Hi, ${search} Was Found!`);
        } else {
          const nextSortType = sortType === "NEWEST" ? "COST" : "NEWEST";
          console.log(`🔎 ${search} | Sorting by: ${nextSortType}`);
          if (!searchFound && retryCount > 0) {
            setTimeout(() => fetchData(nextSortType, retryCount - 1), 5000);
          } else {
            console.log("Search already found or exceeded maximum retry attempts");
          }
        }
      } else {
        console.error("Invalid response format");
        fetchData();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      if (!searchFound && retryCount > 0) {
        // Retry the request with decreased retryCount
        setTimeout(() => fetchData(sortType, retryCount - 1), 5000);
      } else {
        console.error("Exceeded maximum retry attempts");
      }
    });
}

// Call the function to initiate the request with the default sort type (NEWEST)
fetchData();

document.querySelector(
  ".page-filters"
).innerHTML = `<span><div>💚Task <span style="color: green;font-family: 'cursive', cursive;">${search} </span> Was Found!💙</div>        💚 أدعي  لعمو هيما💙</span>`;
document.querySelector(".page-filters").style.fontSize = "71px";
document.querySelector(".page-filters").style.backgroundImage =
  "linear-gradient(to left, #3dff34, #00e6b3, #00c2ff, #0092ff, #3d3df9)";
