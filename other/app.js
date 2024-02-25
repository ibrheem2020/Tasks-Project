// const count = document.getElementById('job-search-results')
// const x = document.getElementsByClassName('btn btn-icon text-danger clear-search')
// function newCount(count){
// 	let newCount = parseInt(count.textContent)
// 	return newCount;
// }

// while ( newCount(count) <= 5) {
//     x[0].click()
//     newCount(count)
// }

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
// function showNotification(searchTerm) {
//     if (Notification.permission === "granted") {
//       var notification = new Notification(`${searchTerm} was Found`);

//     } else if (Notification.permission !== "denied") {
//       Notification.requestPermission().then(function (permission) {
//         if (permission === "granted") {
//           var notification = new Notification("Result was Found!");
//         }
//       });
//     }
//   }

// Example usage
const count = document.getElementById("job-search-results");
const x = document.getElementsByClassName("btn btn-icon text-danger clear-search");
function newCount(count) {
  let newCount = parseInt(count.textContent);
  return newCount;
}
let highCount = 0;

function delayedLoop() {
  if (!searchInTextCaseInsensitive("6743")) {
    x[0].click();
    if (highCount < newCount(count)) {
      highCount = newCount(count);
    }
    console.log(`${newCount(count)}, Highest Count= ${highCount}`);

    // Introduce a delay using setTimeout
    setTimeout(delayedLoop, 1000); // 1000 milliseconds (1 second) delay
  }
}
delayedLoop();

function showNotification() {
  if (Notification.permission === "granted") {
    var notification = new Notification("Result was Found");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Result was Found!");
      }
    });
  }
}

//const x = document.getElementById('submit-proof-btn')
//x.click()
//y[0].click()

//const y = document.getElementsByClassName('swal2-confirm swal2-styled')
function delayedLoop() {
  if (420 < 420) {
    x.click();

    // Introduce a delay using setTimeout
    setTimeout(delayedLoop, 100); // 1000 milliseconds (1 second) delay
    y[0].click();
  }
}
delayedLoop();
