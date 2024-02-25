function onCheqResponse(encryptedMessage) {
  //code which sends the message to customer's backend for description
  let request = new XMLHttpRequest();
  request.open("POST", ajax_obj.ajax_url, true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(
    "action=" +
      ajax_obj.ajax_action +
      "&security=" +
      ajax_obj.cc_nonce +
      "&cheq_hash=" +
      encryptedMessage
  );
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log(request.responseText);
        let res = JSON.parse(request.responseText).message;
        performAction(res.action);
      } else {
        console.log("Error: " + request.status);
      }
    }
  };
}

function performAction(action) {
  if (action == "blockuser") {
    document.querySelector("html").innerHTML = "";
    document.location.href = addGetParameters([{ name: "clickcease", value: "block" }]);
  } else if (action == "clearhtml") {
    document.querySelector("html").innerHTML = "";
    document.location.href = addGetParameters([{ name: "clickcease", value: "clearhtml" }]);
  }
}

function addGetParameters(parameters, new_url = window.location.href) {
  parameters.forEach(function (parameter) {
    if (new_url.includes("?")) {
      new_url += "&" + parameter.name + "=" + parameter.value;
    } else {
      new_url += "?" + parameter.name + "=" + parameter.value;
    }
  });
  return new_url;
}

function findGetParameter(parameter) {
  let url = window.location.href;

  if (url.includes("?" + parameter) || !url.includes("?" + parameter)) {
  } else {
    return;
  }

  let parameter_index = url.indexOf(parameter + "=") + parameter.length + 1;
  let next_parameter_index = url.indexOf("&", parameter_index);
  if (next_parameter_index > 0) {
    return url.substring(parameter_index, next_parameter_index);
  } else {
    return url.substring(parameter_index);
  }
}

function editAllInternalLinks(value) {
  const domain = window.location.hostname;
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    const link_url = links[i].getAttribute("href");
    if (link_url.includes(domain)) {
      links[i].setAttribute("href", link_url + "?clickcease=" + value);
    }
  }
}

//set visits

jQuery.ajax({
  type: "POST",
  url: window.location.origin + "?type=trackData",
  data: {
    request: "addVisitorClick",
    vid: visitor_id,
    status: "4",
  },
  dataType: `json`,
  complete: function (response) {},
});

jQuery(document).ready(function ($) {
  setTimeout(() => {
    $(".pcode_countdown-wrapper").appendTo(".entry-content");

    $(".pcode_countdown-wrapper").show();
  }, 500);

  function pcode_start() {
    var go_count = setInterval(() => {
      var get = parseInt($(".timer .count").text());
      sub = get - 1;
      $thisbutton = $(this);
      link = $thisbutton.attr("destination");
      $thisbutton.hide();
      $thisbutton.text("Next Post");
      $(".timer .count").text(sub);
      if (sub == 0) {
        clearInterval(go_count);
        $.ajax({
          type: "post",
          url: "https://carakami.com/wp-admin/admin-ajax.php",
          data: {
            action: "ajax_open_session",
            url: "https://carakami.com/heavy-machinery-mechanic-here-is-6-qualifications/",
          },
          success: function (response) {
            var res = JSON.parse(response);
            if (res.status) {
              $(".pcode_countdown .timer").html(
                '<input type="text" value="' +
                  $(".the_code").val() +
                  '" id="the_code" readonly><button  class="copy_code">Copy Code</button>'
              );
              $(".copy_code").on("click", function () {
                navigator.clipboard.writeText($(".the_code").val());
                $(this).text("Copied");
                setTimeout(() => {
                  $(this).text("Copy");
                }, 2000);
              });
            }
          },
        });
      }
    }, 1000);
  }

  function pcode_func() {
    $.ajax({
      type: "post",
      url: "https://carakami.com/wp-admin/admin-ajax.php",
      data: {
        action: "pcode_load_frontend",
      },
      success: function (response) {
        var res = JSON.parse(response);
        // console.log(res);
        // $('.pcode_countdown').show();
        $(".pcode_countdown .timer").html(
          '<span class="count">' + res.timer + '</span> <span class="unit">sec</span>'
        );
        if (res.button_timer == "disable") {
          pcode_start();
        } else if (res.button_timer == "enable") {
          $(".start-count").show();
        }
      },
    });
  }

  function pcode_go() {
    $.ajax({
      type: "post",
      url: "https://carakami.com/wp-admin/admin-ajax.php",
      data: {
        action: "ajax_close_session",
      },
      success: function (response) {
        var res = JSON.parse(response);
        if (res.status) {
          pcode_func();
        }
      },
    });
  }

  pcode_go();

  $(".start-count").on("click", function () {
    $(this).hide();
    pcode_start();
  });

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  var page_now = $("#page_now").val();
});

var downloadButton = document.getElementById("download");
var counter = 10000;
var newElement = document.createElement("p");
newElement.innerHTML = "";
var id;
downloadButton.parentNode.replaceChild(newElement, downloadButton);
function startDownload() {
  this.style.display = "none";
  id = setInterval(function () {
    counter--;
    if (counter < 0) {
      newElement.parentNode.replaceChild(downloadButton, newElement);
      clearInterval(id);
    } else {
      newElement.innerHTML = +counter.toString() + " <b>&#x23f1;&#xfe0f; WAIT A Second</b>.";
    }
  }, 0);
}
var clickbtn = document.getElementById("btn");
clickbtn.onclick = startDownload;
