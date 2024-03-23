function resolvePcode() {
  function adClick() {
    jQuery.ajax({
      type: "POST",
      url: "https://blog.ppkn.co.id/wp-admin/admin-ajax.php",
      data: {
        action: "klik_iklan", // the action to fire in the server
        masuk: "gass", // any JS object
      },
      dataType: "json",
      complete: function (response) {},
    });
  }
  function showPcode() {
    var elem = document.querySelector("#pcode");
    elem.innerHTML = "<strong>Pcode Loading...</strong>";
    jQuery.ajax({
      type: "POST",
      url: `${window.location.origin}/wp-admin/admin-ajax.php`,
      data: {
        action: "validasi_iklan", // the action to fire in the server
        masuk: "gass", // any JS object
      },
      dataType: "json",
      complete: function (response) {
        let hasil = JSON.parse(response.responseText);
        if (hasil.status == "isi") {
          var elem = document.querySelector("#pcode");
          elem.innerHTML = "<strong>Pcode: " + hasil.pcode + "</strong>";
        } else {
          var elem = document.querySelector("#pcode");
          elem.innerHTML = "<strong>Pcode will appear after do the step5</strong>";
        }
      },
    });
  }
}
resolvePcode();

function ss() {
  jQuery.ajax({
    type: "POST",
    url: "https://money.primajasa.co.id/wp-admin/admin-ajax.php",
    data: {
      action: "validasi_iklan", // the action to fire in the server
      masuk: "gass", // any JS object
    },
    dataType: "json",
    complete: function (response) {
      let hasil = JSON.parse(response.responseText);
      console.log(hasil.pcode);
    },
  });
}

ss();
