// Show Success Error messages
function message(message, status) {
  if (status == true) {
    $("#Success-message").html(message).slideDown();
    $("#error-message").slideUp();
    setTimeout(function () {
      $("#Success-message").slideUp();
    }, 4000);
  } else if (status == false) {
    $("#error-message").html(message).slideDown();
    $("#Success-message").slideUp();
    setTimeout(function () {
      $("#error-message").slideUp();
    }, 4000);
  }
}

// function  for form data to JSON onject
function jsonData(targetform) {
  var arr = $(targetform).serializeArray();
  // console.log(arr, "hello");

  var obj = {};
  for (var a = 0; a < arr.length; a++) {
    if (arr[a].value == "") {
      return false;
    }
    obj[arr[a].name] = arr[a].value;
  }
  // console.log(obj,"heloiojfijnfj");

  var json_string = JSON.stringify(obj);
  // console.log(json_string,"heloiojfijnfj");
  return json_string;
}

$("#save-button").on("click", function(e) {
  e.preventDefault();
  //  console.log(jsonObj)
    var jsonObj = jsonData("#addForm");
    console.log(jsonObj)
    if (jsonObj == false) {
      message("All Fields are required.", false);
    } else {
      $.ajax({
        url: 'http://localhost/php%20api/insert-api.php',
        type: "POST",
        data: jsonObj,
        success: function(data){
            console.log(data)
          message(data.message, data.status);

          if (data.status == true) {
            loadTable();
            $("#addForm").trigger("reset");
          }
        },
      });
    }
});

