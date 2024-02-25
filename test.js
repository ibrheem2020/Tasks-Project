//get the proofs boxes
var proofsBox = document.getElementsByClassName("form-group");

var proofArray = [];

for (var i = 0; i < proofsBox.length; i++) {
  var textarea = proofsBox[i].querySelector("textarea");

  // Check if the textarea exists and has the desired IDs
  if (
    textarea &&
    (textarea.id === "vproof" ||
      textarea.id === "proof_1" ||
      textarea.id === "proof_2" ||
      textarea.id === "proof_3")
  ) {
    proofArray.push(textarea);
  }
}
console.log(proofArray);
var m = document.getElementsByClassName("form-group");
var desiredIds = ["proof_1", "proof_2", "proof_3", "vproof"];

// var vproofTextarea = null;
// var otherTextareas = [];

// for (var i = 0; i < m.length; i++) {
//     var textarea = m[i].querySelector('textarea');

//     // Check if the textarea exists and has one of the desired IDs
//     if (textarea && desiredIds.includes(textarea.id)) {
//         if (textarea.id === 'vproof') {
//             // If the textarea has the ID 'vproof', add it to vproofTextarea
//             vproofTextarea = textarea;
//         } else {
//             // If the textarea has a different ID, add it to otherTextareas
//             otherTextareas.push(textarea);
//         }
//     }
// }

// // vproofTextarea contains the textarea with id 'vproof'
// console.log('vproofTextarea:', vproofTextarea);

// // otherTextareas contains the textareas with the other specified IDs
// console.log('otherTextareas:', otherTextareas);

const url = "https://sproutgigs.com/jobs/task-submitted.php";

// Create a new FormData object
const formData = new FormData();
formData.append("csrf_token", "d264aac7e354bc30068bd64f520a8406");
formData.append("Id", "e5f775735c4f662a2a89882d");
formData.append("idesc", -1);
formData.append(
  "proof_1",
  "voici le prix pour acheter Mini Emergency Power Bank,porte-clés avec connecteur USB Type-C,Battery 1500 mAh au Maroc: 79.00 Dhs"
);
formData.append(
  "proof_2",
  "https://electronix.ma/smartphone/motorola-moto-g84-5g-gsm-debloque-version-internationale-256-go-12-go-de-ram-double-sim-android-13-smartphone-viva-magenta-fiche-technique-et-prix-au-maroc/"
);
formData.append(
  "proof_3",
  "https://www.teknetic.com/?gclid=EAIaIQobChMIj7qmu7figwMVkGUVCB1pyAspEAEYASAAEgIrKPD_BwE\nhttps://www.teknetic.com/contact-us"
);
// Configure the fetch options
const options = {
  method: "POST",
  body: formData, // Use the FormData object as the body
};

// Make the POST request using Fetch
fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log("Response:", data))
  .catch((error) => console.error("Error:", error));

const url2 = "https://sproutgigs.com/jobs/submit-task.php?Id=b5f723705d1d37252fdf862a";

// Configure the fetch options
const options2 = {
  method: "GET",
};

fetch(url2, options2)
  .then((response) => response.text())
  .then((data) => console.log("Response:", data))
  .catch((error) => console.error("Error:", error));

// Configure the fetch options
const options3 = {
  method: "GET",
};

fetch(url, options3)
  .then((response) => response.text())
  .then((html) => {
    // Create a temporary div element to hold the HTML content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // Extract the specific element you want (e.g., with id "targetElement")
    const targetElement = tempDiv.querySelector("#proof_1");

    // Check if the element was found
    if (targetElement) {
      console.log("Target Element:", targetElement);
      // Do something with the extracted element
    } else {
      console.error("Target element not found");
    }
  })

  .catch((error) => console.error("Error:", error));

// Sample text containing a URL
const textWithUrl = "Here is a link: https://www.example.com. Check it out!";

// Regular expression to match URLs
const urlRegex = /(https?:\/\/[^\s]+)/g;

// Extract URLs using the regular expression
const extractedUrls = textWithUrl.match(urlRegex);
getElementBy;
// Display the extracted URLs
if (extractedUrls) {
  console.log("Extracted URLs:", extractedUrls);
} else {
  console.log("No URLs found in the text.");
}

// Get the div element by its ID
function getInstructionsText() {
  var instructionsText = document.getElementById("job-instructions");
  function extractText(node, result) {
    if (node.nodeType === 3) {
      result.push(node.textContent.trim());
    } else if (node.nodeType === 1) {
      for (var i = 0; i < node.childNodes.length; i++) {
        extractText(node.childNodes[i], result);
      }
    }
  }
  var allText = [];
  for (var i = 0; i < instructionsText.childNodes.length; i++) {
    extractText(instructionsText.childNodes[i], allText);
  }
  let text = allText.join(" ");
  return text;
}
