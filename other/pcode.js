function getPcode() {
  jQuery.ajax({
    type: "POST",
    url: "https://investing.tribratatv.id/wp-admin/admin-ajax.php",
    data: {
      action: "validasi_iklan", // the action to fire in the server
      masuk: "gass", // any JS object
    },
    dataType: "json",
    complete: function (response) {
      let hasil = JSON.parse(response.responseText);
    },
  });
}
