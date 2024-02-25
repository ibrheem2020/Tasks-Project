function searchInTextCaseInsensitive(searchTerm) {
  text = document.body.innerText;
  text = text.toLowerCase();
  searchTerm = searchTerm.toLowerCase();

  let index = text.indexOf(searchTerm);
  const redText = "\x1b[31m%s\x1b[0m"; // Red
  const greenText = "\x1b[32m%s\x1b[0m"; // Green

  if (index !== -1) {
    console.log(greenText, `${searchTerm} was found`);
    showNotification(searchTerm);
    return true;
  } else {
    console.log(redText, `wasn't found`);
    return false;
  }
}

function showNotification(searchTerm) {
  if (Notification.permission === "granted") {
    var notification = new Notification(`${searchTerm} was Found`);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Result was Found!");
      }
    });
  }
}

// Example usage

function delayedLoop() {
  if (!searchInTextCaseInsensitive("18079 / 99%")) {
    x[0].click();

    // Introduce a delay using setTimeout
    setTimeout(delayedLoop, 1000); // 1000 milliseconds (1 second) delay
  }
}
delayedLoop();
