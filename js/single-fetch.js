 // Fetch Single Record : Show in Modal


$(document).on("click", ".edit-btn", function(){
  // function loadTable(){
  //   $("#load-table").html("");
    var StudentId = $(this).data("eid");
    var obj = {sid : StudentId};
    var myJSON = JSON.stringify(obj);

    // console.log(myJSON) 
    // Single Records
    $.ajax({
     url : 'http://localhost/php%20api/api-fetch-single.php',
     type : "POST",
     data: myJSON,
    //  contentType: "application/json",  //it give error
      success : function(data){
        // console.log(data);
        $("#edit-id").val(data[0].id);
        $("#edit-name").val(data[0].name);
        $("#edit-age").val(data[0].age);
        $("#edit-city").val(data[0].city);

      }
    });
  // }
 
  });
  // loadTable();