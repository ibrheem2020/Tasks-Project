chrome.webNavigation.onCompleted.addListener(function (details) {
  if (details.url && details.url.includes("sproutgigs.com/jobs/")) {
    setTimeout(function () {
      chrome.tabs.sendMessage(details.tabId, { message: "Tab opened!" }, async function (response) {
        console.log(response);
        if (response) {
          let localHostedUrl = "https://tasks-project-xsms.onrender.com/";
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
    }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000);
  }
});

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
