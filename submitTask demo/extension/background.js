chrome.webNavigation.onCompleted.addListener(function (details) {
  if (details.url && details.url.includes("sproutgigs.com/jobs/")) {
    chrome.tabs.sendMessage(details.tabId, { message: "Tab opened!" }, async function (response) {
      console.log(response);
      if (response) {
        //let timeout = response.timeout + 1;
        let localHostedUrl = "http://localhost:3000/";
        if (response.type === "pcodeUrl") {
          localHostedUrl = localHostedUrl + "getPcode";
        } else {
          localHostedUrl = localHostedUrl + "getFixedTaskData";
        }
        fetch(localHostedUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.pcode) {
              chrome.tabs.sendMessage(details.tabId, {
                message: "pcodeRecieved",
                data,
                //timeout,
              });
            } else if (data.dataObj) {
              if (data.dataObj.about) {
                chrome.tabs.sendMessage(details.tabId, {
                  message: "dataObjWithAboutRecieved",
                  data,
                });
              } else {
                chrome.tabs.sendMessage(details.tabId, {
                  message: "dataObjRecieved",
                  data,
                });
              }
            } else {
              chrome.tabs.sendMessage(details.tabId, {
                message: "can't get code",
                data,
              });
            }
          });
      }
    });
  }
});

// background.js

// Function to open URLs recursively with a 1-minute delay
function openUrlsWithDelay(urls, delay, index) {
  if (index < urls.length) {
    chrome.tabs.create({ url: urls[index], active: false }, (tab) => {
      setTimeout(() => {
        openUrlsWithDelay(urls, delay, index + 1);
      }, delay);
    });
  }
}

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openUrls") {
    // Start opening URLs with a 1-minute delay
    openUrlsWithDelay(message.urls, 20000, 0);
  }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openOneDayTasks") {
    // Start opening URLs with a 1-minute delay
    openUrlsWithDelay(message.urls, 20000, 0);
  }
});

// background.js

// Listen for messages from the content script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "openUrls") {
//     // Open URLs in a new tab
//     message.urls.forEach((url) => {
//       setTimeout(() => {
//         chrome.tabs.create({ url: url, active: false }, (tab) => {
//           console.log("tab opened");
//         });
//       }, 5000);
//     });
//   }
// });

// You can add more events based on your requirements.

// Example: Listen for a browser action click
// chrome.action.onClicked.addListener(function (tab) {
//   // Reload the active tab when the extension's icon is clicked
//   chrome.tabs.reload(tab.id);
// });
// chrome.tabs.onCreated.addListener(function (tab) {
//   if (tab.pendingUrl && tab.pendingUrl.includes("sproutgigs.com/jobs")) {
//     setTimeout(function () {
//       chrome.tabs.sendMessage(tab.id, { message: "Tab opened!" }, async function (response) {
//         const localHostedUrl = "http://localhost:3000/start";
//         fetch(localHostedUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(response),
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             if (data.success) {
//               chrome.tabs.sendMessage(tab.id, {
//                 message: "codeRecieved",
//                 code: data.code,
//               });
//             } else {
//               chrome.tabs.sendMessage(tab.id, {
//                 message: "can't get code",
//                 code: data,
//               });
//             }
//           });
//       });
//     }, 40000);
//   }
// });
