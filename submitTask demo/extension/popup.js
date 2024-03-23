document.addEventListener("DOMContentLoaded", function () {
  let proofBoxAds = document.getElementById("proofBox2Ads");
  let minutesInput = document.getElementById("minutesInput");
  let style1 = document.getElementById("style1");
  let style2 = document.getElementById("style2");
  let style3 = document.getElementById("style3");
  let resetButton = document.getElementById("resetButton");
  let submitTask = document.getElementById("submitTask");
  let searchTaskBtn = document.getElementById("searchTask");
  let fastSearchTaskBtn = document.getElementById("fastSearchTask");
  let fastRateSearch = document.getElementById("fastRateSearch");
  let fastRateSearchSpeed = document.getElementById("fastRateSearchSpeed");
  let oneDayTasksBtn = document.getElementById("oneDayTasks");

  style1.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "style1" });
    });
  });

  style2.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "style2" });
    });
  });
  style3.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "style3", proofBoxNum: proofBoxAds.value });
    });
  });
  resetButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "reset" });
    });
  });
  submitTask.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let minutesCal = parseInt(minutesInput.value);
      console.log(minutesCal);
      chrome.tabs.sendMessage(tabs[0].id, { action: "submit", minutesCal });
    });
  });
  searchTaskBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let rates = rateSearch.value.split(",");
      console.log(rates);
      chrome.tabs.sendMessage(tabs[0].id, { action: "search", rates });
    });
  });
  fastSearchTaskBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let rates = fastRateSearch.value.split(",");
      let speed = parseInt(fastRateSearchSpeed.value);
      console.log(rates);
      chrome.tabs.sendMessage(tabs[0].id, { action: "search", rates, speed });
    });
  });
  oneDayTasksBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //let rates = rateSearch.value.split(",");
      //console.log(rates);
      chrome.tabs.sendMessage(tabs[0].id, { action: "oneDayTasks" });
    });
  });
});
